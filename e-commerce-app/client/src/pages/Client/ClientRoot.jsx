import { Outlet } from "react-router-dom"
import ClientHeader from "../../components/Client/Navbar/ClientHeader"
import { useEffect, useState } from "react";
import controller from "../../services/requests";
import { endpoints } from "../../services/constants";

const ClientRoot = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp);
    });
    controller.getAll(endpoints.categories).then((resp) => {
      setUsers(resp);
    });
    controller.getAll(endpoints.products).then((resp)=>{
      setProducts(resp.data.data);
    })
  },[])
  return (
    <>
    <ClientHeader/>
    <Outlet context={{products,users,setProducts,setUsers}}/>
    </>
  )
}

export default ClientRoot