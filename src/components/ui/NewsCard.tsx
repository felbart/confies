type NewsCardProps = {
  title: string
  image: string
  date: string
  category: string
  variant?: "featured" | "default"
}

export function NewsCard({
  title,
  image,
  date,
  category,
  variant = "default",
}: NewsCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-2xl
        ${variant === "featured" ? "h-[420px]" : "h-[260px]"}
        group
      `}
    >
      {/* imagem */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* conteúdo */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-black">
          {category}
        </span>

        <h3
          className={`
            mt-3 font-semibold text-white
            ${variant === "featured" ? "text-xl md:text-2xl" : "text-base"}
          `}
        >
          {title}
        </h3>

        <div className="mt-2 text-sm text-white/80">
          {date}
        </div>
      </div>
    </article>
  )
}