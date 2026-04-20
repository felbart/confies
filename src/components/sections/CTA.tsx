import { Button } from "../ui/Button"

const CTA = () => {
  return (
    <section className="section bg-primary-800 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('/images/cta-bg.png')] bg-cover bg-center" />

      
      <div className="absolute inset-0 bg-linear-to-br from-primary-800/50" />

      <div className="container relative flex flex-col items-center md:items-start justify-center gap-8 text-center">
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-7/12">
          <span className="eyebrow text-secondary-300">
            Associe sua fundação
          </span>

          <h3 className="text-white">
            Fortaleça sua atuação com o CONFIES
          </h3>

          <p className="text-primary-300 text-md text-left">
            Ao se filiar ao CONFIES, sua Fundação passa a integrar uma rede nacional
            que defende direitos, oferece apoio técnico e promove espaços de troca e
            inovação.
          </p>
        </div>

        <Button variant="secondary" size="lg">
          Filie-se agora mesmo
        </Button>
      </div>
    </section>
  )
}

export default CTA