import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router"
import BackToTop from "@/components/ui/BackToTop"

const socialLinks = [
  {
    href: "https://www.youtube.com/channel/UCx0FXkEjtvCMRS2wc6pRXKQ",
    label: "YouTube",
    icon: "/images/iconoir_youtube.svg",
  },
  {
    href: "https://www.instagram.com/confiesoficial/",
    label: "Instagram",
    icon: "/images/icon-instagram.svg",
  },
  {
    href: "https://www.facebook.com/confies/",
    label: "Facebook",
    icon: "/images/icon-facebook.svg",
  },
  {
    href: "https://www.twitter.com/confies/",
    label: "X / Twitter",
    icon: "/images/icon-xtwitter.svg",
  },
]

const navigationLinks = [
  { label: "Institucional", to: "/institucional" },
  { label: "Fundações de Apoio", to: "/fundacoes" },
  { label: "Agenda & Eventos", to: "/agenda" },
  { label: "Notícias", to: "/noticias" },
  { label: "Contato", to: "/contato" },
]

const Footer = () => {
  return (
    <footer className="bg-primary-950 pt-12 text-white md:pt-24">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6 border-b border-primary-800 pb-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <img
            src="/images/logo-bco.svg"
            alt="Confies Logo"
            className="w-40 md:w-44"
          />

          <div className="flex flex-col items-center gap-3 md:items-end">
            <span className="text-sm font-medium text-white">
              Acompanhe nossas redes
            </span>

            <ul className="flex items-center justify-center gap-2">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex size-10 items-center justify-center rounded-xl border border-primary-700 bg-primary-900/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500 hover:bg-primary-800"
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-5 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pb-10 text-center md:grid-cols-12 md:gap-8 md:text-left">
          <div className="md:col-span-5 lg:col-span-4">
            <p className="mx-auto max-w-md text-base leading-relaxed text-white md:mx-0">
              Somos uma associação civil com personalidade jurídica de direito
              privado sem fins lucrativos que agrega e representa centenas de
              fundações afiliadas em todo o território nacional.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-4 text-lg font-semibold text-white">Navegação</h4>

            <ul className="flex flex-col items-center gap-3 md:items-start">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white transition-opacity duration-200 hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-5">
            <h4 className="mb-4 text-lg font-semibold text-white">Contato</h4>

            <div className="flex flex-col items-center gap-4 text-white md:items-start">
              <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:text-left">
                <MapPin size={20} className="shrink-0 text-primary-500 md:mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-white">Onde estamos</span>
                  <p className="leading-relaxed text-white">
                    SRTVS, Qd. 701 Bloco K Sala 327, Ed. Embassy Tower
                  </p>
                </div>
              </div>

              <a
                href="tel:+556130373443"
                className="inline-flex items-center gap-3 text-white transition-opacity duration-200 hover:opacity-80"
              >
                <Phone size={18} className="shrink-0 text-primary-500" />
                <span>(61) 3037-3443</span>
              </a>

              <a
                href="mailto:confies@confies.org.br"
                className="inline-flex items-center gap-3 break-all text-white transition-opacity duration-200 hover:opacity-80"
              >
                <Mail size={18} className="shrink-0 text-primary-500" />
                <span>confies@confies.org.br</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 border-t border-primary-800 py-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-white">
            © 2026 CONFIES. Todos os direitos reservados.
          </p>

          <BackToTop />
        </div>
      </div>
    </footer>
  )
}

export default Footer