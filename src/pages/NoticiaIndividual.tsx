import CTA from "@/components/sections/CTA"
import HeroInterno from "@/components/sections/HeroInterno"
import { noticias } from "@/data/noticias"
import { Calendar, ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router"

const NoticiaIndividual = () => {
  const { slug } = useParams()

  const noticia = noticias.find((item) => item.slug === slug)

  if (!noticia) {
    return (
      <>
        <HeroInterno eyebrow="Notícia" title="Conteúdo não encontrado" size="sm" />

        <section className="section bg-white">
          <div className="container flex flex-col items-start gap-6">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-800 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar para notícias
            </Link>

            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Esta notícia não foi encontrada
              </h2>
              <p className="text-base text-gray-600">
                O conteúdo que você tentou acessar não existe ou foi removido.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  const relatedNews = noticias
    .filter((item) => item.slug !== noticia.slug)
    .slice(0, 3)

  return (
    <>
      <HeroInterno
        eyebrow="Notícia"
        title="Acompanhe as principais ações e iniciativas do CONFIES"
        size="sm"
      />

      <section className="section bg-white">
        <div className="container flex flex-col lg:flex-row items-start justify-between gap-10 xl:gap-14">
          <main className="w-full lg:flex-1 max-w-none">
            <article className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <Link
                  to="/noticias"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-800 hover:text-primary-700 transition-colors"
                >
                  <ArrowLeft size={16} />
                  Voltar para notícias
                </Link>

                <h1 className="max-w-4xl text-3xl md:text-4xl font-semibold leading-tight text-gray-950">
                  {noticia.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                    {noticia.category}
                  </span>

                  <span className="text-sm text-gray-500 inline-flex items-center gap-1.5">
                    <Calendar size={16} className="text-primary-800" />
                    {noticia.date}
                  </span>
                </div>
              </div>

              <div className="w-full rounded-3xl overflow-hidden">
                <img
                  src={noticia.image}
                  alt={noticia.title}
                  className="w-full h-[260px] md:h-[420px] lg:h-[520px] object-cover"
                />
              </div>

              <div className="max-w-4xl flex flex-col gap-5 text-gray-700">
                <p className="text-base md:text-lg leading-8 text-pretty">
                  {noticia.content || noticia.excerpt}
                </p>

                <p className="text-base md:text-lg leading-8 text-pretty">
                  O CONFIES segue atuando de forma articulada em agendas
                  estratégicas que fortalecem as fundações de apoio e ampliam
                  sua representatividade junto às instituições de ensino,
                  pesquisa, inovação e desenvolvimento científico no Brasil.
                </p>

                <p className="text-base md:text-lg leading-8 text-pretty">
                  A participação em encontros institucionais, fóruns e espaços
                  de diálogo contribui para consolidar pautas relevantes ao
                  setor, além de reforçar o compromisso da entidade com uma
                  atuação técnica, colaborativa e nacionalmente integrada.
                </p>
              </div>

              <div className="max-w-4xl flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  Institucional
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  {noticia.category}
                </span>
              </div>
            </article>
          </main>

          <aside className="hidden lg:flex w-[260px] xl:w-[280px] shrink-0 sticky top-28">
            <div className="w-full flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-secondary-400" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Veja também
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {relatedNews.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/noticias/${item.slug}`}
                    className="grid grid-cols-[110px_minmax(0,1fr)] gap-3 pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 group"
                  >
                    <div className="w-full h-24 rounded-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-gray-500 inline-flex items-center gap-1">
                        <Calendar size={14} className="text-primary-800" />
                        {item.date}
                      </span>

                      <p className="text-sm leading-snug font-medium text-gray-800 transition-colors duration-300 group-hover:text-primary-700 line-clamp-4">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default NoticiaIndividual