import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "GlowFit Women's Gym | Empowering Women's Fitness",
    template: "%s | GlowFit Women's Gym",
  },
  description:
    "Discover GlowFit Women's Gym, a supportive fitness community designed exclusively for women. Join our personalized fitness programs including strength training, yoga, dance fitness, and more. Empowering women to achieve their strongest, healthiest selves.",
  keywords: [
    "women's gym",
    "female fitness",
    "strength training for women",
    "yoga for women",
    "dance fitness",
    "women's health",
    "fitness community",
    "personalized workouts",
    "empowerment through fitness",
    "GlowFit Gym"
  ],
  authors: [{ name: "GlowFit Women's Gym" }],
  creator: "GlowFit Women's Gym",
  publisher: "GlowFit Women's Gym",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowfit-nextjs.vercel.app/",
    title: "GlowFit Women's Gym | Empowering Women's Fitness",
    description:
      "Discover GlowFit Women's Gym, a supportive fitness community designed exclusively for women. Join our personalized fitness programs including strength training, yoga, dance fitness, and more.",
    siteName: "GlowFit Women's Gym",
    images: [
      {
        url: "/assets/logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "GlowFit Women's Gym - Empowering Women's Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlowFit Women's Gym | Empowering Women's Fitness",
    description:
      "Discover GlowFit Women's Gym, a supportive fitness community designed exclusively for women. Join our personalized fitness programs including strength training, yoga, dance fitness, and more.",
    images: ["/assets/logo/Logo.png"],
    creator: "@GlowFitGym",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "GlowFit Women's Gym",
              "description": "Empowering women to achieve their strongest, healthiest selves through personalized fitness programs.",
              "url": "https://glowfit-nextjs.vercel.app/",
              "telephone": "+91 7736219344",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nayarangahadi",
                "addressLocality": "Thrissur",
                "postalCode": "679572",
                "addressCountry": "IN"
              },
              "image": "https://glowfit-nextjs.vercel.app/assets/logo/Logo.png",
              "openingHours": [
                "Mo-Fr 06:00-22:00",
                "Sa-Su 08:00-20:00"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}