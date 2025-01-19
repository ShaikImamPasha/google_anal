import Script from "next/script";
//import mockBlogData from "../../components/blogs/mockBlogData";

const structuredData={
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "url":"https://www.example.com/courses#intro-to-cs",
          "name": "Introduction to Computer Science and Programming",
          "description": "This is an introductory CS course laying out the basics.",
          "provider": {
            "@type": "Organization",
            "name": "University of Technology - Example",
            "sameAs": "https://www.example.com"
         }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "url":"https://www.example.com/courses#intermediate-cs",
          "name": "Intermediate Computer Science and Programming",
          "description": "This is a CS course that builds on the basics learned in the Introduction course.",
          "provider": {
            "@type": "Organization",
            "name": "University of Technology - Example",
            "sameAs": "https://www.example.com"
         }
       }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Course",
          "url":"https://www.example.com/courses#advanced-cs",
          "name": "Advanced Computer Science and Programming",
          "description": "This CS course covers advanced programming principles.",
          "provider": {
            "@type": "Organization",
            "name": "University of Technology - Eureka",
            "sameAs": "https://www.example.com"
         }
        }
      }
    ]
  }
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
