import { ArrowLeft, ArrowUpRight, ExternalLink, Folder, FolderOpen, House } from 'lucide'

export const pairs = {
  external: { rest: ArrowUpRight, hover: ExternalLink },
  more: { rest: Folder, hover: FolderOpen },
  back: { rest: ArrowLeft, hover: House },
}
export type Kind = keyof typeof pairs
