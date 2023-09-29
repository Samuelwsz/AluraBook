import Button from "../components/button"
import CardUpdateData from "../components/cardUpdateData"

export default function Requests() {
  return (
    <>
      <div className="flex-1 p-4">
        <div className="text-blue-900 font-bold text-xl pb-3">Pedidos</div>

        <CardUpdateData
          order="0000000"
          periodDate="26/05/2023"
          amount="48"
          deliveryMadeIn="30/05/2023"
        />
        <CardUpdateData
          order="111111111"
          periodDate="20/05/2023"
          amount="48"
          deliveryMadeIn="10/05/2023"
        />
      </div>
    </>
  )
}
