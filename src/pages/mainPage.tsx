import "../styles/global.css"
import { Outlet } from "react-router-dom"
import Header from "../components/header"
import LastReleases from "../components/lastReleases"
import JsonBooks from "../json/Books.json"
import InputSearch from "../components/inputSeach"
import Footer from "../components/footer"
import NewsByEmail from "../components/newsByEmail"

export default function MainPage() {
  return (
    <>
      <Header />
      <InputSearch />
      <LastReleases
        title="ÚLTIMOS LANÇAMENTOS"
        listBook={JsonBooks.LastBooks}
      />
      <LastReleases title="MAIS VENDIDOS" listBook={JsonBooks.LastBooks} />
      <Outlet />
      <NewsByEmail />
      <Footer />
    </>
  )
}
