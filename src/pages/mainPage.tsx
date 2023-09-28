import "../styles/global.css"
import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import NewsByEmail from "../components/newsByEmail"

export default function MainPage() {
  return (
    <>
      <Header />
      <Outlet />
      <NewsByEmail />
      <Footer />
    </>
  )
}
