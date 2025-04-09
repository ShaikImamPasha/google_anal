import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";
import Head from "next/head";
import ReduxProvider from "./ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const currentUrl = `https://www.nextbill.io`;

export const metadata = {
  title: "meta title tets",
  description: "meta des",
  keywords: "nextbill,recurring invoice,invoice generation,invoicing process,creating invoice,generate e invoice,create the invoice,generate bill,invoice and payment,create billing invoice,invoice management system,invoice maker,online invoice generator,create invoice online,online bill generator",
  openGraph: {
    title: "meta title",
    description: "met dessly in one place.",
    images: [
      {
        url: "https://www.imam.live/Nextbill_final_logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "eta title",
    title: "eta des",
    description:
      "met des",
    images: [
      {
        url: "https://www.imam.live/Nextbill_final_logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
  alternates: {
    canonical: `${currentUrl}`,
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <head>
        <link rel="icon" href="/Nextbill_final_logo_tab.png" title="nextbill icon"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <ReduxProvider>
        {children}

        </ReduxProvider>
      </body>
    </html>
  );
}
