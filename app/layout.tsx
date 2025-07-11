import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENGEI - 企業Webサイト",
  description: "ENGEIの企業Webサイトです",
};

// ルートレイアウト
// HTMLにcaramellatteテーマを適用
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="caramellatte">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}