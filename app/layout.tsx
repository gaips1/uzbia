import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uzbia Bio",
  description: "Слава узбии!",
  icons: {"icon": "/public/uzbia.png",shortcut: '/public/uzbia.png', apple: '/public/uzbia.png',}
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
        
        
        </body>
    </html>
  );
}
