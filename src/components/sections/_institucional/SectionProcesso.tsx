import { fadeUpContainer, fadeUpItem } from "@/lib/animation"
import { motion } from "motion/react"

const steps = [
  {
    step: "1",
    title: "Envio da solicitação",
    text: "Preencha o formulário ou entre em contato com o CONFIES.",
  },
  {
    step: "2",
    title: "Análise institucional",
    text: "A documentação será avaliada conforme os critérios da entidade.",
  },
  {
    step: "3",
    title: "Aprovação",
    text: "Após validação, a fundação será integrada à rede.",
  },
  {
    step: "4",
    title: "Integração",
    text: "Acesso aos benefícios e participação nas iniciativas do CONFIES.",
  },
]

const SectionProcesso = () => {
  return (
    <section className="section bg-gray-50">
      <motion.div
        className="container flex flex-col items-center justify-center gap-12"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="topo text-center w-full md:w-8/12" variants={fadeUpItem}>
          <span className="eyebrow">Sobre o Processo</span>
          <h3>Como funciona o processo de afiliação?</h3>
          <p className="text-gray-500 text-base">
            Um processo simples e estruturado para integrar sua fundação à rede do CONFIES.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeUpItem}
              className="group bg-white flex flex-col items-start gap-4 px-6 py-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-secondary-200 text-lg font-semibold text-gray-800">
                {item.step}
              </span>

              <div className="mt-4 flex flex-col gap-2">
                <h5 className="text-xl text-gray-800">{item.title}</h5>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SectionProcesso