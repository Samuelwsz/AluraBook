export default function SideBar() {
  return (
    <>
      <div className="text-center w-1/4 p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="text-blue-900 hover:font-bold">
              Pedidos
            </a>
            <hr />
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-900 hover:font-bold">
              Trocas
            </a>
            <hr />
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-900 hover:font-bold">
              Endereço
            </a>
            <hr />
          </li>
          <li>
            <a href="#" className="text-blue-900 hover:font-bold">
              Dados Pessoais
            </a>
          </li>
          <hr className="w-1/4 bg-gray-300 my-2 text-center items-center justify-center" />
        </ul>
      </div>
    </>
  )
}
