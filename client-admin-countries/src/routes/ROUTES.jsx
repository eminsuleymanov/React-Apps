import AddCountry from "../pages/Admin/AddCountry";
import AdminLayout from "../pages/Admin/AdminLayout";
import AdminCountries from "../pages/Admin/Countries";
import CountryDetailAdmin from "../pages/Admin/CountryDetail";
import Dashboard from "../pages/Admin/Dashboard";
import About from "../pages/Client/About";
import ClientLayout from "../pages/Client/ClientLayout";
import Contact from "../pages/Client/Contact";
import Countries from "../pages/Client/Countries";
import CountryDetail from "../pages/Client/CountryDetail";
import Home from "../pages/Client/Home";

export const ROUTES = [
    //Admin Layout
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'add-country',
                element: <AddCountry/>
            },
            {
                path: 'detail/:id',
                element: <CountryDetailAdmin/>
            },
            {
                path: 'countries',
                element: <AdminCountries/>
            }
          
        ]
    },
    //User Layout
    {
        path: '',
        element: <ClientLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'countries',
                element: <Countries/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'detail/:id',
                element: <CountryDetail/>
            },
          
        ]
    },
];