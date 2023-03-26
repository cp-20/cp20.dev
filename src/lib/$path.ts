export const pagesPath = {
  "profile": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  avatar_png: '/avatar.png',
  og_images: {
    dicespec_png: '/og-images/dicespec.png',
    no_log_chat_png: '/og-images/no-log-chat.png'
  },
  presentation_images: {
    mstechcamp_19_png: '/presentation-images/mstechcamp-19.png',
    mstechcamp_2th_anniversary_png: '/presentation-images/mstechcamp-2th-anniversary.png'
  }
} as const

export type StaticPath = typeof staticPath
