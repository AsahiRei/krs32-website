import type { Metadata } from "next";
import { Geist_Mono, Schibsted_Grotesk, Silkscreen } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krs32-website.vercel.app";
const description =
  "KRS-32 is a free GBA, DS and 3DS emulator for Android with pixel-sharp scaling, two-tap save states, dual-screen layouts and controls you can move anywhere.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KRS-32 — Free GBA, DS & 3DS Emulator for Android",
    template: "%s | KRS-32",
  },
  description,
  applicationName: "KRS-32",
  keywords: [
    "KRS-32",
    "GBA emulator",
    "DS emulator",
    "3DS emulator",
    "Android emulator",
    "save states",
    "Game Boy Advance",
  ],
  authors: [{ name: "An Kurisu" }],
  creator: "An Kurisu",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "KRS-32",
    title: "KRS-32 — Your games, pocket-sized",
    description,
    images: [{ url: "/assets/images/krs32-icon.png", alt: "KRS-32 icon" }],
  },
  twitter: {
    card: "summary",
    title: "KRS-32 — Your games, pocket-sized",
    description,
    images: ["/assets/images/krs32-icon.png"],
  },
  other: {
    "appbuildersph-verification": "muphpnpdthqnlqcdlfhbpyjvqenb1ajr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KRS-32",
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  description,
  url: siteUrl,
  author: { "@type": "Person", name: "An Kurisu" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${geistMono.variable} ${silkscreen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
