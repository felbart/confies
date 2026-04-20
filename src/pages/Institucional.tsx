import SectionAtuacao from "@/components/sections/_home/SectionAtuacao"
import SectionDocumentos from "@/components/sections/_institucional/SectionDocumentos"
import SectionInstitucional from "@/components/sections/_institucional/SectionInstitucional"
import SectionProcesso from "@/components/sections/_institucional/SectionProcesso"
import CTA from "@/components/sections/CTA"
import HeroInterno from "@/components/sections/HeroInterno"

const Institucional = () => {
  return (
    <section>
      <HeroInterno
        eyebrow="Institucional"
        title="Conheça o papel do CONFIES na integração entre universidades, sociedade e inovação no Brasil."
        description="O CONFIES conecta e defende fundações que viabilizam a relação entre universidades, institutos de pesquisa, empresas e sociedade."
        backgroundImage="/images/hero-institucional.png"
     />
     <SectionInstitucional />
     <SectionAtuacao />
     <SectionProcesso />
     <SectionDocumentos />
     <CTA />
    </section>
  )
}

export default Institucional