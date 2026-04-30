import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import HeroInterno from "@/components/sections/HeroInterno"
import { getNoticias, getUltimasNoticias } from "@/services/NewsServices"

type Noticia = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [ultimasNoticias, setUltimasNoticias] = useState<Noticia[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function carregarNoticias() {
      try {
        const noticiasData = await getNoticias()
        const ultimasNoticiasData = await getUltimasNoticias(4)

        setNoticias(noticiasData)
        setUltimasNoticias(ultimasNoticiasData)
      } catch (error) {
        console.error("Erro ao carregar notícias:", error)
      } finally {
        setIsLoading(false)
      }
    }

    carregarNoticias()
  }, [])

  return (
    <>
      <HeroInterno
        title="Acompanhe as principais ações e iniciativas do CONFIES"
        eyebrow="Notícias"
        size="md"
        backgroundImage="/images/hero-noticias.png"
      />

      <section id="noticias" className="section bg-white">
        <div className="container flex flex-col lg:flex-row items-start justify-between gap-10 xl:gap-14">
          <div className="main flex flex-col items-start justify-center gap-10 w-full lg:w-[calc(100%-320px)]">
            {isLoading ? (
              <div className="w-full py-20 text-center">
                <p className="text-gray-500">Carregando notícias...</p>
              </div>
            ) : (
              <div className="flex flex-col gap-10 w-full">
                {noticias.map((noticia) => (
                  <article
                    key={noticia.slug}
                    className="flex flex-col items-start gap-5 pb-10 border-b border-gray-200"
                  >
                    <Link
                      to={`/noticias/${noticia.slug}`}
                      className="group w-full flex flex-col gap-5"
                    >
                      <div className="w-full h-[240px] md:h-[420px] rounded-3xl overflow-hidden">
                        <img
                          src={noticia.image}
                          alt={noticia.title}
                          className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                          {noticia.category}
                        </span>

                        <span className="text-sm text-gray-500 inline-flex items-center gap-1.5">
                          <Calendar size={16} className="text-primary-800" />
                          {noticia.date}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-primary-700">
                          {noticia.title}
                        </h3>

                        <p className="text-sm md:text-base text-gray-600 text-pretty max-w-4xl">
                          {noticia.excerpt}
                        </p>
                      </div>
                    </Link>

                    <Link
                      to={`/noticias/${noticia.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-800 transition-colors duration-300 hover:text-primary-700"
                    >
                      Leia mais
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            )}

            <div className="w-full flex items-center justify-center pt-2">
              <nav
                aria-label="Paginação de notícias"
                className="flex items-center gap-2"
              >
                <button className="inline-flex items-center justify-center size-10 rounded-full border border-gray-200 text-gray-500 transition-colors duration-300 hover:border-primary-700 hover:text-primary-700">
                  <ChevronLeft size={18} />
                </button>

                <button className="inline-flex items-center justify-center size-10 rounded-full bg-primary-800 text-white font-medium">
                  1
                </button>

                <button className="inline-flex items-center justify-center size-10 rounded-full border border-gray-200 text-gray-700 font-medium transition-colors duration-300 hover:border-primary-700 hover:text-primary-700">
                  2
                </button>

                <button className="inline-flex items-center justify-center size-10 rounded-full border border-gray-200 text-gray-700 font-medium transition-colors duration-300 hover:border-primary-700 hover:text-primary-700">
                  3
                </button>

                <span className="px-1 text-gray-400">...</span>

                <button className="inline-flex items-center justify-center size-10 rounded-full border border-gray-200 text-gray-500 transition-colors duration-300 hover:border-primary-700 hover:text-primary-700">
                  <ChevronRight size={18} />
                </button>
              </nav>
            </div>
          </div>

          <aside className="hidden lg:flex flex-col items-start justify-start gap-5 w-[260px] xl:w-[280px] shrink-0 sticky top-28">
            <div className="w-full rounded-3xl border border-gray-200 p-5 bg-gray-50">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="eyebrow text-primary-700">
                    Últimas notícias
                  </span>
                  <h5 className="text-base font-semibold text-gray-900">
                    Outras atualizações
                  </h5>
                </div>

                <div className="flex flex-col gap-4">
                  {ultimasNoticias.map((noticia) => (
                    <Link
                      key={noticia.slug}
                      to={`/noticias/${noticia.slug}`}
                      className="flex flex-col gap-3 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 group"
                    >
                      <img
                        src={noticia.image}
                        alt={noticia.title}
                        className="w-full h-32 rounded-2xl object-cover"
                      />

                      <div className="flex flex-col items-start gap-2">
                        <span className="text-xs text-gray-500 inline-flex items-center gap-1">
                          <Calendar size={14} className="text-primary-800" />
                          {noticia.date}
                        </span>

                        <p className="text-sm font-medium leading-snug text-gray-800 transition-colors duration-300 group-hover:text-primary-700 line-clamp-3">
                          {noticia.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Noticias