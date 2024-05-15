import { Outlet } from "react-router-dom"
import ClientHeader from "../../components/Client/Navbar/ClientHeader"
import controller from "../../services/requests";
import { useEffect, useState } from "react";
import { endpoints } from "../../services/constants";

const ClientRoot = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp.data);
    });
    controller.getAll(endpoints.products).then((resp)=>{
      setProducts(resp.data);
    })
  })
  return (
    <>
    <ClientHeader/>
    <Outlet context={{products,users,setProducts,setUsers}}/>
    </>
  )
}

export default ClientRoot