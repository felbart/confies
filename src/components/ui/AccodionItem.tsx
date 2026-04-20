import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

type AccordionItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <h6
          className={`transition-colors duration-200 cursor-pointer ${
            isOpen ? "text-primary-700" : "text-gray-800"
          }`}
        >
          {question}
        </h6>

        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-all duration-300 ${
            isOpen ? "rotate-180 text-primary-800" : "text-gray-900"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-8">
              <p className="text-base leading-relaxed text-gray-500">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionItem