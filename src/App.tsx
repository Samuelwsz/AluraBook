import "./styles/global.css"
import SearchedCategories from "./components/searchedCategories"
import InputSearch from "./components/inputSeach"
import LastReleases from "./components/lastReleases"
import JsonBooks from "./json/Books.json"
export default function App() {
  return (
    <>
      <InputSearch />
      <LastReleases
        title="ÚLTIMOS LANÇAMENTOS"
        listBook={JsonBooks.LastBooks}
      />
      <LastReleases title="MAIS VENDIDOS" listBook={JsonBooks.LastBooks} />
      <SearchedCategories />
    </>
  )
}
