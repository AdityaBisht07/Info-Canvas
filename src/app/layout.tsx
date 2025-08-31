import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ADITYA BISHT - Portfolio',
  description: 'Interactive Personal Portfolio Website showcasing projects, skills, and experience',
  keywords: ['portfolio', 'developer', 'web development', 'react', 'nextjs'],
  authors: [{ name: 'Your Name' }],
  creator: 'ADITYA BISHT',
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Interactive Personal Portfolio Website',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
