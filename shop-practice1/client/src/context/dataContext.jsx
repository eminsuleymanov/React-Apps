import { createContext } from "react";

export const DataContext= createContext();
function DataContextProvider({children}) {
    return(
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )
    
}
export default DataContextProvider;