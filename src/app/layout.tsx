import "./globals.css";

// This layout only imports global CSS
// The actual html/body structure is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
