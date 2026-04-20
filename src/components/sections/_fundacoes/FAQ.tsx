import { useState } from "react"
import AnimatedTitle from "@/components/ui/AnimatedTitle"
import AccordionItem from "@/components/ui/AccodionItem"

const faqItems = [
  {
    question: "O que são fundações de apoio?",
    answer:
      "As fundações de apoio são entidades que atuam em parceria com instituições de ensino superior e pesquisa, oferecendo suporte administrativo, financeiro e operacional para viabilizar projetos, programas e iniciativas de interesse público.",
  },
  {
    question: "Qual é o papel das fundações de apoio?",
    answer:
      "Essas fundações ajudam a executar projetos com mais agilidade e segurança, apoiando atividades de pesquisa, ensino, extensão, inovação e desenvolvimento institucional, além de facilitar a gestão de recursos e parcerias.",
  },
  {
    question: "Por que as fundações de apoio são importantes?",
    answer:
      "Porque contribuem para transformar conhecimento em impacto real. Elas permitem que universidades e centros de pesquisa tenham estrutura para desenvolver projetos relevantes, ampliar parcerias e fortalecer a inovação no país.",
  },
  {
    question: "Como funciona o processo de associação?",
    answer:
      "O processo de associação envolve o envio da solicitação, análise institucional da documentação, validação conforme os critérios do CONFIES e, após aprovação, integração da fundação à rede e aos seus benefícios.",
  },
  {
    question: "Quais são os benefícios de fazer parte do CONFIES?",
    answer:
      "Entre os benefícios estão a integração a uma rede nacional, representatividade institucional, acesso a apoio técnico, troca de experiências, participação em eventos e fortalecimento da atuação das fundações associadas.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container flex flex-col items-center justify-center gap-12 md:gap-16">
        <AnimatedTitle
          title="Perguntas Frequentes"
          description="Entenda como funcionam as fundações de apoio..."
          align="center"
        />

        <div className="grid w-full grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
          {/* imagem */}
          <div className="md:col-span-5">
            <img
              src="/images/faq-image.png"
              alt=""
              className="h-auto w-full rounded-4xl object-cover"
            />
          </div>

          {/* accordion */}
          <div className="md:col-span-7">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ