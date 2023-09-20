import "./styles/global.css"
import Header from "./components/header"
import NewsByEmail from "./components/newsByEmail"
import SearchedCategories from "./components/searchedCategories"
import InputSearch from "./components/inputSeach"
import Footer from "./components/footer"
import LastReleases from "./components/lastReleases"

export default function App() {
  return (
    <>
      <Header />
      <InputSearch />
      <LastReleases />
      <SearchedCategories />
      <NewsByEmail />
      <Footer />
    </>
  )
}
