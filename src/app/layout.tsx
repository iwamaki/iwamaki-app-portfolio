import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iwamaki.app - Apps by iwamaki",
    template: "%s - iwamaki.app",
  },
  description: "便利なアプリを作っています。NoteAppなど、様々なアプリケーションを公開中。",
  keywords: ["iwamaki", "apps", "NoteApp", "Android", "iOS"],
  authors: [{ name: "iwamaki" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://iwamaki.app",
    siteName: "iwamaki.app",
    title: "iwamaki.app - Apps by iwamaki",
    description: "便利なアプリを作っています",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
