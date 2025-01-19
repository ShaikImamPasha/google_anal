import Script from "next/script";
//import mockBlogData from "../../components/blogs/mockBlogData";

const structuredData={
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "nextbill",
  "operatingSystem": "WEB",
  "applicationCategory": "FinanceApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.6,
    "ratingCount": 2839
  },
  "description": "Create free Invoice with NextBill’s comprehensive Invoicing tool NextBill's free invoice generator makes invoicing effortless. Just input your billing details, customize your invoice, and instantly create professional invoices you can print, download, or save as PDFs."
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
        url: "https://www.nextbill.io/nextbill.png",
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
    images: "https://www.nextbill.io/nextbill.png",
  },
  alternates: {
    canonical: `${currentUrl}`,
  }
  
};

export default function BlogsMainPage() {
  return (
    <div className="w-full  h-auto bg-[#f9fbfc] ">
       <Script
               id="structured-data-itemlist" // Unique id for the script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
   this is blog page
    </div>
  );
}
