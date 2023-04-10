import { Mulish } from "next/font/google";

import Sidebar from './components/sidebar/Sidebar'

import './globals.css'

export const metadata = {
  title: 'Whatsapp',
  description: 'Whatsapp Clone',
}

const font = Mulish({
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
