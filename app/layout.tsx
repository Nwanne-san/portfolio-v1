import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nwanne | Frontend Enigineer",
  description:
    "Welcome to my portfolio! I am a frontend engineer with a passion for building beautiful and functional web applications.",
  keywords: ["Nwanne", "Frontend Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
