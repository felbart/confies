import { useMemo, useState } from "react"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  UsersRound,
} from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { Button } from "@/components/ui/Button"
import { fundacoes } from "@/data/fundacoes"
import type { Regiao, RegiaoId } from "@/types/fundacoes"

const regioes: Regiao[] = [
  {
    id: "brasil",
    label: "Brasil",
    mapa: "/images/mapa/mapa-brasil.svg",
  },
  {
    id: "norte",
    label: "Norte",
    mapa: "/images/mapa/mapa-norte.svg",
  },
  {
    id: "nordeste",
    label: "Nordeste",
    mapa: "/images/mapa/mapa-nordeste.svg",
  },
  {
    id: "centro-oeste",
    label: "Centro-Oeste",
    mapa: "/images/mapa/mapa-centro-oeste.svg",
  },
  {
    id: "sudeste",
    label: "Sudeste",
    mapa: "/images/mapa/mapa-sudeste.svg",
  },
  {
    id: "sul",
    label: "Sul",
    mapa: "/images/mapa/mapa-sul.svg",
  },
]

const ITEMS_PER_SLIDE = 10

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  )
}

const SectionFundacoes = () => {
  const [regiaoAtiva, setRegiaoAtiva] = useState<RegiaoId>("brasil")

  const regiao = regioes.find((item) => item.id === regiaoAtiva) ?? regioes[0]

  const fundacoesDaRegiao = useMemo(() => {
    if (regiaoAtiva === "brasil") return fundacoes

    return fundacoes.filter((fundacao) => fundacao.regiao === regiaoAtiva)
  }, [regiaoAtiva])

  const slidesFundacoes = useMemo(() => {
    return chunkArray(fundacoesDaRegiao, ITEMS_PER_SLIDE)
  }, [fundacoesDaRegiao])

  const hasMultipleSlides = slidesFundacoes.length > 1

  return (
    <section id="fundacoes" className="section bg-primary-900 text-white">
      <div className="container flex flex-col gap-14">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <span className="eyebrow inline-flex items-center gap-2 text-secondary-300">
            <UsersRound className="size-4 text-primary-500" />
            Nossa atuação
          </span>

          <h3>Fundações associadas em todo o Brasil</h3>

          <p className="text-base text-primary-100 md:text-lg">
            O CONFIES reúne fundações de apoio distribuídas em todas as regiões
            do país, fortalecendo uma rede nacional que impulsiona a ciência, a
            pesquisa e a inovação.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {regioes.map((item) => {
              const isActive = item.id === regiaoAtiva

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRegiaoAtiva(item.id)}
                  className={`
                    group flex items-center justify-center gap-2 rounded-xl border px-3 py-3
                    text-center transition-all
                    ${
                      isActive
                        ? "border-primary-500 bg-primary-700 text-white shadow-xl shadow-primary-950/20"
                        : "border-primary-500/40 bg-primary-800/40 text-primary-100 hover:bg-primary-800"
                    }
                  `}
                >
                  <span
                    className={`
                      flex size-9 shrink-0 items-center justify-center rounded-xl transition
                      ${
                        isActive
                          ? "bg-secondary-300 text-primary-900"
                          : "border border-primary-500 text-primary-400"
                      }
                    `}
                  >
                    <MapPin className="size-4" />
                  </span>

                  <span className="text-sm font-semibold leading-tight md:text-base">
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-5">
              <div className="relative flex h-full min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-primary-800/60 p-8 lg:min-h-[520px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:28px_28px] opacity-40" />

                <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-primary-500/20 blur-3xl" />

                <img
                  src={regiao.mapa}
                  alt={`Mapa - ${regiao.label}`}
                  className="relative z-10 max-h-[430px] w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex h-full flex-col gap-6 rounded-3xl bg-primary-800/40 p-5 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className="eyebrow text-secondary-300">
                      {regiaoAtiva === "brasil"
                        ? "Rede nacional"
                        : `Região ${regiao.label}`}
                    </span>

                    <h4 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                      Fundações associadas
                    </h4>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-primary-100">
                      {fundacoesDaRegiao.length} encontradas
                    </span>

                    {hasMultipleSlides && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Ver fundações anteriores"
                          className="
                            fundacoes-prev flex size-9 items-center justify-center rounded-full
                            bg-secondary-300 text-primary-900 transition hover:bg-secondary-200
                          "
                        >
                          <ChevronLeft className="size-4" />
                        </button>

                        <button
                          type="button"
                          aria-label="Ver próximas fundações"
                          className="
                            fundacoes-next flex size-9 items-center justify-center rounded-full
                            bg-secondary-300 text-primary-900 transition hover:bg-secondary-200
                          "
                        >
                          <ChevronRight className="size-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <Swiper
                  key={regiaoAtiva}
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".fundacoes-prev",
                    nextEl: ".fundacoes-next",
                  }}
                  slidesPerView={1}
                  spaceBetween={16}
                  className="w-full"
                >
                  {slidesFundacoes.map((grupo, slideIndex) => (
                    <SwiperSlide key={`${regiaoAtiva}-${slideIndex}`}>
                      <ul className="grid grid-cols-1 overflow-hidden rounded-2xl border border-primary-500/30 bg-primary-900/30 md:grid-cols-2">
                        {grupo.map((fundacao) => (
                          <li
                            key={fundacao.id}
                            className="
                              flex items-start gap-3 border-b border-primary-500/20 px-4 py-3
                              transition hover:bg-primary-700/70
                              md:odd:border-r
                            "
                          >
                            <span
                              className="
                                mt-0.5 flex h-7 min-w-9 items-center justify-center rounded-full
                                bg-secondary-300 px-2 text-xs font-bold text-primary-900
                              "
                            >
                              {fundacao.uf}
                            </span>

                            <div className="min-w-0 flex-1">
                              <h6 className="line-clamp-1 text-sm font-semibold text-white md:text-base">
                                {fundacao.nome}
                              </h6>

                              <p className="text-xs text-primary-100 md:text-sm">
                                {fundacao.cidade} - {fundacao.uf}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="mt-auto flex flex-col gap-3 border-t border-primary-500/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm text-primary-100">
                    Consulte a relação completa de fundações associadas ao CONFIES.
                  </p>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                  >
                    Ver todas as fundações
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFundacoes