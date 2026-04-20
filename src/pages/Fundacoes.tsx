import FAQ from "@/components/sections/_fundacoes/FAQ"
import SectionFundacoes from "@/components/sections/_fundacoes/SectionFundacoes"
import AssociadasLogos from "@/components/sections/_home/AssociadasLogos"
import SectionAtuacao from "@/components/sections/_home/SectionAtuacao"
import HeroInterno from "@/components/sections/HeroInterno"

const Fundacoes = () => {
  return (
    <section id="hero">
        <HeroInterno 
        title="Fundações de Apoio à ciência e inovação no Brasil"
        description="As fundações de apoio desempenham um papel essencial na viabilização de projetos de ensino, pesquisa, extensão e inovação, conectando universidades, instituições e sociedade."
        eyebrow="Sobre as fundações"
        backgroundImage="/images/hero-fundacoes.png"
        />
        <FAQ />

        <SectionFundacoes />
        <SectionAtuacao />
        <AssociadasLogos />
    </section>
  )
}

export default Fundacoes