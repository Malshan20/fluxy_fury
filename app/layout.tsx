import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "FLUXY FURY | Elite Fortnite Esports Team",
  description:
    "FLUXY FURY is an elite Fortnite esports team dominating the competitive scene with unmatched skill, strategy, and determination.",
  icons: [{ url: '/favicon.png' }]
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
