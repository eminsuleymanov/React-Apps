import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Login from './components/Auth/Login'
import Product  from './components/Products/Product';
import { getAll } from './API/services';
import Logout from './components/Auth/Logout';

function App() {
  const [products, setProducts] = useState([]);
  const [isLogged,setLog] = useState(false);
  async function getProducts() {
    const products = await getAll("/products")
    console.log(products);
    setProducts(products.data);
  }

  useEffect(() => {
    getProducts();

  },[])
  console.log(isLogged);
  return (
    <>
      {!isLogged &&<Login setlog={setLog}/>}
      {isLogged &&<Logout setlog={setLog}/>}
      
      {isLogged && <Product state={setProducts} data={products} />}
    </>
  )
}

export default App
