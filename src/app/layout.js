import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'デモサイト',
  description: 'Generated by create.xyz',
  icons: {
    icon: [{url: '/clothing-exhibition.svg', sizes: '32x32', type: 'image/svg+xml'}],
    shortcut: [{url: '/clothing-exhibition.svg', sizes: '32x32', type: 'image/svg+xml'}],
    apple: [{url: '/clothing-exhibition.svg', sizes: '32x32', type: 'image/svg+xml'}],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
