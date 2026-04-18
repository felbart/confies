type HeroInternoProps = {
  eyebrow?: string
  title: string
  description?: string
  backgroundImage?: string
}

const HeroInterno = ({
  eyebrow,
  title,
  description,
  backgroundImage,
}: HeroInternoProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-[60vh] flex items-end py-12 overflow-hidden"
    >
      {/* background */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-linear-to-r from-primary-900 to-primary-800" />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary-900/90 via-primary-900/70 to-primary-900/40" />

      {/* conteúdo */}
      <div className="container relative">
        <div className="w-full md:w-7/12 text-white space-y-3">
          {eyebrow && (
            <span className="eyebrow">
              {eyebrow}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-base md:text-lg text-primary-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroInterno