import { Outlet } from "react-router-dom"
import ClientNavbar from "../../components/Client/Navbar"


const ClientLayout = () => {
  return (
    <div>
    <ClientNavbar/>
    <Outlet/>
  </div>
  )
}

export default ClientLayout