'use client'
import Image from "next/image";

export default function Home() {
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
  Click Me
</button>

  );
}
