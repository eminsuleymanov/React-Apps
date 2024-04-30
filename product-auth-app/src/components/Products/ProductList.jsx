import ProductItem from "./ProductItem";
import Proptypes from "prop-types";

const ProductList = ({ data,setProducts }) => {
    return (
        <>
            <div className="container py-5">
                <table className="table table-striped table-bordered">
                    <thead className='table-dark'>
                        <tr>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((product, idx) => {
                                return <ProductItem setproducts={setProducts} key={idx} element={product} />

                            })}


                    </tbody>
                </table>
            </div>

        </>
    )
}
ProductList.propTypes = {
    data: Proptypes.array,
    setProducts: Proptypes.func
}
export default ProductList

