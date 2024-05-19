import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/Admin/Navbar/AdminHeader";
import { useContext, useEffect} from "react";
import { AuthContext } from "../../context/authContext";

const AdminRoot = () => {
  const {adminID} = useContext(AuthContext)
  const navigate = useNavigate();
  // console.log(adminID)
  useEffect(() => {
 
   
    if (adminID===null) {
      navigate('/admin/login');
    }

  },[navigate,adminID])
  return (
    <>
      <AdminHeader adminID={adminID}  />
      <Outlet />
    </>
  );
}

export default AdminRoot