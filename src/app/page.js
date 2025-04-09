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
new chek  again
</Link>
<p>
  logo check
</p>
</>
  
  
}
