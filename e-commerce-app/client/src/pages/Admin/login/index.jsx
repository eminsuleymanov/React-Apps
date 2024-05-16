import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import SignInSchema from "../../../validations/signIn.validation";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
const AdminLogin = () => {

  const authDatas = useOutletContext();
  const {setAdminID,setLocalAdminID} = useContext(AuthContext)
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      const foundAdmin = authDatas.users.find(
        (x) =>
          x.username == values.username &&
          x.password == values.password &&
          x.role == "admin"
      );
      if (foundAdmin) {
      console.log("found admin",foundAdmin);

        setAdminID(foundAdmin._id);
        setLocalAdminID(foundAdmin._id);
        toast.success('Successfully toasted!')
        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      } else {
      console.log('auth data',authDatas)

        toast.error("username or password is incorrect!");
        values.username = "";
        values.password = "";
      }
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
          style={{ width: "25%" }}
          onChange={formik.handleChange}
          type="text"
          label="Admin username"
          variant="outlined"
        />
        {formik.errors.username && (
          <span style={{ color: "red" }}>{formik.errors.username}</span>
        )}
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          type="password"
          label="Admin password"
          variant="outlined"
          style={{ width: "25%" }}
        />
        {formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{ width: "25%" }}
        >
          Sign In
        </Button>
      </form>
      {/* <ToastContainer /> */}
    </>
  );
};

export default AdminLogin;
