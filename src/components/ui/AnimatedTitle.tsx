import { fadeLeft, fadeRight, fadeUpContainer, fadeUpItem } from "@/lib/animation"
import { motion } from "motion/react"

type AnimatedTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center" | "right"
}

const alignmentMap = {
  left: {
    container: "items-start text-left",
    inner: "justify-start",
    text: "text-left",
  },
  center: {
    container: "items-center text-center",
    inner: "justify-center",
    text: "text-center",
  },
  right: {
    container: "items-end text-right",
    inner: "justify-end",
    text: "text-right",
  },
}

const AnimatedTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
}: AnimatedTitleProps) => {
  const config = alignmentMap[align]

  return (
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col gap-3 max-w-3xl ${config.container}`}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <motion.span
          variants={fadeUpItem}
          className={`text-xs uppercase tracking-[0.3em] text-primary-600 font-medium ${config.text}`}
        >
          {eyebrow}
        </motion.span>
      )}

      {/* Title + Icon */}
      <motion.div
        variants={fadeUpContainer}
        className={`flex items-center gap-2 ${config.inner}`}
      >
        <motion.img
          variants={fadeRight}
          src="/images/headline-icon.png"
          alt=""
          className="h-4 w-auto"
        />

        <motion.h4 variants={fadeLeft}>
          {title}
        </motion.h4>
      </motion.div>

      {/* Description */}
      {description && (
        <motion.p
          variants={fadeUpItem}
          className={`text-gray-500 ${config.text}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default AnimatedTitle