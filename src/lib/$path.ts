export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  avatar_png: '/avatar.png',
  og_images: {
    dicespec_png: '/og-images/dicespec.png',
    no_log_chat_png: '/og-images/no-log-chat.png'
  }
} as const

export type StaticPath = typeof staticPath
