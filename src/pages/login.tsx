import { Link, useNavigate } from "react-router-dom"
import Button from "../components/button"
import imgLogin from "/assets/Login.png"
import InputComp from "../components/input"
import { FormEvent, useState } from "react"
import http from "../http"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = {
      email,
      password,
    }
    http
      .post("/public/login", user)
      .then((response) => {
        sessionStorage.setItem("token", response.data.access_token)
        setEmail("")
        setPassword("")
        navigate("/logged")
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          alert(error.response.data.message)
        } else {
          alert("Erro")
        }
      })
  }

  {
    /*export const useObterToken = () => {
    return sessionStorage.getItem('token');
};

export const useLimparToken = () => {
    sessionStorage.removeItem('token');
}; */
  }

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
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputComp
              label="Email"
              placeholder="seuemail@email.com"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />

            <div>
              <InputComp
                label="Senha"
                placeholder="*********"
                value={password}
                onchange={(e) => setPassword(e.target.value)}
              />
              <div className="text-sm text-right pt-1">
                <a
                  href="#"
                  className="font-semibold text-yellow-500 hover:text-orange-300"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-xl font-bold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Logar
              </button>
              {/*<Link to="/logged"></Link> */}
            </div>
          </form>

          <div className="mt-10 text-center text-sm text-gray-500 justify-between flex items-center">
            <p className="text-base">Ainda não tem uma conta?</p>
            <Link to="/register">
              <Button primary>Criar conta</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
