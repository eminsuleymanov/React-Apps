import Proptypes from "prop-types";
const Login = ({setlog}) => {
  return (
    <>
    <button onClick={(e) =>{
      e.preventDefault();
      setlog(true);
    }} className='btn btn-primary my-4'>Login</button>
    <p className='text-danger'>You should first log in to see the products</p>
    </>
  )
}
Login.propTypes = {

  setlog: Proptypes.func,
  
}
export default Login