export default function SideBar() {
  return (
    <>
      <div className="text-center w-1/4 p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="text-blue-900 hover:font-bold">
              Pedidos
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-900 hover:font-bold">
              Trocas
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-900 hover:font-bold">
              Endereço
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-900 hover:font-bold">
              Dados Pessoais
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
