import { Button } from "@/components/ui/Button"

const EventoDestaque = () => {
  return (
    <section id="eventos" className="section bg-gray-50">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-4">
            <div className="flex flex-col items-center md:items-start justify-start gap-8 w-full md:w-6/12">
                <div className="flex flex-col items-center md:items-start gap-2 mt-4">
                    <span className="eyebrow">Evento Destaque</span>
                    <h4>Congresso Nacional do Confies</h4>
                </div>
                
                <p className="text-base text-pretty text-gray-500 text-center md:text-left">O 8º Congresso Nacional do Conselho Nacional das Fundações de Apoio às Instituições de Ensino Superior, configura-se como um espaço estratégico para o intercâmbio de experiências e a consolidação de boas práticas entre os diversos agentes que compõem o ecossistema da ciência, tecnologia e inovação no Brasil. Esses encontros promovem debates qualificados sobre temas de relevância fundamental para as Instituições Federais de Ensino Superior (IFES), Institutos Federais de Educação, Ciência e Tecnologia (IFs), Instituições Científicas e Tecnológicas (ICTs) e suas res- pectivas Fundações de Apoio (FAs), que desempenham papel essencial no fomento à pesquisa científica e à inovação tecnológica, ao viabilizarem a execução de projetos e programas de interesse nacional.</p>
                <div className="flex items-center justify-center gap-4">
                    <Button variant="primary" size="lg">Programação</Button>
                    <Button variant="secondary" size="lg" className="w-fit">Inscrição</Button>
                </div>
                
            </div>
            <div className="w-8/12 md:w-5/12">
                <img src="/images/congresso.png" alt="Congresso Nacional do Confies" />
            </div>
        </div>
    </section>
  )
}

export default EventoDestaque