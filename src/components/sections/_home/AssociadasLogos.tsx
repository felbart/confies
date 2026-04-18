import LogoMarquee from "@/components/ui/LogoMarquee"

const logosRow1 = [
  { src: "/images/logos/logo-01.png", alt: "Fundação 01" },
  { src: "/images/logos/logo-02.png", alt: "Fundação 02" },
  { src: "/images/logos/logo-03.png", alt: "Fundação 03" },
  { src: "/images/logos/logo-04.png", alt: "Fundação 04" },
  { src: "/images/logos/logo-05.png", alt: "Fundação 05" },
  { src: "/images/logos/logo-06.png", alt: "Fundação 06" },
]

const logosRow2 = [
  { src: "/images/logos/logo-07.png", alt: "Fundação 07" },
  { src: "/images/logos/logo-08.png", alt: "Fundação 08" },
  { src: "/images/logos/logo-09.png", alt: "Fundação 09" },
  { src: "/images/logos/logo-10.png", alt: "Fundação 10" },
  { src: "/images/logos/logo-11.png", alt: "Fundação 11" },
  { src: "/images/logos/logo-12.png", alt: "Fundação 12" },
]

const AssociadasLogos = () => {
  return (
    <section className="section relative overflow-hidden bg-neutral-100">
      <div className="container flex flex-col items-center justify-center gap-10 md:gap-14">
        <div className="flex max-w-3xl flex-col items-center justify-center gap-3 text-center">
          <span className="eyebrow">Fortalecendo juntos</span>

          <h3>A confiança de Fundações em todo o Brasil</h3>

          <p className="text-pretty text-lg text-gray-500">
            Cada fundação associada fortalece a rede, gera impacto coletivo e amplia
            a voz da ciência e da pesquisa no país.
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-neutral-100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-neutral-100 to-transparent" />

          <LogoMarquee logos={logosRow1} direction="left" />
          <LogoMarquee logos={logosRow2} direction="right" />
        </div>
      </div>
    </section>
  )
}

export default AssociadasLogos