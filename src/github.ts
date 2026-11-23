const LEVELS = ['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE']

export interface Calendar {
  total: number
  weeks: { date: string; count: number; weekday: number; level: number }[][]
}

// Locally a missing graph is fine. In CI it must fail the build, or the deploy goes out without it.
function skip(reason: string, err?: unknown): null {
  if (process.env.CI) throw new Error(`[github] ${reason}`, { cause: err })
  console.warn(`[github] ${reason}, skipping contribution graph`, err ?? '')
  return null
}

export async function contributions(login: string): Promise<Calendar | null> {
  const token = process.env.GITHUB_TOKEN
  if (!token) return skip('GITHUB_TOKEN not set')
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `bearer ${token}` },
      body: JSON.stringify({
        query: `query($login: String!) { user(login: $login) { contributionsCollection { contributionCalendar {
          totalContributions weeks { contributionDays { date contributionCount weekday contributionLevel } } } } } }`,
        variables: { login },
      }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    if (json.errors) throw new Error(JSON.stringify(json.errors))
    const cal = json.data.user.contributionsCollection.contributionCalendar
    return {
      total: cal.totalContributions,
      weeks: cal.weeks.map((w: any) =>
        w.contributionDays.map((d: any) => ({
          date: d.date,
          count: d.contributionCount,
          weekday: d.weekday,
          level: LEVELS.indexOf(d.contributionLevel),
        })),
      ),
    }
  } catch (err) {
    return skip('contribution fetch failed', err)
  }
}
