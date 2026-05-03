import { useMemo, useState } from "react"
import {
  Building2,
  LayoutGrid,
  List,
  MapPin,
  Search,
  UsersRound,
} from "lucide-react"

import { fundacoes } from "@/data/fundacoes"
import type { RegiaoId } from "@/types/fundacoes"

type ViewMode = "lista" | "grid"

type RegiaoOption = {
  id: RegiaoId
  label: string
}

const regioes: RegiaoOption[] = [
  { id: "brasil", label: "Brasil" },
  { id: "norte", label: "Norte" },
  { id: "nordeste", label: "Nordeste" },
  { id: "centro-oeste", label: "Centro-Oeste" },
  { id: "sudeste", label: "Sudeste" },
  { id: "sul", label: "Sul" },
]

const labelRegiao: Record<Exclude<RegiaoId, "brasil">, string> = {
  norte: "Norte",
  nordeste: "Nordeste",
  "centro-oeste": "Centro-Oeste",
  sudeste: "Sudeste",
  sul: "Sul",
}

function normalizarTexto(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

const SectionTodasFundacoes = () => {
  const [regiaoAtiva, setRegiaoAtiva] = useState<RegiaoId>("brasil")
  const [viewMode, setViewMode] = useState<ViewMode>("lista")
  const [busca, setBusca] = useState("")

  const fundacoesFiltradas = useMemo(() => {
    const termo = normalizarTexto(busca.trim())

    return fundacoes.filter((fundacao) => {
      const pertenceRegiao =
        regiaoAtiva === "brasil" || fundacao.regiao === regiaoAtiva

      const textoPesquisavel = normalizarTexto(
        `${fundacao.nome} ${fundacao.sigla ?? ""} ${fundacao.cidade} ${
          fundacao.uf
        } ${labelRegiao[fundacao.regiao]}`
      )

      const correspondeBusca = termo === "" || textoPesquisavel.includes(termo)

      return pertenceRegiao && correspondeBusca
    })
  }, [regiaoAtiva, busca])

  const regiaoAtualLabel =
    regioes.find((regiao) => regiao.id === regiaoAtiva)?.label ?? "Brasil"

  return (
    <section id="fundacoes-associadas" className="section bg-gray-100 text-gray-900">
      <div className="container flex flex-col gap-10">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <span className="eyebrow inline-flex items-center gap-2 text-primary-700">
            <UsersRound className="size-4 text-primary-500" />
            Fundações associadas
          </span>

          <h3 className="text-gray-950">
            Conheça as fundações que integram a rede CONFIES
          </h3>

          <p className="text-base text-gray-600 md:text-lg">
            Consulte as fundações associadas por região, cidade e estado. A lista
            reúne as instituições que fortalecem a ciência, a pesquisa e a inovação
            em todo o Brasil.
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {regioes.map((regiao) => {
              const isActive = regiaoAtiva === regiao.id

              return (
                <button
                  key={regiao.id}
                  type="button"
                  onClick={() => setRegiaoAtiva(regiao.id)}
                  className={`
                    flex items-center justify-center gap-2 rounded-xl border px-3 py-3
                    text-sm font-semibold transition md:text-base
                    ${
                      isActive
                        ? "border-primary-600 bg-primary-700 text-white shadow-sm"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-primary-300 hover:bg-white hover:text-primary-800"
                    }
                  `}
                >
                  <MapPin
                    className={`
                      size-4
                      ${isActive ? "text-secondary-300" : "text-primary-600"}
                    `}
                  />
                  {regiao.label}
                </button>
              )
            })}
          </div>

          <div className="flex flex-col gap-4 border-t border-gray-200 pt-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

              <input
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Buscar por fundação, cidade ou UF"
                className="
                  h-12 w-full rounded-xl border border-gray-200
                  bg-gray-50 pl-11 pr-4 text-sm text-gray-900 outline-none
                  placeholder:text-gray-400
                  focus:border-primary-500 focus:bg-white
                "
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
              <span className="text-sm text-gray-600">
                {fundacoesFiltradas.length} fundações encontradas
              </span>

              <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("lista")}
                  className={`
                    inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition
                    ${
                      viewMode === "lista"
                        ? "bg-primary-700 text-white"
                        : "text-gray-600 hover:bg-white hover:text-primary-800"
                    }
                  `}
                >
                  <List className="size-4" />
                  Lista
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`
                    inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition
                    ${
                      viewMode === "grid"
                        ? "bg-primary-700 text-white"
                        : "text-gray-600 hover:bg-white hover:text-primary-800"
                    }
                  `}
                >
                  <LayoutGrid className="size-4" />
                  Grid
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow text-primary-700">
              {regiaoAtiva === "brasil" ? "Todas as regiões" : `Região ${regiaoAtualLabel}`}
            </span>

            <h4 className="mt-1 text-2xl font-semibold text-gray-950">
              {regiaoAtiva === "brasil"
                ? "Todas as fundações associadas"
                : `Fundações da região ${regiaoAtualLabel}`}
            </h4>
          </div>

          <span className="hidden text-sm text-gray-500 md:block">
            Visualização em {viewMode === "lista" ? "lista" : "grid"}
          </span>
        </div>

        {fundacoesFiltradas.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">
              Nenhuma fundação encontrada com os filtros selecionados.
            </p>
          </div>
        ) : viewMode === "lista" ? (
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div
              className="
                hidden grid-cols-[1.4fr_0.55fr_0.7fr_0.45fr] border-b border-gray-200
                bg-gray-50 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em]
                text-gray-500 md:grid
              "
            >
              <span>Fundação</span>
              <span>Região</span>
              <span>Localização</span>
              <span>UF</span>
            </div>

            <ul className="divide-y divide-gray-100">
              {fundacoesFiltradas.map((fundacao) => (
                <li
                  key={fundacao.id}
                  className="
                    grid grid-cols-1 gap-2 px-4 py-3 transition
                    hover:bg-white md:grid-cols-[1.4fr_0.55fr_0.7fr_0.45fr]
                    md:items-center md:px-5 md:py-2.5
                  "
                >
                  <div className="min-w-0">
                    <h5 className="line-clamp-1 text-sm font-semibold text-gray-900 md:text-[0.95rem]">
                      {fundacao.nome}
                    </h5>

                    {fundacao.sigla && (
                      <p className="mt-0.5 text-xs text-gray-500">
                        {fundacao.sigla}
                      </p>
                    )}
                  </div>

                  <span className="w-fit rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-800">
                    {labelRegiao[fundacao.regiao]}
                  </span>

                  <p className="text-sm text-gray-600">
                    {fundacao.cidade} - {fundacao.uf}
                  </p>

                  <span className="hidden text-sm font-semibold text-gray-700 md:block">
                    {fundacao.uf}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fundacoesFiltradas.map((fundacao) => (
              <article
                key={fundacao.id}
                className="
                  flex min-h-32 flex-col justify-between rounded-2xl
                  border border-gray-200 bg-gray-50 p-5
                  transition hover:-translate-y-1 hover:bg-white hover:shadow-md
                "
              >
                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex size-10 shrink-0 items-center justify-center rounded-full
                      bg-primary-700 text-sm font-bold text-white
                    "
                  >
                    {fundacao.uf}
                  </span>

                  <div className="min-w-0">
                    <h5 className="text-base font-semibold leading-snug text-gray-950">
                      {fundacao.nome}
                    </h5>

                    {fundacao.sigla && (
                      <p className="mt-1 text-sm text-gray-500">
                        {fundacao.sigla}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="size-4 text-primary-700" />
                    {fundacao.cidade} - {fundacao.uf}
                  </span>

                  <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-800">
                    {labelRegiao[fundacao.regiao]}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionTodasFundacoes