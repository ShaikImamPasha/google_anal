import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "imam main page",
  "alternateName": "imam main page",
  "url": "https://www.nextbill.io/",
  "logo": "https://www.nextbill.io/nextbill.png",
  "description": "Take the hassle out of billing with NextBill, your go-to invoicing platform. With features like automated reminders and customizable templates, we simplify your finance management so you can focus on what you're great at.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "9958553533",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en","Hindi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/nextbill/",
    "https://www.instagram.com/nextbill_/",
    "https://x.com/NextBill_"
  ]
}
const currentUrl = `https://www.nextbill.io`;

export const metadata = {
  title: "meta title",
  description: "meta des",
  keywords: "nextbill,recurring invoice,invoice generation,invoicing process,creating invoice,generate e invoice,create the invoice,generate bill,invoice and payment,create billing invoice,invoice management system,invoice maker,online invoice generator,create invoice online,online bill generator",
  openGraph: {
    title: "meta title",
    description: "met dessly in one place.",
    images: [
      {
        url: "https://www.imam.live/Nextbill_final_logo_optimized.jpg",
        width: 100,
        height: 100,
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
        url: "https://www.imam.live/Nextbill_final_logo_optimized.jpg",
        width: 100,
        height: 100,
      },
    ],
  },
  alternates: {
    canonical: `${currentUrl}`,
  }
  
};

export default function Home() {
  return <>
   <Script
                  id="structured-data-itemlist-main" // Unique id for the script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
 {/* <button
  onClick={() => {
    gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Button Clicked',
      value: 1
    });
  }}
>
  Click here for google ananlysis
</button>  */}
<Link href="/customEditor">
clk to go edit
</Link>
<p>
  logo check
</p>
</>
  
  
}
