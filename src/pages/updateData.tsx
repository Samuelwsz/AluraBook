import SearchedCategories from "../components/searchedCategories"
import SideBar from "../components/sideBar"

export default function UpdateData() {
  return (
    <>
      <div className="flex justify-center items-center bg-blue-900 p-5 text-white">
        <h1 className="font-semibold text-2xl">Meus pedidos</h1>
      </div>
      <div className="flex">
        <SideBar />
        <div className="flex-1 p-4">a</div>
      </div>
      <SearchedCategories />
    </>
  )
}
