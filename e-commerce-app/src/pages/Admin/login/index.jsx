import { Button, TextField } from "@mui/material";
import { useFormik } from 'formik';
import AdminSignInSchema from "../../../validations/adminSignIn.validation";
const AdminLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: AdminSignInSchema,
    onSubmit: values => {
      console.log('Form values:', values);
      alert('Submitted!'); 
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
        <TextField
          value={formik.values.username}
          name="username"
          style={{width:'25%'}}
          onChange={formik.handleChange}
          type="text"
          label="Admin username"
          variant="outlined"
        />
        {formik.errors.username && <span style={{color:'red'}}>{formik.errors.username}</span>}
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          type="password"
          label="Admin password"
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

export default AdminLogin