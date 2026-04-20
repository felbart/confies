type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"

  const variants = {
    primary:
      "bg-primary-700 text-white hover:bg-primary-600 focus:ring-primary-500",
    secondary:
      "bg-secondary-400 text-gray-900 hover:bg-secondary-300",
    ghost:
      "bg-transparent text-primary-700 hover:underline focus:ring-transparent px-0"
  }

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-14 px-6 text-lg"
  }

  return (
    <button
      className={`
        ${base}
        ${sizes[size]}
        ${variants[variant]}
        ${fullWidth ? "w-full" : "w-fit"}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}