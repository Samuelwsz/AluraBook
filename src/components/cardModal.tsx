import Button from "./button"

interface CardModalProps {
  titlebook?: string
  description?: string
  price?: string
  author?: string
}

export default function CardModal({
  titlebook,
  description,
  price,
  author,
}: CardModalProps) {
  return (
    <>
      <h1 className="text-left font-bold text-3xl text-yellow-500 mb-1">
        Sobre o livro:
      </h1>
      <h3 className="font-bold mb-3 text-lg text-left text-blue-900">
        {titlebook}
      </h3>
      <p className="text-left">{description}</p>
      <p className="mb-3 text-left text-sm">Por: {author}</p>
      <p className="mb-2 text-left font-semibold">A partir de:</p>
      <div className="flex gap-6 justify-between items-center">
        <h2 className="font-bold text-xl text-blue-900">R$: {price}</h2>
        <Button primary>Comprar</Button>
      </div>
    </>
  )
}
