import '#assets/styles/app.css'

import { inter } from '#assets/fonts'
import type { Metadata } from 'next'
import { setTheme } from '#utils'
import type { RootLayoutProps } from '#types'

export const metadata: Metadata = {
  title: 'varmanaa.dev'
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <script dangerouslySetInnerHTML={{ __html: `(${setTheme})();` }} />
      </head>
      <body className={`${inter.className} antialiased flex`}>
        {props.children}
      </body>
    </html>
  )
}