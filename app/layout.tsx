import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";
import ViewLayout from "@/components/ViewLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HD Wallpapers",
  authors: [{ name: "IIex-Lesquereux", url: "https://liucy.cn" }],
  keywords: "Img, img, Wallpapers, wallpaper, 4k",
  description:
    "All of my wallpapers in one repo. Free to download and use for your mobile and desktop screens.",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ViewLayout>{children}</ViewLayout>
      </body>
    </html>
  );
}
