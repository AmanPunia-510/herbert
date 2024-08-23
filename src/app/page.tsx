import Cards from "@/components/home/Cards";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import HomeHero from "@/components/home/HomeHero";
import Plans from "@/components/home/Plans";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Cards />
      <Features />
      <Plans />
      <Team />
      <Faq />
    </>
  );
}
