import { Outlet } from "react-router-dom"
import SideBar from "../components/sideBar"
import SearchedCategories from "../components/searchedCategories"

export default function PageUpdateData() {
  return (
    <>
      <div className="flex justify-center items-center bg-blue-900 p-5 text-white">
        <h1 className="font-semibold text-2xl">Meus pedidos</h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        <SideBar />

        <Outlet />
      </div>
      <SearchedCategories />
    </>
  )
}
