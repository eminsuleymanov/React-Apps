import { Button, TextField } from "@mui/material";
import { useFormik } from 'formik';
import CategorySchema from "../../../validations/category.validation";
 
import { useContext } from "react";
import { CategoryContext } from "../../../context/categoriesContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddCategory = () => {
  const {addCategory } = useContext(CategoryContext)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',

    },
    validationSchema: CategorySchema,
    onSubmit: async (values) => {
      await addCategory(values);
      formik.resetForm();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category added",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        navigate("/admin/categories")
        
      }, 1500);
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
          value={formik.values.name}
          name="name"
          style={{ width: '25%' }}
          onChange={formik.handleChange}
          type="text"
          label="Category Name"
          variant="outlined"
        />
        {formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}

        <Button variant="contained" type="submit" color="success" style={{ width: '25%' }} >
          Add
        </Button>
      </form>
    </>
  )
}

export default AddCategory