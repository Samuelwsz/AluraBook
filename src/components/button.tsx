interface BotaoProps {
  children: string
  type?: "button" | "submit" | "reset"
  primary?: boolean
  secondary?: boolean
}

export default function Button({
  children,
  type = "button",
  primary = false,
  secondary = false,
}: BotaoProps) {
  const baseClasses = "pl-4 pr-4 p-2 text-xl font-bold"
  const primaryClasses = "bg-yellow-500 border-2 border-yellow-500 text-white"
  const secondaryClasses =
    "bg-blue-900 text-orange-500 border-2 border-orange-500"

  const buttonClasses = `${baseClasses} ${
    primary ? primaryClasses : secondary ? secondaryClasses : ""
  }`

  return (
    <>
      <button type={type} className={buttonClasses}>
        {children}
      </button>
    </>
  )
}
