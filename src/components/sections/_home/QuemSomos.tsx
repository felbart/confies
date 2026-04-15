import { Building2, Gavel, Mail, Microscope } from "lucide-react"

const items = [
  {
    icon: Building2,
    title: "Defesa institucional das fundações afiliadas",
    description:
      "Atuamos junto a órgãos públicos e entidades para defender os interesses das fundações de apoio.",
  },
  {
    icon: Gavel,
    title: "Apoio técnico e jurídico",
    description:
      "Oferecemos suporte especializado para fortalecer a atuação das associadas.",
  },
  {
    icon: Mail,
    title: "Integração nacional",
    description:
      "Conectamos fundações em todo o país para troca de experiências e construção conjunta.",
  },
  {
    icon: Microscope,
    title: "Fomento à pesquisa e inovação",
    description:
      "Promovemos iniciativas que ampliam o impacto da ciência e da pesquisa.",
  },
]

const QuemSomos = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wide text-primary-600">
              Quem somos
            </span>

            <h2 className="max-w-4xl text-slate-900">
              Conselho Nacional das Fundações de Apoio às Instituições de Ensino
              Superior e de Pesquisa Científica e Tecnológica
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 md:text-lg">
              Nosso papel é fortalecer a integração entre a academia, a
              sociedade e o poder público, promovendo a troca de experiências,
              defendendo direitos e aprimorando a atuação das nossas associadas.
            </p>

            <a
              href="/institucional"
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded-2xl bg-amber-400 px-8 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Saiba mais
            </a>

            <div className="mt-10 space-y-6 md:mt-12">
              {items.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-amber-300 shadow-sm">
                    <Icon size={26} strokeWidth={2.1} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-slate-700 md:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-1 max-w-lg text-base leading-7 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[620px] justify-center">
            <div className="relative aspect-square w-full max-w-[540px] rounded-full border border-slate-200 bg-white/40 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-[4.5%] rounded-full bg-[linear-gradient(135deg,#d9b300_0%,#d9b300_18%,#95b84d_48%,#11a36b_100%)]" />

              <img
                src="/images/homem-tablet.png"
                alt="Representante institucional segurando tablet"
                className="absolute bottom-0 left-1/2 z-10 h-[92%] w-auto -translate-x-1/2 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos