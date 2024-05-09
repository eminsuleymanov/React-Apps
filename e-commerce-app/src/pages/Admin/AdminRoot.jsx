import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/Navbar/AdminHeader";

const AdminRoot = () => {
    return (
        <>
          <AdminHeader />
          <Outlet/>
        </>
      );
}

export default AdminRoot