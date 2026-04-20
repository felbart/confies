import AnimatedTitle from "@/components/ui/AnimatedTitle"

const SectionEventos = () => {
  return (
    <section id="eventos" className="section bg-gray-100">
        <div className="cotainer flex flex-col items-center justify-center gap-12">
            <AnimatedTitle title="Lista de Eventos" align="center" />
            <div className="flex flex-col items-center justify-center gap-6">
                <span className="inline-flex w-full bg-secondary-200 text-gray-800 text-center uppercase text-lg font-medium">
                    Encontros Nacionais
                </span>
            </div>
        </div>
    </section>
  )
}

export default SectionEventos