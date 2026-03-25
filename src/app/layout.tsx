import type { Metadata } from "next";
import type { FC, ReactNode } from "react";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const defaultSeoTitle = `${siteConfig.name} | ${siteConfig.title}`;

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: defaultSeoTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  icons: {
    icon: [{ url: "/assets/my_logo.png", type: "image/png" }],
    shortcut: [{ url: "/assets/my_logo.png", type: "image/png" }],
    apple: [{ url: "/assets/my_logo.png", type: "image/png" }],
  },
  openGraph: {
    title: defaultSeoTitle,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeoTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<RootLayoutProps> = ({
  children,
}) => (
  <html lang="en" className="h-full antialiased">
    <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
      {children}
    </body>
  </html>
);

export default RootLayout;
