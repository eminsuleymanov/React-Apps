import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/Admin/Navbar/AdminHeader";
import { useContext, useEffect, useState } from "react";
import controller from "../../services/requests";
import { endpoints } from "../../services/constants";
import { AuthContext } from "../../context/authContext";

const AdminRoot = () => {
  const [categories,setCategories] = useState([])
  const {adminID} = useContext(AuthContext)
  const navigate = useNavigate();
  // console.log(adminID)
  useEffect(() => {
 
    controller.getAll(endpoints.categories).then((resp)=>{
      setCategories(resp.data.data)
    })
    if (adminID===null) {
      navigate('/admin/login');
    }

  },[navigate,adminID])
  return (
    <>
      <AdminHeader adminID={adminID}  />
      <Outlet context={{categories}}/>
    </>
  );
}

export default AdminRoot