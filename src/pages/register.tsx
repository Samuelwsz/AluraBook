import { Link } from "react-router-dom"
import Button from "../components/button"
import imgLogin from "/assets/Login.png"

export default function Register() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-20 w-20"
              src={imgLogin}
              alt="Your Company"
            />
          </Link>

          <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-yellow-500 uppercase">
            Registro
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 outline-none"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seuemail@email.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium leading-6 text-gray-900 outline-none"
              >
                Endereço
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="address"
                  autoComplete="address"
                  placeholder="Sua rua e número"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
                />
              </div>
            </div>

            <div className="flex justify-between gap-3">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium leading-6 text-gray-900 outline-none"
                >
                  Complemento
                </label>
                <div className="mt-2">
                  <input
                    autoComplete=""
                    placeholder="Apto/casa, referência"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium leading-6 text-gray-900 outline-none"
                >
                  CEP
                </label>
                <div className="mt-2">
                  <input
                    autoComplete=""
                    placeholder="Apto/casa e bloco"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium leading-6 text-gray-900 outline-none"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  placeholder="**********"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium leading-6 text-gray-900 outline-none"
              >
                Confirmar Senha
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  placeholder="**********"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
                />
              </div>
            </div>

            <div className="text-center ">
              <Button primary>Cadastrar</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
