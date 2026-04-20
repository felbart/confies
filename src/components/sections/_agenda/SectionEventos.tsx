import AnimatedTitle from "@/components/ui/AnimatedTitle"
import { motion } from "motion/react"
import {
  fadeUpContainer,
  fadeUpItem,
} from "@/lib/animation"

type EventItem = {
  id: number
  title: string
  date: string
  location: string
  image: string
  alt: string
  href?: string
}

const nationalEvents: EventItem[] = [
  {
    id: 35,
    title: "35º Encontro Nacional",
    date: "29 de novembro a 01 de dezembro de 2017",
    location: "Maceió - AL",
    image: "/images/eventos/35-confies.jpg",
    alt: "Logo do 35º Encontro Nacional do CONFIES",
  },
  {
    id: 34,
    title: "34º Encontro Nacional",
    date: "22 a 24 de novembro de 2016",
    location: "Belo Horizonte - MG",
    image: "/images/eventos/34-confies.jpg",
    alt: "Logo do 34º Encontro Nacional do CONFIES",
  },
  {
    id: 33,
    title: "33º Encontro Nacional",
    date: "10 a 12 de novembro de 2015",
    location: "Brasília - DF",
    image: "/images/eventos/33-confies.jpg",
    alt: "Logo do 33º Encontro Nacional do CONFIES",
  },
  {
    id: 32,
    title: "32º Encontro Nacional",
    date: "11 a 14 de novembro de 2014",
    location: "Florianópolis - SC",
    image: "/images/eventos/32-confies.jpg",
    alt: "Logo do 32º Encontro Nacional do CONFIES",
  },
  {
    id: 31,
    title: "31º Encontro Nacional",
    date: "11 a 14 de novembro de 2013",
    location: "Porto de Galinhas - PE",
    image: "/images/eventos/31-confies.jpg",
    alt: "Logo do 31º Encontro Nacional do CONFIES",
  },
  {
    id: 30,
    title: "30º Encontro Nacional",
    date: "26 a 29 de novembro de 2012",
    location: "Rio de Janeiro - RJ",
    image: "/images/eventos/30-confies.jpg",
    alt: "Logo do 30º Encontro Nacional do CONFIES",
  },
]

const regionalEvents: EventItem[] = [
  {
    id: 101,
    title: "IV ENNFAIES",
    date: "07 e 08 de junho de 2018",
    location: "João Pessoa - PB",
    image: "/images/eventos/iv-ennfaies.jpg",
    alt: "Identidade visual do IV ENNFAIES",
  },
  {
    id: 102,
    title: "XI FAIPES",
    date: "21 e 22 de maio de 2018",
    location: "Juiz de Fora - MG",
    image: "/images/eventos/faipes.jpg",
    alt: "Identidade visual do XI FAIPES",
  },
  {
    id: 103,
    title: "ENFACO",
    date: "2017",
    location: "Goiânia - GO",
    image: "/images/eventos/enfaco.jpg",
    alt: "Identidade visual do ENFACO",
  },
  {
    id: 104,
    title: "ENFASUD",
    date: "2017",
    location: "Campinas - SP",
    image: "/images/eventos/enfasud.jpg",
    alt: "Identidade visual do ENFASUD",
  },
  {
    id: 105,
    title: "ENNFAIES",
    date: "2017",
    location: "Fortaleza - CE",
    image: "/images/eventos/ennfaies.jpg",
    alt: "Identidade visual do ENNFAIES",
  },
]

function SectionLabel({ children, variant = "gold" }: { children: string; variant?: "gold" | "gray" }) {
  return (
    <div
      className={[
        "w-full rounded-full px-4 py-2 text-center text-xs md:text-sm font-semibold tracking-[0.35em] uppercase",
        variant === "gold"
          ? "bg-secondary-200 text-primary-700"
          : "bg-gray-200 text-gray-700",
      ].join(" ")}
    >
      {children}
    </div>
  )
}

function EventCard({ event }: { event: EventItem }) {
  const content = (
    <article className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-4 md:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gray-50 p-4">
        <img
          src={event.image}
          alt={event.alt}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {event.title}
        </h3>

        <p className="text-sm leading-6 text-gray-600">
          {event.date}
        </p>

        <p className="text-sm leading-6 text-gray-700">
          {event.location}
        </p>
      </div>
    </article>
  )

  if (event.href) {
    return (
      <a href={event.href} className="block h-full">
        {content}
      </a>
    )
  }

  return content
}

const SectionEventos = () => {
  return (
    <section id="eventos" className="section bg-gray-100">
      <div className="container flex flex-col items-center justify-center gap-10 md:gap-12">
        <AnimatedTitle
          eyebrow="Outros eventos"
          title="Lista de eventos"
          align="center"
        />

        <div className="w-full space-y-10 md:space-y-14">
          <div className="space-y-6">
            <SectionLabel>Encontros Nacionais</SectionLabel>

            <motion.div
              variants={fadeUpContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {nationalEvents.map((event) => (
                <motion.div key={event.id} variants={fadeUpItem}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-6">
            <SectionLabel variant="gray">Encontros Regionais</SectionLabel>

            <motion.div
              variants={fadeUpContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {regionalEvents.map((event) => (
                <motion.div key={event.id} variants={fadeUpItem}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionEventos