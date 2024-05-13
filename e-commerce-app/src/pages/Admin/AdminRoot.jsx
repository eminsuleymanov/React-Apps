import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/Navbar/AdminHeader";
import { useEffect, useState } from "react";
import controller from "../../services/requests";
import { endpoints } from "../../services/constants";

const AdminRoot = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp.data);
    });
    controller.getAll(endpoints.products).then((resp)=>{
      setProducts(resp.data);
    })
  },[])
  return (
    <>
      <AdminHeader />
      <Outlet context={{products,users,setProducts,setUsers}}/>
    </>
  );
}

export default AdminRoot