import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Horizon",
  description: "Explore my arcade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar w-full h-full">
      <body className="moving-gradient-bg w-full h-full overflow-auto no-scrollbar">
        {children}
      </body>
    </html>
  );
}
