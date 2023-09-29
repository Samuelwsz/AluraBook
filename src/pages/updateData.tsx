import { Link } from "react-router-dom"
import Button from "../components/button"

export default function UpdateData() {
  return (
    <>
      <div className="flex-1 p-4 ">
        <div className="text-blue-900 font-bold text-xl pb-3">Pedidos</div>
        <div className="text-blue-900 font-bold text-base pb-3">
          Dados pessoais
        </div>
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium leading-6 text-gray-900 outline-none"
          >
            Nome
          </label>
          <div className="mt-2 mb-2">
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              placeholder="Seu nome completo"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4 "
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="dataNascimento"
            className="block text-sm font-medium leading-6 text-gray-900 outline-none"
          >
            Data de nascimento
          </label>
          <div className="mt-2 mb-2">
            <input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              autoComplete="off"
              placeholder="DD/MM/AAAA"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
              // Você pode definir um intervalo de datas permitido, se necessário
              // max="AAAA-MM-DD"  // Data máxima permitida
              // min="AAAA-MM-DD"  // Data mínima permitida
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="cpf"
            className="block text-sm font-medium leading-6 text-gray-900 outline-none"
          >
            CPF
          </label>
          <div className="mt-2 mb-2">
            <input
              id="cpf"
              name="cpf"
              type="text"
              autoComplete="off"
              placeholder="123.456.789-00" // Exemplo de máscara
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
              // Adicione uma máscara para formatar o CPF
              // No exemplo acima, usei uma máscara simplificada (123.456.789-00)
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="telefone"
            className="block text-sm font-medium leading-6 text-gray-900 outline-none"
          >
            Telefone
          </label>
          <div className="mt-2 mb-2">
            <input
              id="telefone"
              name="telefone"
              type="tel"
              autoComplete="off"
              placeholder="(00) 12345-6789" // Exemplo de máscara
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
              // Adicione uma máscara para formatar o número de telefone
              // No exemplo acima, usei uma máscara simplificada ((00) 12345-6789)
            />
          </div>
        </div>
        <div className="flex justify-center pt-3">
          <Link to="/requests">
            <Button primary>Atualizar</Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="text-blue-900 font-bold text-xl pb-3">
          Dados de acesso
        </div>
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium leading-6 text-gray-900 outline-none"
          >
            Nome
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              placeholder="Seu nome completo"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
            />
          </div>
        </div>
        <div className="flex justify-between pt-6">
          <Button primary>Alterar email</Button>
          <Button secondary>Alterar senha</Button>
        </div>
      </div>
    </>
  )
}
