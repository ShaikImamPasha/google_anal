import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";
import Head from "next/head";

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

// Updated metadata with longer description
export const metadata = {
  title: "Create Next App",
  description: "Experience the best of modern web development with our new Next.js app. Featuring optimized performance, responsive design, and an intuitive user experience, this app is crafted to deliver the highest quality in web development.",
  openGraph: {
    images: [
      {
        url: "https://google-anal.vercel.app/Instagramus.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
