import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import ChatButton from "../components/ChatButton";
import { structuredData } from "../lib/structured-data"; 


const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto', 
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), 
  title: {
    default: "Mihir Jaiswal | Web Developer & Designer",
    template: "%s | Mihir Jaiswal",
  },
  description: "I'm Mihir Jaiswal, a software engineer and web developer from Indore, India specializing in React, Next.js, and modern JavaScript applications.",
  keywords: ["web developer", "frontend developer", "React developer", "Next.js", "JavaScript", "Indore", "India", "software engineer"],
  authors: [{ name: "Mihir Jaiswal" }],
  creator: "Mihir Jaiswal",
  publisher: "Mihir Jaiswal",
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mihirjaiswal.vercel.app/", 
    title: "Mihir Jaiswal | Web Developer & Designer",
    description: "I'm Mihir Jaiswal, a software engineer and web developer from Indore, India specializing in React, Next.js, and modern JavaScript applications.",
    siteName: "Mihir Jaiswal Portfolio",
    images: [
      {
        url: "/assests/mihir.webp", 
        width: 1200,
        height: 630,
        alt: "Mihir Jaiswal - Web Developer & Designer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${roboto.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={roboto.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
          <ChatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}