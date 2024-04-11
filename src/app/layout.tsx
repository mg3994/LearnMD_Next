import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppName, OwnerName, OwnerUrl, baseURL } from "./constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${baseURL}`),
  keywords: [
    "Learn Programing",
    "Mobile App Programming",
    "Learn MD",
    "Learn Mobile Development",
  ],
  applicationName: `${AppName}`,
  authors: [{ name: `${OwnerName}`, url: `${OwnerUrl}` }],
  creator: `${OwnerName}`,
  publisher: `${OwnerName}`,
  title: {
    default: `${AppName}`,
    template: `%s | ${AppName}`,
  },
  description: "Download the App From Google Play Store",
  icons: `${baseURL}/learn_md.png`,
  openGraph: {
    images: ["/learn_md.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
