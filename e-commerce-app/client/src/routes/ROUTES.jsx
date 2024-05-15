import AdminRoot from "../pages/Admin/AdminRoot";
import AddCategory from "../pages/Admin/addCategory";
import AddProduct from "../pages/Admin/addProduct";
import Categories from "../pages/Admin/categories";
import Dashboard from "../pages/Admin/dashboard";
import AdminLogin from "../pages/Admin/login";
import Messages from "../pages/Admin/messages";
import Orders from "../pages/Admin/orders";
import ProductsAdmin from "../pages/Admin/products";
import Users from "../pages/Admin/users";
import ClientRoot from "../pages/Client/ClientRoot";
import Basket from "../pages/Client/basket";
import ContactUs from "../pages/Client/contactUs";
import Home from "../pages/Client/home";
import Login from "../pages/Client/login";
import ProductDetail from "../pages/Client/productDetail/ProductDetail";
import Products from "../pages/Client/products";
import Register from "../pages/Client/register/Register";

export const ROUTES = [
    //admin root
    {
      path: "/admin",
      element: <AdminRoot />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "login",
          element: <AdminLogin />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "products",
          element: <ProductsAdmin />,
        },
        // {
        //   path: "products/:id",
        //   element: <ProductDetail />,
        // },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "add-category",
          element: <AddCategory />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
      ],
    },
    //client root
    {
      path: "/",
      element: <ClientRoot />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "basket",
          element: <Basket />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <ProductDetail />,
        },
        // {
        //   path: "users",
        //   element: <Users/>
        // }
        
      ],
    },
  ];