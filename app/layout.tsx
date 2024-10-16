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
    <html lang="en" className="no-scrollbar cursor-custom w-full h-full">
      <body className="moving-gradient-b w-full h-full overflow-auto cursor-custom no-scrollbar bg-cover bg-no-repeat" style={{ backgroundImage: `url(/assets/cb.jpg)` }}>
        {children}
      </body>
    </html>
  );
}
