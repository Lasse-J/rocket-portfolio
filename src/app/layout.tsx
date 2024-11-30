import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Josefin_Sans } from 'next/font/google';
const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Rocket Portfolio',
    default: 'Rocket Portfolio',
  },
  description: "Crypto portfolio tracker app",
  applicationName: 'Portfolio Tracker'
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
          <div className="animate-appear">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
