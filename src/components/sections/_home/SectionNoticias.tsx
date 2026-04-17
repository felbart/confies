import { NewsCard } from "@/components/ui/NewsCard"
import { Button } from "@/components/ui/Button"

const mock = [
  {
    title:
      "CONFIES participa de importante reunião no MEC – Secretaria de Educação Superior (SESU)",
    image: "/images/img-noticias-01.png",
    date: "19/09/2025",
    category: "Imprensa",
  },
  {
    title:
      "CONFIES participa de importante reunião no MEC – Secretaria de Educação Superior (SESU)",
    image: "/images/img-noticias-02.png",
    date: "19/09/2025",
    category: "Imprensa",
  },
  {
    title:
      "CONFIES participa de importante reunião no MEC – Secretaria de Educação Superior (SESU)",
    image: "/images/img-noticias-03.png",
    date: "19/09/2025",
    category: "Imprensa",
  },
  {
    title:
      "CONFIES participa de importante reunião no MEC – Secretaria de Educação Superior (SESU)",
    image: "/images/img-noticias-04.png",
    date: "19/09/2025",
    category: "Imprensa",
  },
  {
    title:
      "CONFIES participa de importante reunião no MEC – Secretaria de Educação Superior (SESU)",
    image: "/images/img-noticias-01.png",
    date: "19/09/2025",
    category: "Imprensa",
  },
]

const SectionNoticias = () => {
  return (
    <section className="section">
      <div className="container">
        {/* header */}
        <div className="mb-12 flex items-center gap-2">
          <img src="/images/headline-icon.png" alt="" />
          <h4 className="text-xl font-semibold">
            Publicações recentes
          </h4>
        </div>

        {/* destaque */}
        <div className="grid gap-6 lg:grid-cols-2">
          <NewsCard {...mock[0]} variant="featured" />
          <NewsCard {...mock[1]} variant="featured" />
        </div>

        {/* outras publicações */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <h5 className="text-lg font-semibold">
              Outras publicações
            </h5>

            <a className="text-primary-500 text-sm font-medium">
              Ver todas as notícias
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NewsCard {...mock[2]} />
            <NewsCard {...mock[3]} />
            <NewsCard {...mock[4]} />
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-12 flex justify-center">
          <Button variant="primary" size="lg">
            Ver mais notícias
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionNoticias