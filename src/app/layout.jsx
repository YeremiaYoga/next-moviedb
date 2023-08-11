import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Film',
  description: 'Film Bouz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.className} mx-14 my-10`}>
        <nav>
          <h1 className='text-4xl mb-8' >Film Bouz</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
