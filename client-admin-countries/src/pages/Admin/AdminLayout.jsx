import { Outlet } from "react-router-dom"
import AdminNavbar from "../../components/Admin/Navbar"
import { useEffect, useState } from "react";
import { getAll } from "../../API/services/requests";
import { endpoints } from "../../API/constants";

const AdminLayout = () => {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    const countries = await getAll(endpoints.countries);
    // console.log(countries.data);
    setCountries(countries.data);
  }
  
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
    <AdminNavbar/>
    <Outlet context={{countries,setCountries}}/>
  </div>
  )
}

export default AdminLayout