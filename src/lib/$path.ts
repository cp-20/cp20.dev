export const pagesPath = {
  "profile": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile' as const, hash: url?.hash })
  },
  "works": {
    "dicespec": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/dicespec' as const, hash: url?.hash })
    },
    "no_log_chat": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/no-log-chat' as const, hash: url?.hash })
    },
    "titech_lecture_list": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/titech-lecture-list' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  apple_touch_icon_png: '/apple-touch-icon.png',
  avatar_png: '/avatar.png',
  favicon_ico: '/favicon.ico',
  icon_192_png: '/icon-192.png',
  icon_512_png: '/icon-512.png',
  manifest_webmanifest: '/manifest.webmanifest',
  og_images: {
    dicespec_png: '/og-images/dicespec.png',
    no_log_chat_png: '/og-images/no-log-chat.png',
    titech_lecture_list_png: '/og-images/titech-lecture-list.png'
  },
  ogp_png: '/ogp.png',
  presentation_images: {
    mstechcamp_19_png: '/presentation-images/mstechcamp-19.png',
    mstechcamp_2th_anniversary_png: '/presentation-images/mstechcamp-2th-anniversary.png'
  }
} as const

export type StaticPath = typeof staticPath
