import { Button, TextField } from "@mui/material";
import { useFormik } from 'formik';
import CategorySchema from "../../../validations/category.validation";
import controller from "../../../services/requests";
import { endpoints } from "../../../services/constants";
const AddCategory = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      
    },
    validationSchema: CategorySchema,
    onSubmit: async(values) => {
      // console.log('Form values:', values);
      await controller.post(endpoints.categories,values);
      
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
          style={{width:'25%'}}
          onChange={formik.handleChange}
          type="text"
          label="Category Name"
          variant="outlined"
        />
        {formik.errors.name && <span style={{color:'red'}}>{formik.errors.name}</span>}
        
        <Button variant="contained" type="submit" color="success" style={{width:'25%'}} >
          Add
        </Button>
      </form>
    </>
  )
}

export default AddCategory