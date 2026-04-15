import heroImage from "@/assets/images/hero-bg.png";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary-950 text-white">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Representante do CONFIES utilizando notebook"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-primary-900)/92_0%,var(--color-primary-900)/86_28%,var(--color-primary-900)/55_52%,var(--color-primary-900)/22_75%,var(--color-primary-900)/10_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_42%)]" />

      <div className="container relative flex min-h-screen items-center pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="max-w-170]">
          <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.32em] text-primary-500 sm:text-base">
            Bem-vindo ao CONFIES
          </span>

          <h1 className="heading-hero max-w-205 font-semibold tracking-[-0.03em] text-white">
            Representando e fortalecendo as Fundações de Apoio em todo o Brasil
          </h1>

          <p className="mt-6 max-w-155 text-base leading-8 text-white/85 sm:text-lg">
            O CONFIES conecta e defende fundações que viabilizam a relação entre
            universidades, institutos de pesquisa, empresas e sociedade.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#quem-somos"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-secondary-300 px-8 text-lg font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Conheça o CONFIES
            </a>

            <a
              href="#associe-se"
              className="text-lg font-semibold text-white underline decoration-white/60 underline-offset-4 transition-opacity hover:opacity-80"
            >
              Associe-se ao CONFIES
            </a>
          </div>

          <div className="mt-14 flex items-center gap-5">
            <div className="flex -space-x-3">
              <span className="h-14 w-14 rounded-full border-4 border-primary-900 bg-neutral-100" />
              <span className="h-14 w-14 rounded-full border-4 border-primary-900 bg-primary-500" />
              <span className="h-14 w-14 rounded-full border-4 border-primary-900 bg-secondary-200" />
            </div>

            <div className="leading-tight">
              <strong className="block text-4xl font-semibold text-white">+ 90</strong>
              <span className="text-lg text-white/85">Fundações associadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}