import type { Metadata } from "next";
import { Lacquer } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Doto } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import { ThemeProvider } from "@/components/theme-provider"

const lacquer = Lacquer({ subsets: ['latin'], weight: ['400'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })
const doto = Doto({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Rocket Portfolio",
  description: "Crypto portfolio tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={josefin_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Navbar />
          </div>
          <div className="animate-appear">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
