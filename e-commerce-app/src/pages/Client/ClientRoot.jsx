import { Outlet } from "react-router-dom"
import ClientHeader from "../../components/Client/Navbar/ClientHeader"

const ClientRoot = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default ClientRoot