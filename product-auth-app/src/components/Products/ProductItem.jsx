import Proptypes from "prop-types";
import DeleteProduct from "./DeleteProduct";

const ProductItem = ({ element,setproducts }) => {
    return (
        <>
            <tr className={element.isDiscounted ===true ? 'table-success' : ''}>
                <td >{element.name}</td>
                <td>{element.price}</td>
                <td> <DeleteProduct id={element.id} setProducts={setproducts}/> </td>
                <td><button className='btn btn-warning'>Update</button></td>
            </tr>
        </>
    )
}
ProductItem.propTypes = {
    element: Proptypes.shape({
        id: Proptypes.string,
        name: Proptypes.string,
        price: Proptypes.number,
        isDiscounted: Proptypes.bool
    }),
    setproducts: Proptypes.func
}
// "id": 1,
// "name": "Puma",
// "price":100,
// "isDiscounted":false
export default ProductItem