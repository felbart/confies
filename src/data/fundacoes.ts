import type { Fundacao } from "@/types/fundacoes"

const nomesBase = [
  "Fundação de Apoio à Pesquisa e Inovação",
  "Fundação de Desenvolvimento Científico e Tecnológico",
  "Fundação de Apoio Universitário",
  "Fundação de Pesquisa, Ensino e Extensão",
  "Fundação de Apoio ao Desenvolvimento Institucional",
  "Fundação de Ciência, Tecnologia e Inovação",
  "Fundação de Apoio Acadêmico e Científico",
  "Fundação de Desenvolvimento da Pesquisa",
  "Fundação de Apoio à Educação e Pesquisa",
  "Fundação de Apoio à Universidade",
]

const localidades = [
  // Norte
  { cidade: "Belém", uf: "PA", regiao: "norte" },
  { cidade: "Manaus", uf: "AM", regiao: "norte" },
  { cidade: "Palmas", uf: "TO", regiao: "norte" },
  { cidade: "Boa Vista", uf: "RR", regiao: "norte" },
  { cidade: "Macapá", uf: "AP", regiao: "norte" },
  { cidade: "Porto Velho", uf: "RO", regiao: "norte" },
  { cidade: "Rio Branco", uf: "AC", regiao: "norte" },

  // Nordeste
  { cidade: "Salvador", uf: "BA", regiao: "nordeste" },
  { cidade: "Recife", uf: "PE", regiao: "nordeste" },
  { cidade: "Fortaleza", uf: "CE", regiao: "nordeste" },
  { cidade: "Natal", uf: "RN", regiao: "nordeste" },
  { cidade: "João Pessoa", uf: "PB", regiao: "nordeste" },
  { cidade: "Maceió", uf: "AL", regiao: "nordeste" },
  { cidade: "Aracaju", uf: "SE", regiao: "nordeste" },
  { cidade: "Teresina", uf: "PI", regiao: "nordeste" },
  { cidade: "São Luís", uf: "MA", regiao: "nordeste" },

  // Centro-Oeste
  { cidade: "Brasília", uf: "DF", regiao: "centro-oeste" },
  { cidade: "Goiânia", uf: "GO", regiao: "centro-oeste" },
  { cidade: "Cuiabá", uf: "MT", regiao: "centro-oeste" },
  { cidade: "Campo Grande", uf: "MS", regiao: "centro-oeste" },

  // Sudeste
  { cidade: "São Paulo", uf: "SP", regiao: "sudeste" },
  { cidade: "Rio de Janeiro", uf: "RJ", regiao: "sudeste" },
  { cidade: "Belo Horizonte", uf: "MG", regiao: "sudeste" },
  { cidade: "Vitória", uf: "ES", regiao: "sudeste" },
  { cidade: "Campinas", uf: "SP", regiao: "sudeste" },
  { cidade: "Niterói", uf: "RJ", regiao: "sudeste" },
  { cidade: "Juiz de Fora", uf: "MG", regiao: "sudeste" },
  { cidade: "São Carlos", uf: "SP", regiao: "sudeste" },
  { cidade: "Uberlândia", uf: "MG", regiao: "sudeste" },
  { cidade: "Ribeirão Preto", uf: "SP", regiao: "sudeste" },

  // Sul
  { cidade: "Curitiba", uf: "PR", regiao: "sul" },
  { cidade: "Porto Alegre", uf: "RS", regiao: "sul" },
  { cidade: "Florianópolis", uf: "SC", regiao: "sul" },
  { cidade: "Londrina", uf: "PR", regiao: "sul" },
  { cidade: "Santa Maria", uf: "RS", regiao: "sul" },
  { cidade: "Joinville", uf: "SC", regiao: "sul" },
] as const

export const fundacoes: Fundacao[] = Array.from({ length: 112 }, (_, index) => {
  const local = localidades[index % localidades.length]
  const nomeBase = nomesBase[index % nomesBase.length]
  const numero = String(index + 1).padStart(3, "0")

  return {
    id: index + 1,
    nome: `${nomeBase} ${numero}`,
    sigla: `FA${numero}`,
    cidade: local.cidade,
    uf: local.uf,
    regiao: local.regiao,
  }
})