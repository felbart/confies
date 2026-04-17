type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer w-full sm:w-fit"

  const variants = {
    primary:
      "bg-primary-700 text-white hover:bg-primary-600 focus:ring-primary-500",
    secondary:
      "bg-secondary-400 text-gray-900 hover:bg-secondary-300",
    ghost:
      "bg-transparent text-primary-700 hover:underline focus:ring-transparent"
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm min-w-[120px]",
    md: "px-5 py-2 text-base min-w-[160px]",
    lg: "px-6 py-3 text-lg min-w-[180px]"
  }

  const ghostSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }

  return (
    <button
      className={`
        ${base}
        ${variant === "ghost" ? ghostSize[size] : sizes[size]}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}