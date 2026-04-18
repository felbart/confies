import { ArrowUp } from "lucide-react"

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      className="group inline-flex items-center gap-3 text-sm font-medium text-primary-200 transition-colors duration-200 hover:text-white"
      aria-label="Voltar ao topo"
    >
      <span className="uppercase tracking-[0.12em]">voltar ao topo</span>

      <span className="inline-flex size-10 items-center justify-center rounded-full border border-primary-700 bg-primary-900 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary-500 group-hover:bg-primary-800">
        <ArrowUp size={18} />
      </span>
    </button>
  )
}

export default BackToTop