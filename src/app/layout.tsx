import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Providers } from './components/provider'

const typeface = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grapevine',
  description: 'Solve problems, together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={typeface.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
