export type RegionKey = "brasil" | "norte" | "nordeste" | "centro-oeste" | "sudeste" | "sul"

export type Foundation = {
  id: number
  name: string
  city: string
  state: string
  uf: string
  region: Exclude<RegionKey, "brasil">
}

export const foundations: Foundation[] = [
  {
    id: 1,
    name: "Fundação de Apoio à Pesquisa de São Paulo",
    city: "São Paulo",
    state: "SP",
    uf: "SP",
    region: "sudeste",
  },
  {
    id: 2,
    name: "Fundação de Apoio ao Ensino e à Pesquisa de Minas Gerais",
    city: "Belo Horizonte",
    state: "MG",
    uf: "MG",
    region: "sudeste",
  },
  {
    id: 3,
    name: "Fundação de Apoio à Universidade Federal da Bahia",
    city: "Salvador",
    state: "BA",
    uf: "BA",
    region: "nordeste",
  },
  {
    id: 4,
    name: "Fundação Amazônica de Apoio à Pesquisa",
    city: "Manaus",
    state: "AM",
    uf: "AM",
    region: "norte",
  },
  {
    id: 5,
    name: "Fundação de Apoio ao Desenvolvimento Científico de Goiás",
    city: "Goiânia",
    state: "GO",
    uf: "GO",
    region: "centro-oeste",
  },
  {
    id: 6,
    name: "Fundação de Apoio à Inovação do Paraná",
    city: "Curitiba",
    state: "PR",
    uf: "PR",
    region: "sul",
  },
]

export const regionLabels: Record<RegionKey, string> = {
  brasil: "Brasil",
  norte: "Norte",
  nordeste: "Nordeste",
  "centro-oeste": "Centro-Oeste",
  sudeste: "Sudeste",
  sul: "Sul",
}

export const regionStates: Record<Exclude<RegionKey, "brasil">, string[]> = {
  norte: ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],
  nordeste: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
  "centro-oeste": ["DF", "GO", "MT", "MS"],
  sudeste: ["ES", "MG", "RJ", "SP"],
  sul: ["PR", "RS", "SC"],
}