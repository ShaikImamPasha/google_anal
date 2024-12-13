'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
<>
return (
 <button
  onClick={() => {
    gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Button Clicked',
      value: 1
    });
  }}
>
  Click here for google ananlysis
</button> 
<Link href="/customEditor">
clk to go edit
</Link>
</>
  
}
