import { Link } from "react-router-dom"
import Button from "../components/button"

export default function Logged() {
  return (
    <>
      <div className="flex justify-center gap-5 items-center bg-blue-900 p-8 text-white">
        <div className="p-0 m-0">
          <h1 className="font-semibold mb-8 text-xl uppercase">
            Já possui uma conta?
          </h1>
          <p className="text-base">
            Com um conta você pode criar sua própria estante de livros e
            e-books.
          </p>
        </div>

        <div className="flex gap-3">
          <Link to="/register">
            <Button secondary>Criar conta</Button>
          </Link>
          <Link to="/login">
            <Button primary>Fazer login</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
