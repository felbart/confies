type HeroNoticiaProps = {
  eyebrow?: string
  title: string
}

const HeroNoticia = ({
  eyebrow = "Notícia",
  title,
}: HeroNoticiaProps) => {
  return (
    <section className="w-full bg-primary-800 pt-28 pb-10 md:pt-32 md:pb-12">
      <div className="container flex flex-col gap-3">
        <span className="text-sm uppercase tracking-[0.3em] text-secondary-300 font-medium">
          {eyebrow}
        </span>
        <h1 className="text-white max-w-4xl">
          {title}
        </h1>
      </div>
    </section>
  )
}

export default HeroNoticia