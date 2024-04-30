import PropTypes from "prop-types"
import { deleteOne } from "../../API/services";

const DeleteProduct = ({id,setProducts}) => {
  return (
    <button onClick={(e)=>{
        e.preventDefault();

        setProducts((currentProducts) => {
            return currentProducts.filter((x) => x.id != id);
          })
          deleteOne("/products",id);

    }} className='btn btn-danger'>Delete</button>
  )
}
DeleteProduct.propTypes = {
    id: PropTypes.string,
    setProducts: PropTypes.func
  }
export default DeleteProduct