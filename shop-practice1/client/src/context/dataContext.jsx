/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import controller from "../services";
import { endpoints } from "../services/constants";

export const DataContext = createContext();
function DataContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        controller.getAll(endpoints.womenproducts).then((res) => {
            setProducts(res.data.data)
        })
    }, [])
    const addProduct = async (values) => {
        try {
            const response = controller.post(endpoints.womenproducts, values);
            setProducts((current) => [...current, response.data]);
            alert("added")
        } catch (error) {
            alert(error)
        }
    }
    return (
        <DataContext.Provider value={{ products, setProducts, addProduct }}>
            {children}
        </DataContext.Provider>
    )

}
export default DataContextProvider;