import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import ChatButton from "../components/ChatButton";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mihir Jaiswal",
  description: "I'm Mihir Jaiswal, your friendly neighborhood software, web developer and designer from Indore, India. I specialize in building web applications and sites using Javascript, React, Next.js & Node.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ChatButton />
      </body>
    </html>
  );
}
