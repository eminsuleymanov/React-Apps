import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import UsersContextProvider from "./context/usersContext.jsx";
import ProductsContextProvider from "./context/productsContext.jsx";

const routes = createBrowserRouter(ROUTES);
function App() {
  return (
    <>
      <AuthContextProvider>
        <UsersContextProvider>
          <ProductsContextProvider>
          <RouterProvider router={routes} />

          </ProductsContextProvider>
        </UsersContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
