import AddProduct from "../pages/AddProduct/AddProduct";
import Basket from "../pages/Basket/Basket";
import Home from "../pages/Home/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/add-product",
                element: <AddProduct />
            }

        ]
    }
]