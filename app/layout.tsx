import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Horoizon",
  description: "Explore my arcade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="moving-gradient-bg">
        {children}
      </body>
    </html>
  );
}
