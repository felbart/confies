import Header from "@/components/layout/Header";
import AssociadasLogos from "@/components/sections/_home/AssociadasLogos";
import { Hero } from "@/components/sections/_home/Hero";
import QuemSomos from "@/components/sections/_home/QuemSomos";
import SectionAtuacao from "@/components/sections/_home/SectionAtuacao";
import SectionNoticias from "@/components/sections/_home/SectionNoticias";


export default function Home() {
  return (
    <main className="bg-white text-[#2A2A2A]">
      <Header />
      <Hero />

      <QuemSomos />
      <SectionNoticias />
      <SectionAtuacao />
      <AssociadasLogos />
    </main>
  );
}