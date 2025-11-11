

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from '../components/navigation/Nav'
import UrlBar from '../components/UrlBar/UrlBar'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'The Gallery',
  description: 'Web app for browsing the Met Museum of Art public collection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="urlBar">
            <UrlBar baseURL="http://localhost:4001" />
          </div>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
