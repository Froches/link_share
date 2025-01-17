import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToggleProvider } from "@/context/ToggleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Share",
  description: "Link sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ToggleProvider>
        <body className={inter.className}>
          <main className="bg-background">{children}</main>
        </body>
      </ToggleProvider>
    </html>
  );
}
