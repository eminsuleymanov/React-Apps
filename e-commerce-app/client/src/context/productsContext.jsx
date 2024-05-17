import { createContext, useEffect, useState } from "react";
import controller from "../services/requests";
import { endpoints } from "../services/constants";

export const ProductsContext = createContext();
function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.products).then((resp) => {
      setProducts(resp.data.data);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsContextProvider;
