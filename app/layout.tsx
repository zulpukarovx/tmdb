import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Movie App",
  description: "Search and Save your favourite movies for later",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins">{children}</body>
    </html>
  );
}
