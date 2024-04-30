import ProductList from './ProductList'
import Proptypes from "prop-types";

const Product = ({ data,state }) => {
    return (
        <>
            <ProductList setProducts={state} data={data} />
        </>
    )
}
Product.propTypes = {
    data: Proptypes.array,
    state: Proptypes.func
}
export default Product;

