import { Link } from "react-router-dom"
import Button from "../components/button"
import imgLogin from "/assets/Login.png"
import InputComp from "../components/input"
import { FormEvent, useState } from "react"
import http from "../http"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [complement, setComplement] = useState("")
  const [CEP, setCEP] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = {
      name,
      email,
      password,
      address,
      CEP,
      complement,
    }

    http
      .post("/public/registrar", user)
      .then(() => {
        alert("usuario cadastrado!!!")
        setName("")
        setEmail("")
        setAddress("")
        setComplement("")
        setCEP("")
        setPassword("")
        setConfirmPassword("")
      })
      .catch(() => {
        alert("Algo deu errado!!!")
      })
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/login">
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputComp
              label="Nome"
              placeholder="Seu nome completo"
              value={name}
              onchange={(e) => setName(e.target.value)}
            />
            <InputComp
              label="Email"
              placeholder="seuemail@email.com"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />
            <InputComp
              label="Endereço"
              placeholder="Sua rua e número"
              value={address}
              onchange={(e) => setAddress(e.target.value)}
            />
            <div className="flex justify-between gap-3">
              <InputComp
                label="Complemento"
                placeholder="Apto/casa, referência"
                value={complement}
                onchange={(e) => setComplement(e.target.value)}
              />
              <InputComp
                label="CEP"
                placeholder="Apto/casa e bloco"
                value={CEP}
                onchange={(e) => setCEP(e.target.value)}
              />
            </div>
            <InputComp
              label="Senha"
              placeholder="**********"
              value={password}
              onchange={(e) => setPassword(e.target.value)}
            />
            <InputComp
              label="Confirmar Senha"
              placeholder="**********"
              value={confirmPassword}
              onchange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="text-center ">
              <Button primary type="submit">
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
