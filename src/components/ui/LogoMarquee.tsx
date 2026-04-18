import { motion } from "motion/react"
import { marquee, marqueeReverse } from "@/lib/animation"

type LogoItem = {
  src: string
  alt: string
}

type LogoMarqueeProps = {
  logos: LogoItem[]
  direction?: "left" | "right"
}

const LogoMarquee = ({
  logos,
  direction = "left",
}: LogoMarqueeProps) => {
  const duplicatedLogos = [...logos, ...logos]

  const animation = direction === "left" ? marquee : marqueeReverse

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max items-center gap-4 md:gap-6"
        {...animation}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="
              flex h-24 min-w-45 items-center justify-center rounded-2xl
              border border-neutral-200 bg-white px-6 shadow-sm
              transition-all duration-300 hover:-translate-y-1 hover:shadow-md
              md:h-28 md:min-w-55
            "
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-10 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default LogoMarquee