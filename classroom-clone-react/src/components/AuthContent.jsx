import Register from './Register/Register'
import Login from './Login/Login'

const AuthContent = ({id}) => {
  return (
    <>{id=="1"?<Register/> : <Login/>}</>
  )
}

export default AuthContent