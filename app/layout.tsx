import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LookeShop',
  description: 'Created with v0',
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
