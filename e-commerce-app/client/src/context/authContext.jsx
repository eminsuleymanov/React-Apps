import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const AuthContext = createContext("");

function AuthContextProvider({children}){
    const[localAdminID, setLocalAdminID] = useLocalStorage('adminID', null);
  const [adminID, setAdminID] = useState(localAdminID ? localAdminID : null);
  console.log(adminID)
    return (
        <AuthContextProvider.Provider value={{ adminID, setAdminID,setLocalAdminID }}>
          {children}
        </AuthContextProvider.Provider>
      );
}

export default AuthContextProvider

