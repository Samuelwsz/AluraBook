import { useEffect, useState } from "react"
import CardUpdateData from "../components/cardUpdateData"
import http from "../http"

interface RequestsProps {
  id: number
  data: string
  entrega: string
  total: number
}

export default function Requests() {
  const [requests, setRequests] = useState<RequestsProps[]>([])

  const formattedMoney = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  })

  useEffect(() => {
    const token = sessionStorage.getItem("token")

    http
      .get<RequestsProps[]>("/pedidos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setRequests(response.data))
      .catch((erro) => console.log(erro))
  }, [])

  return (
    <>
      <div className="flex-1 p-4">
        <div className="text-blue-900 font-bold text-xl pb-3">Pedidos</div>

        {requests.map((request) => (
          <CardUpdateData
            key={request.id}
            order={request.id}
            periodDate={new Date(request.data).toLocaleDateString()}
            deliveryMadeIn={new Date(request.entrega).toLocaleDateString()}
            amount={formattedMoney.format(request.total)}
          />
        ))}
      </div>
    </>
  )
}
