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
    default: "GlowFit Women's Gym | Premium Women-Exclusive Fitness Studio",
    template: "%s | GlowFit Women's Gym",
  },

  description:
    "GlowFit Women’s Gym in Nayarangadi, Thrissur is a premium women-exclusive fitness studio offering expert-led strength training, fat-loss programs, functional workouts, yoga, Zumba, and personalized coaching. With a supportive all-women community, modern equipment, and certified trainers, GlowFit helps you transform your fitness journey with confidence. Visit us at Thrissur 679572 or contact +91 7736219344 / gglowfit@gmail.com to begin your transformation today.",
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
    "GlowFit Gym",
    "women's gym in Thrissur",
    "women's fitness center Thrissur",
    "ladies gym in Thrissur",
    "gym for women in Nayarangadi",
    "best women's gym in Thrissur",
    "ladies-only fitness studio Thrissur",
    "women's fat-loss programs Thrissur",
    "Zumba classes for women Thrissur",
    "women's yoga classes Thrissur",
    "female workout center Nayarangadi",
    "women's gym near me Thrissur",
    "ladies gym near Nayarangadi",
    "GlowFit Thrissur",
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
    url: "https://glowfit-nextjs.vercel.app",
    title: "GlowFit Women's Gym | Premium Women-Exclusive Fitness Studio",
    description:
      "GlowFit Women’s Gym in Nayarangadi, Thrissur is a premium women-exclusive fitness studio offering expert-led strength training, fat-loss programs, functional workouts, yoga, Zumba, and personalized coaching. With a supportive all-women community, modern equipment, and certified trainers, GlowFit helps you transform your fitness journey with confidence. Visit us at Thrissur 679572 or contact +91 7736219344 / gglowfit@gmail.com to begin your transformation today.",
    siteName: "GlowFit Women's Gym",
    images: [
      {
        url: "https://glowfit-nextjs.vercel.app/assets/logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "GlowFit Women's Gym - Empowering Women's Fitness",
      },
    ],
    videos: [],
    audio: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlowFit Women's Gym | Premium Women-Exclusive Fitness Studio",
    description:
      "GlowFit Women’s Gym in Nayarangadi, Thrissur is a premium women-exclusive fitness studio offering expert-led strength training, fat-loss programs, functional workouts, yoga, Zumba, and personalized coaching. With a supportive all-women community, modern equipment, and certified trainers, GlowFit helps you transform your fitness journey with confidence. Visit us at Thrissur 679572 or contact +91 7736219344 / gglowfit@gmail.com to begin your transformation today.",
    images: ["/assets/logo/Logo.png"],
    creator: "@GlowFitGym",
    site: "@GlowFitGym",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: "/manifest.json",
  other: {
    "og:updated_time": "2024-11-21T10:00:00+00:00",
    "google-site-verification": "SDpn12dqUS4tZ-va1hxTAB41lVg1Y_HilcOGjP6uFes",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="SDpn12dqUS4tZ-va1hxTAB41lVg1Y_HilcOGjP6uFes"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "GlowFit Women's Gym",
              description:
                "Empowering women to achieve their strongest, healthiest selves through personalized fitness programs.",
              url: "https://glowfit-nextjs.vercel.app",
              telephone: "+91 7736219344",
              sameAs: [
                "https://www.instagram.com/glowfit0071",
                "https://www.google.com/maps/place/10%C2%B038'34.9%22N+76%C2%B000'49.5%22E/@10.6893268,75.9277419,11.5z/data=!4m4!3m3!8m2!3d10.6430202!4d76.0137574?hl=en&entry=ttu",
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "10.6430202",
                longitude: "76.0137574",
              },
              logo: "https://glowfit-nextjs.vercel.app/assets/logo/Logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nayarangahadi",
                addressLocality: "Thrissur",
                postalCode: "679572",
                addressCountry: "IN",
              },
              image: "https://glowfit-nextjs.vercel.app/assets/logo/Logo.png",
              openingHours: ["Mo-Fr 06:00-22:00", "Sa-Su 08:00-20:00"],
              offers: {
                "@type": "Offer",
                category: "Fitness Classes",
                priceCurrency: "INR",
                acceptedPaymentMethods: [
                  "Credit Card",
                  "Debit Card",
                  "Cash",
                  "UPI",
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
