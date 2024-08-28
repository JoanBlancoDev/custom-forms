
import { Outlet } from "react-router-dom"
import { SideBar } from "../components/SideBar"


export const FormLayout = () => {
  return (
    <main className="main">
        <SideBar/>
        <div className="container">
            <Outlet/>
        </div>
    </main>
  )
}
