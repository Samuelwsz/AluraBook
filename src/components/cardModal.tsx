interface CardModalProps {
  titlebook?: string
  description?: string
  price?: string
}

export default function CardModal({
  titlebook,
  description,
  price,
}: CardModalProps) {
  return (
    <>
      <div>
        <h1>Sobre o livro:</h1>
        <h3>{titlebook}</h3>
        <p>{description}</p>
        <p>A partir de:</p>
        <div>
          <h2>R$ {price}</h2>
          <button>Comprar</button>
        </div>
      </div>
    </>
  )
}
