import Button from "./button"

interface CardUpdateDataProps {
  order: string
  periodDate: string
  amount: string
  deliveryMadeIn: string
}

export default function CardUpdateData({
  order,
  periodDate,
  amount,
  deliveryMadeIn,
}: CardUpdateDataProps) {
  return (
    <>
      <div className="flex items-end pb-5 text-blue-900">
        <div className="flex-1 pt-3">
          <p className="font-semibold">
            Pedido: <span className="font-bold">{order}</span>
          </p>
          <p className="font-semibold">
            Data do período:
            <span className="font-bold">{periodDate}</span>
          </p>
          <p className="font-semibold">
            Valor total: <span className="font-bold">R$ {amount}</span>
          </p>
          <p className="font-semibold">
            Entrega realizada em:
            <span className="font-bold"> {deliveryMadeIn}</span>
          </p>
        </div>
        <div className="ml-auto">
          <Button primary>Detalhes</Button>
        </div>
      </div>
      <hr />
    </>
  )
}
