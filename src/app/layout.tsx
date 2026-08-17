import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import ScrollToTop from '@/src/components/ScrollToTop'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Risyad Athaya',
  description: 'Portfolio website of Risyad Athaya',
}

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`h-full antialiased scrollbar-hide`}>
      <body className={`${orbitron.className}`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
