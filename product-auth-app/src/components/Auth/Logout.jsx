import Proptypes from "prop-types";
import Welcome from "./Welcome";

const Logout = ({setlog}) => {
  return (
    <>
    <button onClick={(e) =>{
        e.preventDefault();
        setlog(false);
      }} className="btn btn-danger">Logout</button>
      <Welcome/>
    </>
    
  )
}
Logout.propTypes = {
    setlog: Proptypes.func,
    
  }
export default Logout