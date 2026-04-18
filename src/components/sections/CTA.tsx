import { Button } from "../ui/Button"

const CTA = () => {
  return (
    <section className="section bg-primary-800">
        <div className="container flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-2 w-full md:w-7/12 text-centerd">
                <span className="eyebrow text-secondary-300!">Associe sua fundação</span>
                <h3 className="text-white">Fortaleça sua atuação com o CONFIES</h3>
                <p className="text-primary-400 text-md text-pretty text-center">Ao se filiar ao CONFIES, sua Fundação passa a integrar uma rede nacional que defende direitos, oferece apoio técnico e promove espaços de troca e inovação. Mais do que representatividade, você terá suporte para enfrentar desafios comuns e contribuir para o fortalecimento da ciência e da educação no Brasil.</p>
            </div>
            <Button variant="secondary" size="lg">Filie-se agora mesmo</Button> 
        </div>
    </section>
  )
}

export default CTA