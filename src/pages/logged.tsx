import InputSearch from "../components/inputSeach"
import LastReleases from "../components/lastReleases"
import JsonBooks from "../json/Books.json"
import SearchedCategories from "../components/searchedCategories"

export default function Logged() {
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
