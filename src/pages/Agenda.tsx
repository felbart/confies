import EventoDestaque from "@/components/sections/_agenda/EventoDestaque"
import SectionEventos from "@/components/sections/_agenda/SectionEventos"
import HeroInterno from "@/components/sections/HeroInterno"

const Agenda = () => {
  return (
    <>
      <HeroInterno 
      eyebrow="nossos eventos"
      title="Agenda e eventos do CONFIES"
      description="Acompanhe os principais encontros, fóruns e iniciativas promovidas pelo CONFIES em todo o Brasil."
      backgroundImage="/images/hero-agenda.png"
      />
      <EventoDestaque />
      <SectionEventos />
    </>

  )
}

export default Agenda