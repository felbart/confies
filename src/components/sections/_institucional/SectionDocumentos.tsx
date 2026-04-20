import { ArrowRight, Book } from "lucide-react"
import { Button } from "@/components/ui/Button"

type DocumentoDestaque = {
  eyebrow: string
  title: string
  text: string
  buttonLabel: string
  href: string
  cardTitle: string
}

type DocumentoItem = {
  title: string
  text: string
  buttonLabel: string
  href: string
}

const documentoDestaque: DocumentoDestaque = {
  eyebrow: "Nosso Estatuto",
  title: "Estatuto Social do CONFIES",
  text: "O Estatuto Social do CONFIES define as normas de funcionamento, competências e a estrutura organizacional que orienta a atuação institucional da entidade. É o principal documento de referência para governança, transparência e representação nacional.",
  buttonLabel: "Baixe o Estatuto",
  href: "#",
  cardTitle: "Estatuto Social 2024",
}

const repositorioDocs: DocumentoItem[] = [
  {
    title: "Requisitos para Associação",
    text: "Consulte os critérios, condições e orientações iniciais para que sua fundação possa iniciar o processo de afiliação ao CONFIES com mais clareza e segurança.",
    buttonLabel: "Ver documentação",
    href: "#",
  },
  {
    title: "Relatórios Institucionais",
    text: "Acesse relatórios e materiais que apresentam informações sobre atividades, resultados e iniciativas desenvolvidas pela entidade.",
    buttonLabel: "Acessar relatórios",
    href: "#",
  },
  {
    title: "Publicações e Documentos",
    text: "Reúna em um só lugar documentos oficiais, materiais institucionais e conteúdos de apoio relacionados à atuação do CONFIES.",
    buttonLabel: "Explorar acervo",
    href: "#",
  },
]

function DocumentoCardMini({
  title,
  text,
  buttonLabel,
  href,
}: DocumentoItem) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-gray-200 bg-white p-6">
      <div className="mb-8 inline-flex size-12 items-center justify-center rounded-xl bg-secondary-400">
        <Book size={24} strokeWidth={2.2} className="text-primary-800" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h5 className="text-gray-900">{title}</h5>
        <p className="text-base leading-relaxed text-gray-500">
          {text}
        </p>
      </div>

      <div className="mt-6">
        <a href={href} className="block">
          <Button variant="secondary" size="md" className="w-full">
            {buttonLabel}
          </Button>
        </a>
      </div>
    </article>
  )
}

const SectionDocumentos = () => {
  return (
    <section id="documentos" className="section bg-gray-50">
      <div className="container flex flex-col items-start gap-10 md:gap-12">
        <h3>Documentos importantes</h3>

        <div className="flex w-full flex-col gap-10 md:gap-12">
          <article className="overflow-hidden rounded-4xl border border-gray-200 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="flex flex-col gap-5 p-6 md:col-span-9 md:p-8 lg:p-10">
                <div className="flex flex-col gap-3">
                  <span className="eyebrow text-primary-700">
                    {documentoDestaque.eyebrow}
                  </span>
                  <h4>{documentoDestaque.title}</h4>
                  <p className="max-w-3xl text-base leading-relaxed text-gray-500">
                    {documentoDestaque.text}
                  </p>
                </div>

                <div className="pt-2">
                  <a href={documentoDestaque.href} className="inline-flex">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="min-w-65"
                    >
                      {documentoDestaque.buttonLabel}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex min-h-65 flex-col items-start justify-end bg-primary-500 p-6 md:col-span-3 md:min-h-full md:p-8">
                <Book size={40} strokeWidth={2.2} className="text-primary-900" />
                <h6 className="mt-6 max-w-[12ch] text-gray-900">
                  {documentoDestaque.cardTitle}
                </h6>
              </div>
            </div>
          </article>

          <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-1">
              <h4>Repositório Institucional</h4>
              <p className="text-base text-gray-500">
                Confira outros documentos do Confies
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-base font-medium text-primary-700 transition-all duration-300 hover:gap-3"
            >
              Ver todos os documentos
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {repositorioDocs.map((doc) => (
              <DocumentoCardMini
                key={doc.title}
                title={doc.title}
                text={doc.text}
                buttonLabel={doc.buttonLabel}
                href={doc.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionDocumentos