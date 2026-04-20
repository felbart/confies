import SectionContato from "@/components/sections/_contato/SectionContato"
import HeroInterno from "@/components/sections/HeroInterno"

const Contato = () => {
  return (
    <>
    <HeroInterno
    title="Fale Conosco"
    description="Entre em contato conosco e saiba onde nos encontrar."
    eyebrow="Contato"
    backgroundImage="/images/hero-contato.png"
    />
    <SectionContato />
    </>
  )
}

export default Contato