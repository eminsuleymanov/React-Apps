import { Button, TextField } from "@mui/material";
import { useFormik } from 'formik';
import SignInSchema from "../../../validations/signIn.validation";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: values => {
      console.log('Form values:', values);
      alert('Submitted!'); 
      //foundadmin olmalidi
    },
  });
  return (
    <>
    
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "200px",
        }}
      >
        <h2 > User Login</h2>
        <TextField
          value={formik.values.username}
          name="username"
          style={{width:'25%'}}
          onChange={formik.handleChange}
          type="text"
          label="Username"
          variant="outlined"
        />
        {formik.errors.username && <span style={{color:'red'}}>{formik.errors.username}</span>}
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          style={{width:'25%'}}
        />
        {formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>}
        <Button variant="contained" type="submit" color="primary" style={{width:'25%'}} >
          Sign In
        </Button>
      </form>
      {/* <ToastContainer /> */}
    </>
  )
}

export default Login