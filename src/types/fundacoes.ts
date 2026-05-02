export type RegiaoId =
  | "brasil"
  | "norte"
  | "nordeste"
  | "centro-oeste"
  | "sudeste"
  | "sul"

export type Fundacao = {
  id: number
  nome: string
  sigla?: string
  cidade: string
  uf: string
  regiao: Exclude<RegiaoId, "brasil">
}

export type Regiao = {
  id: RegiaoId
  label: string
  mapa: string
}