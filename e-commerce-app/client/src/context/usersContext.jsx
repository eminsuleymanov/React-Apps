import { createContext, useEffect, useState } from "react";
import controller from "../services/requests";
import { endpoints } from "../services/constants";

export const UsersContext =createContext()
function UsersContextProvider({children}) {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        controller.getAll(endpoints.users).then((resp) => {
            setUsers(resp.data);
          });
    })
    
  return (
    <UsersContext.Provider value={{ users,setUsers }}>
      {children}
    </UsersContext.Provider>
  )

    
}
export default UsersContextProvider;