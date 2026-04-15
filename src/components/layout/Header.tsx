import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import logoBCO from "@/assets/images/logo-bco.svg";
import logo from "@/assets/images/logo-verde.svg";
import { Link } from "react-router";
const navItems = [
  { label: "Institucional", href: "#institucional" },
  { label: "Fundações de Apoio", href: "#fundacoes" },
  { label: "Agenda", href: "#agenda" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const isScrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  const isSolid = isScrolled || menuOpen;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isSolid
            ? "border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-b border-white/20 bg-transparent",
        ].join(" ")}
      >
        <div className="container flex h-22 items-center justify-between sm:px-6 lg:px-8">
          <Link
            to="/"
            aria-label="CONFIES"
            className={[
              "font-heading text-[2.25rem] font-extrabold leading-none tracking-tight transition-colors duration-300",
              isSolid ? "text-primary-700" : "text-white",
            ].join(" ")}
          >
            <img src={
              isSolid ?
              logo :
              logoBCO
            } alt="Confies" className="w-40 transition-opacity duration-300" />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "text-base font-medium transition-colors duration-300 hover:opacity-80",
                  isSolid ? "text-text-secondary" : "text-white",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="/associado"
              className={[
                "inline-flex h-11 items-center justify-center rounded-xl border px-6 text-base font-medium transition-all duration-300",
                isSolid
                  ? "border-primary-500 text-primary-700 hover:bg-primary-500/5"
                  : "border-white text-white hover:bg-white/10",
              ].join(" ")}
            >
              Área do associado
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className={[
              "inline-flex h-12 w-14 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden",
              isSolid
                ? "border-primary-500 text-primary-700"
                : "border-white text-white",
            ].join(" ")}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={[
          "fixed inset-x-0 top-22 z-40 origin-top overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto max-h-105 border-b border-black/10 opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="container flex flex-col py-6 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/5 py-4 text-lg font-medium text-text-secondary transition-colors hover:text-primary-700"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/associado"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex h-12 items-center justify-center rounded-xl border border-primary-500 px-6 text-base font-medium text-primary-700"
          >
            Área do associado
          </a>
        </nav>
      </div>
    </>
  );
}