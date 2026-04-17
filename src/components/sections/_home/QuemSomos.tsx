import { Building2, Microscope, Network, Scale } from "lucide-react"
import { Button } from "@/components/ui/Button"

const items = [
  {
    icon: Building2,
    title: "Defesa institucional das fundações afiliadas",
    description:
      "Atuamos junto a órgãos públicos e entidades para defender os interesses das fundações de apoio.",
  },
  {
    icon: Scale,
    title: "Apoio técnico e jurídico",
    description:
      "Oferecemos suporte especializado para fortalecer a atuação das associadas.",
  },
  {
    icon: Network,
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
    <section
      id="quem-somos"
      className="bg-gray-50 py-16 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-4">
          <div className="w-full md:w-6/12 flex flex-col items-start justify-start gap-2">
            <span className="eyebrow">
              Quem somos
            </span>

            <h2>
              Conselho Nacional das Fundações de Apoio às Instituições de Ensino
              Superior e de Pesquisa Científica e Tecnológica
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500 md:text-lg">
              Nosso papel é fortalecer a integração entre a academia, a
              sociedade e o poder público, promovendo a troca de experiências,
              defendendo direitos e aprimorando a atuação das nossas associadas.
            </p>

              <Button
                variant="secondary"
                size="lg"
                className="mt-4 md:mt-8"
              >
                Saiba mais
              </Button>

            <div className="flex flex-col items-start justify-center gap-4 pt-8 divide">
              {items.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4 border-b pb-2 border-gray-200">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-800 text-secondary-300 shadow-sm">
                    <Icon size={22} strokeWidth={2.1} />
                  </div>

                  <div className="pt-1">
                    <h3 className="text-xl font-semibold leading-snug text-slate-700">
                      {title}
                    </h3>
                    <p className="mt-1 max-w-lg text-base leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-155 justify-center">
            <div className="absolute inset-x-12 top-10 h-[78%] rounded-full bg-primary-500/10 blur-3xl" />

            <div className="relative aspect-square w-full max-w-135 rounded-full border border-slate-200 bg-white/60 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-[4.5%] rounded-full bg-[linear-gradient(135deg,#d9b300_0%,#d9b300_18%,#95b84d_48%,#11a36b_100%)]" />

              <img
                src="/images/man.png"
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