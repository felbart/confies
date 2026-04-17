import heroImage from "/images/hero-bg.png";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-primary-950 text-white flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Representante do CONFIES utilizando notebook"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-primary-900)/92_0%,var(--color-primary-900)/86_28%,var(--color-primary-900)/55_52%,var(--color-primary-900)/22_75%,var(--color-primary-900)/10_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_42%)]" />

      <div className="container relative inset-0 flex items-end pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="w-full max-w-200 flex flex-col items-start justify-start gap-4">
          <span className="eyebrow">
            Bem-vindo ao CONFIES
          </span>

          <h1 className="heading-hero font-semibold tracking-[-0.03em] text-white">
            Representando e fortalecendo as Fundações de Apoio em todo o Brasil
          </h1>

          <p className="max-w-180 text-base leading-6 sm:text-lg">
            O CONFIES conecta e defende fundações que viabilizam a relação entre
            universidades, institutos de pesquisa, empresas e sociedade.
          </p>

          <div className="flex flex-col w-full items-start gap-4 sm:flex-row sm:items-center">
            <Button size="lg" variant="primary">
            Conheça o Confies
            </Button>
             <Button variant="secondary" size="lg">
                Conheça o CONFIES
              </Button>

              <Button variant="ghost" size="lg" className="text-white hover:text-primary-900 underline underline-offset-4">
                Associe-se ao CONFIES
              </Button>
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