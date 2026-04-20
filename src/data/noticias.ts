export type Noticia = {
  slug: string
  title: string
  excerpt: string
  content?: string
  category: string
  date: string
  image: string
  featured?: boolean
}

export const noticias: Noticia[] = [
  {
    slug: "confies-participa-de-reuniao-no-mec",
    title:
      "CONFIES participa de importante reunião no MEC – Secretaria de Educação Superior (SESU)",
    excerpt:
      "O presidente do CONFIES, Prof. Antonio Fernando Queiroz, acompanhado do assessor institucional Bruno Portella, esteve em agenda oficial na Secretaria de Educação Superior do MEC para discutir temas estratégicos ligados à atuação das fundações de apoio e ao fortalecimento da educação superior no país.",
    content:
      "O presidente do CONFIES, Prof. Antonio Fernando Queiroz, acompanhado do assessor institucional Bruno Portella, esteve em agenda oficial na Secretaria de Educação Superior do MEC para discutir temas estratégicos ligados à atuação das fundações de apoio e ao fortalecimento da educação superior no país.",
    category: "Imprensa",
    date: "19/04/2026",
    image: "/images/noticias-04.png",
    featured: true,
  },
  {
    slug: "encontro-regional-sul-confies",
    title:
      "Encontro regional Sul do CONFIES reúne representantes de fundações de apoio em Florianópolis",
    excerpt:
      "O evento promoveu a troca de experiências entre instituições associadas, com debates sobre gestão, inovação e fortalecimento institucional das fundações de apoio.",
    content:
      "O encontro regional Sul reuniu representantes de diferentes fundações de apoio em Florianópolis, promovendo debates sobre boas práticas, integração institucional e caminhos para ampliar a atuação conjunta no cenário nacional.",
    category: "Eventos",
    date: "16/04/2026",
    image: "/images/noticias-04.png",
  },
  {
    slug: "confies-fortalece-articulacao-nacional",
    title:
      "CONFIES fortalece articulação nacional em defesa das fundações de apoio",
    excerpt:
      "A atuação institucional do conselho segue ampliando o diálogo com órgãos públicos, universidades e entidades parceiras em todo o Brasil.",
    content:
      "O CONFIES vem intensificando sua presença institucional em agendas estratégicas, reforçando seu papel na defesa das fundações de apoio e na construção de pontes entre pesquisa, inovação e ensino superior.",
    category: "Institucional",
    date: "12/04/2026",
    image: "/images/noticias-04.png",
  },
  {
    slug: "webinar-discute-inovacao-e-governanca",
    title:
      "Webinar promovido pelo CONFIES debate inovação, governança e sustentabilidade nas fundações",
    excerpt:
      "Especialistas e dirigentes discutiram desafios contemporâneos e oportunidades para ampliar a eficiência e a relevância das fundações no ecossistema científico.",
    content:
      "O webinar reuniu especialistas e dirigentes para debater temas centrais como inovação, governança, sustentabilidade e os desafios enfrentados pelas fundações de apoio em um cenário de transformação institucional.",
    category: "Webinar",
    date: "08/04/2026",
    image: "/images/noticias-04.png",
  },
  {
    slug: "premio-boas-praticas-ganha-destaque",
    title:
      "Prêmio Boas Práticas ganha destaque entre iniciativas apoiadas pelo CONFIES",
    excerpt:
      "A iniciativa reconhece projetos de impacto desenvolvidos pelas fundações e reforça a valorização de experiências transformadoras no setor.",
    content:
      "O Prêmio Boas Práticas segue como uma das iniciativas de maior destaque do conselho, valorizando ações relevantes realizadas pelas fundações associadas e promovendo visibilidade para projetos de impacto.",
    category: "Prêmio",
    date: "02/04/2026",
    image: "/images/noticias-04.png",
  },
]