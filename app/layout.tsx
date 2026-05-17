import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'DataKita — Pendataan Warga Digital',
  description: 'Platform pendataan warga berbasis digital',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}