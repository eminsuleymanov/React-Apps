import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import UsersContextProvider from "./context/usersContext.jsx";
import ProductsContextProvider from "./context/productsContext.jsx";
import CategoryContextProvider from "./context/categoriesContext.jsx";

const routes = createBrowserRouter(ROUTES);
function App() {
  return (
    <>
      <AuthContextProvider>
        <UsersContextProvider>
          <ProductsContextProvider>
            <CategoryContextProvider>
              <RouterProvider router={routes} />
            </CategoryContextProvider>
          </ProductsContextProvider>
        </UsersContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
