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
