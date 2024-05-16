import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/Admin/Navbar/AdminHeader";
import { useContext, useEffect, useState } from "react";
import controller from "../../services/requests";
import { endpoints } from "../../services/constants";
import { AuthContext } from "../../context/authContext";

const AdminRoot = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories,setCategories] = useState([])
  const {adminID} = useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp.data.data);
    });
    controller.getAll(endpoints.products).then((resp)=>{
      setProducts(resp.data.data);
    })
    controller.getAll(endpoints.categories).then((resp)=>{
      setCategories(resp.data.data)
    })
    if (adminID===null) {
      navigate('/admin/login');
    }

  },[adminID])
  return (
    <>
      <AdminHeader adminID={adminID}  />
      <Outlet context={{products,categories,users,setProducts,setUsers }}/>
    </>
  );
}

export default AdminRoot