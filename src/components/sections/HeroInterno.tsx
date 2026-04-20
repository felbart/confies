import {
  fadeUpContainer,
  fadeUpItem,
  imageReveal,
  scaleXDivider,
} from "@/lib/animation"
import { motion } from "motion/react"

type HeroInternoSize = "sm" | "md" | "lg" 

type HeroInternoProps = {
  eyebrow?: string
  title: string
  description?: string
  backgroundImage?: string
  size?:HeroInternoSize
}

const sizeVariants = {
  sm: "min-h-[30vh]",
  md: "min-h-[45vh]",
  lg: "min-h-[60vh]",
} satisfies Record<HeroInternoSize, string>

const HeroInterno = ({
  eyebrow,
  title,
  description,
  backgroundImage,
  size = "lg"
}: HeroInternoProps) => {
  return (
    <section
      id="hero"
      className={`relative flex items-end py-12 overflow-hidden bg-primary-800 ${sizeVariants[size]}`}
    >
      {backgroundImage ? (
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-linear-to-r from-primary-900 to-primary-800" />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-linear-to-r from-primary-900/90 via-primary-900/70 to-primary-900/40"
      />

      <div className="container relative">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          animate="visible"
          className="w-full md:w-7/12 text-white space-y-3"
        >
          {eyebrow && (
            <motion.span variants={fadeUpItem} className="eyebrow">
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            variants={fadeUpItem}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUpItem}
              className="text-base md:text-lg text-primary-300"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            variants={scaleXDivider}
            className="h-px w-24 origin-left bg-white/30"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroInterno