import AssociadasCard from "@/components/ui/AssociadasCard"
import {
  Megaphone,
  Search,
  CalendarDays,
  MessageSquare,
  User,
} from "lucide-react"

const cards = [
  {
    title: "Representação Nacional",
    description:
      "Atuamos junto aos poderes públicos e instituições privadas para garantir os direitos e interesses das Fundações de Apoio.",
    icon: Megaphone,
  },
  {
    title: "Estudos e Pesquisas",
    description:
      "Produzimos análises e levantamentos estratégicos para fortalecer a atuação das fundações e orientar decisões.",
    icon: Search,
  },
  {
    title: "Fóruns e Eventos",
    description:
      "Organizamos encontros nacionais e regionais que promovem a troca de experiências, boas práticas e soluções conjuntas.",
    icon: CalendarDays,
  },
  {
    title: "Divulgação e Comunicação",
    description:
      "Ampliamos a transparência e a visibilidade das Fundações por meio de publicações, canais digitais e conteúdos especializados.",
    icon: MessageSquare,
  },
]

const SectionAtuacao = () => {
  return (
    <section
      className="section relative overflow-hidden bg-primary-900"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.08)), url('/images/associadas-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10">
        <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center md:mb-16">
          <span className="eyebrow mb-4 flex items-center gap-2 text-secondary-200">
            <User size={18} />
            Nossa Atuação
          </span>

          <h2 className="mb-4 max-w-4xl text-white">
            O que fazemos pelas nossas associadas
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-primary-200 md:text-lg">
            Promovemos integração, defesa e apoio às Fundações de Apoio em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <AssociadasCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionAtuacao