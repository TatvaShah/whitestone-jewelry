import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { InstagramEmbeds } from "@/components/sections/instagram-embeds";
import { Order } from "@/components/sections/order";
import { Process } from "@/components/sections/process";
import { Reels } from "@/components/sections/reels";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { Shapes } from "@/components/sections/shapes";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Highlights />
      <Shapes />
      <Services />
      <Reels />
      <Gallery />
      <Process />
      <About />
      <Reviews />
      <InstagramEmbeds />
      <Order />
      <FaqSection />
      <Contact />
    </main>
  );
}
