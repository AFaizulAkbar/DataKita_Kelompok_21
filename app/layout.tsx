import './globals.css'
import type { ReactNode } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}