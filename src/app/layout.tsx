import type { Metadata } from "next";
import { Bodoni_Moda } from 'next/font/google'
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Risyad Athaya",
  description: "Portfolio website of Risyad Athaya",
};

export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scrollbar-hide`}
    >
      <body className={`${bodoniModa.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
