import type { LucideIcon } from "lucide-react"

type AssociadasCardProps = {
  title: string
  description: string
  icon: LucideIcon
}

const AssociadasCard = ({
  title,
  description,
  icon: Icon,
}: AssociadasCardProps) => {
  return (
    <article
      className="
        group relative flex h-full flex-col rounded-3xl border border-primary-700/60
        bg-primary-800/80 p-6 pt-12 text-white shadow-lg backdrop-blur-[2px]
        transition-all duration-300 hover:-translate-y-1 hover:bg-primary-800 hover:shadow-xl
        md:p-8 md:pt-14
      "
    >
      <div
        className="
          absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full
          bg-secondary-200 shadow-md ring-8 ring-primary-900/40
          transition-transform duration-300 group-hover:-translate-y-1
          md:left-8 md:h-16 md:w-16
        "
      >
        <Icon className="h-6 w-6 text-primary-900 md:h-7 md:w-7" />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <h3 className="max-w-[14ch] text-2xl font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="text-base leading-relaxed text-primary-100">
          {description}
        </p>
      </div>
    </article>
  )
}

export default AssociadasCard