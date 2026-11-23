const canvas = document.querySelector<HTMLCanvasElement>('.portrait canvas')!
const ctx = canvas.getContext('2d')!
const dark = matchMedia('(prefers-color-scheme: dark)')
const still = matchMedia('(prefers-reduced-motion: reduce)').matches

const dotTone = (grey: number) => (dark.matches ? grey : 1 - grey ** 1.5)

// Magnifying lens under the cursor: dots inside it spread out and grow a little.
// Radius is relative to a 416px-wide portrait (the CSS max width) and scales with it.
const LENS_RADIUS = 40 / 416
const LENS_STRENGTH = 0.3

const img = new Image()
img.src = canvas.dataset.src!
img.decode().then(() => {
  const cols = img.width
  const rows = img.height
  const src = new OffscreenCanvas(cols, rows).getContext('2d')!
  src.drawImage(img, 0, 0)
  const px = src.getImageData(0, 0, cols, rows).data

  const dots: { col: number; row: number; grey: number; alpha: number }[] = []
  for (let i = 0; i < cols * rows; i++) {
    const alpha = px[i * 4 + 3] / 255
    if (alpha > 8 / 255) dots.push({ col: i % cols, row: Math.floor(i / cols), grey: px[i * 4] / 255, alpha })
  }
  const n = dots.length
  // per dot: x offset, y offset, extra scale; eased towards the lens target each frame
  const state = new Float32Array(n * 3)
  let mx = -1e5
  let my = -1e5
  let raf = 0

  const kick = () => {
    raf ||= requestAnimationFrame(frame)
  }

  function frame() {
    raf = 0
    const width = Math.round(canvas.clientWidth * devicePixelRatio)
    if (canvas.width !== width) {
      canvas.width = width
      canvas.height = Math.round((width * rows) / cols)
    }
    const cell = canvas.width / cols
    const lens = canvas.width * LENS_RADIUS
    let moving = false

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = getComputedStyle(canvas).color
    ctx.beginPath()
    for (let i = 0; i < n; i++) {
      const dot = dots[i]
      const hx = (dot.col + 0.5) * cell
      const hy = (dot.row + 0.5) * cell
      const dx = hx - mx
      const dy = hy - my
      const d = Math.hypot(dx, dy)
      const f = d < lens ? LENS_STRENGTH * (1 - (d / lens) ** 2) : 0
      const j = i * 3
      const tx = dx * f
      const ty = dy * f
      const ts = f * 0.9
      // Ease towards the target, then snap once close, so frames stop while the cursor rests.
      if (Math.abs(tx - state[j]) + Math.abs(ty - state[j + 1]) + Math.abs(ts - state[j + 2]) * cell > 0.05) {
        state[j] += (tx - state[j]) * 0.18
        state[j + 1] += (ty - state[j + 1]) * 0.18
        state[j + 2] += (ts - state[j + 2]) * 0.18
        moving = true
      } else {
        state[j] = tx
        state[j + 1] = ty
        state[j + 2] = ts
      }
      const ox = state[j]
      const oy = state[j + 1]
      const os = state[j + 2]

      const r = (cell / 2) * (0.12 + 0.88 * dotTone(dot.grey)) * dot.alpha * (1 + os)
      ctx.moveTo(hx + ox + r, hy + oy)
      ctx.arc(hx + ox, hy + oy, r, 0, Math.PI * 2)
    }
    ctx.fill()
    if (moving) kick()
  }

  new ResizeObserver(kick).observe(canvas)
  dark.addEventListener('change', kick)
  if (!still) {
    canvas.addEventListener('pointermove', (e) => {
      mx = e.offsetX * devicePixelRatio
      my = e.offsetY * devicePixelRatio
      kick()
    })
    canvas.addEventListener('pointerleave', () => {
      mx = my = -1e5
      kick()
    })
  }
})
