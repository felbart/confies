import Header from "@/components/layout/Header";
import { Hero } from "@/components/sections/_home/Hero";
import QuemSomos from "@/components/sections/_home/QuemSomos";
import SectionNoticias from "@/components/sections/_home/SectionNoticias";


export default function Home() {
  return (
    <main className="bg-white text-[#2A2A2A]">
      <Header />
      <Hero />

      <QuemSomos />
      <SectionNoticias />
      

      <section id="agenda" className="mx-auto container px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Agenda</h2>
      </section>

      <section id="noticias" className="mx-auto container px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Notícias</h2>
      </section>

      <section id="contato" className="mx-auto container px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Contato</h2>
      </section>
    </main>
  );
}