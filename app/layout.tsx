import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LookeShop',
  description: 'Created by LookeShop',
  generator: 'LookeShop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
