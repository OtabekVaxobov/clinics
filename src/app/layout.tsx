import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { Header, Header2 } from '@/sections/Header'
import Footer from '@/sections/Footer'
 

import { ThemeProvider } from "@/components/theme/theme-provider"


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Respublika ixtisoslashtirilgan ona va bola salomatligi ilmiy-amaliy tibbiyot markazi davlat muassasasining Sirdaryo viloyati filiali',
  description: 'Respublika ixtisoslashtirilgan ona va bola salomatligi ilmiy-amaliy tibbiyot markazi davlat muassasasining Sirdaryo viloyati filiali',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header2/>
          {children}
          <Footer/>
        </ThemeProvider>
          </body>
    </html>
  )
}
