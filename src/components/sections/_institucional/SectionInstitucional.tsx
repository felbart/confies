import { motion } from "motion/react"
import { Building2, Microscope, Network, Scale } from "lucide-react"
import {
  fadeLeft,
  fadeUpContainer,
  fadeUpItem,
  imageReveal,
} from "@/lib/animation"
import AnimatedTitle from "@/components/ui/AnimatedTitle"

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

const SectionInstitucional = () => {
  return (
    <section id="institucional" className="section bg-gray-50 overflow-hidden">
      <div className="container flex flex-col items-start justify-center gap-20 md:gap-24">
        <div className="topo flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="left flex flex-col items-start justify-between gap-4 w-full md:w-5/12"
          >
            <span className="eyebrow">O que é o CONFIES?</span>

            <h3 className="leading-tight">
              Conselho Nacional das Fundações de Apoio às Instituições de Ensino
              Superior e de Pesquisa Científica e Tecnológica
            </h3>

            <p className="text-lg text-gray-500 mt-2">
              Nosso papel é fortalecer a integração entre a academia, a
              sociedade e o poder público, promovendo a troca de experiências,
              defendendo direitos e aprimorando a atuação das nossas associadas.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="right flex flex-col items-start justify-center w-full md:w-6/12"
          >
            {items.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUpItem}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 border-b border-gray-200 py-4 w-full"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="bottom flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:w-5/12 flex flex-col items-start gap-3"
          >
            
            <AnimatedTitle title="Quem pode se associar?" />

            <motion.p
              variants={fadeUpItem}
              className="text-lg text-gray-500"
            >
              Podem se associar ao CONFIES fundações de apoio vinculadas a
              instituições de ensino superior e de pesquisa científica e
              tecnológica, que atuem em conformidade com a legislação vigente.
            </motion.p>
          </motion.div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-6/12 overflow-hidden rounded-4xl"
          >
            <img
              src="/images/associacao-2.png"
              alt="Associação"
              className="h-84 w-full md:h-125 object-cover object-center rounded-4xl shadow-2xl shadow-primary-950/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SectionInstitucional