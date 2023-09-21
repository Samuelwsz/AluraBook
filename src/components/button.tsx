interface BotaoProps {
  children: string
  type?: "button" | "submit" | "reset"
}

export default function Button({ children, type = "button" }: BotaoProps) {
  return (
    <>
      <button
        type={type}
        className="bg-yellow-500 pl-4 pr-4 p-2 text-xl text-white font-bold"
      >
        {children}
      </button>
    </>
  )
}
