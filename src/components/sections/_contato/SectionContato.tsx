import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

const SectionContato = () => {
  return (
    <section id="contato" className="section bg-gray-50">
      <div className="container flex flex-col gap-8">
        
        {/* GRID SUPERIOR */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* CARD VERDE (2 COLUNAS) */}
          <div className="lg:col-span-2 flex h-full flex-col justify-center gap-4 rounded-2xl bg-primary-800 p-8 text-white">
            <span className="eyebrow text-secondary-300!">Sobre o CONFIES</span>

            <h4 className="text-white">
              Fortalecendo a atuação das fundações de apoio em todo o Brasil
            </h4>

            <p className="text-primary-100 text-pretty max-w-2xl">
              O CONFIES é uma associação civil de direito privado, sem fins
              lucrativos, que representa fundações de apoio às instituições de
              ensino superior e de pesquisa científica e tecnológica em todo o
              país, promovendo integração, suporte técnico e fortalecimento
              institucional.
            </p>
          </div>

          {/* CARD DE CONTATO (1 COLUNA) */}
          <div className="flex h-full flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-8">
            <span className="eyebrow">Contato</span>

            {/* ENDEREÇO */}
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary-300">
                <MapPin size={18} className="text-primary-800" />
              </span>

              <div className="flex flex-col gap-2">
                <h5>Endereço</h5>
                <p className="text-sm leading-6 text-gray-500 text-pretty">
                  SRTVS, Quadra 701, Bloco K, Sala 327
                  <br />
                  Edifício Embassy Tower
                  <br />
                  Brasília - DF, CEP: 70340-908
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* TELEFONE */}
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary-300">
                <Phone size={18} className="text-primary-800" />
              </span>

              <div className="flex flex-col gap-2">
                <h5>Telefone</h5>
                <a
                  href="tel:+556130373443"
                  className="text-sm leading-6 text-gray-500 transition-colors hover:text-primary-700"
                >
                  (61) 3037-3443
                </a>
              </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary-300">
                <Mail size={18} className="text-primary-800" />
              </span>

              <div className="flex flex-col gap-2">
                <h5>E-mail</h5>
                <a
                  href="mailto:confies@confies.org.br"
                  className="text-sm leading-6 text-gray-500 transition-colors hover:text-primary-700"
                >
                  confies@confies.org.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">Localização</span>
              <h3>Visite nossa sede em Brasília</h3>
            </div>

            <a
              href="https://maps.google.com/?q=Confies+Brasília"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-primary-800"
            >
              Abrir no Google Maps
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7678.219217717335!2d-47.89256225198859!3d-15.79817344929378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b6fd28242ff%3A0x797f9239e8e7eadb!2sConfies!5e0!3m2!1spt-BR!2sbr!4v1776698565685!5m2!1spt-BR!2sbr"
              className="h-105 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Mapa de localização do CONFIES"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContato