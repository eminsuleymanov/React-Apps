import { useFormik } from 'formik';
import controller from '../../services';
import { endpoints } from '../../services/constants';
import AddFormSchema from '../../validations/add.validation';
const AddProduct = () => {
    const formik = useFormik({
        initialValues: {
          title: '',
          imgSrc: '',
          price: '',
        },
        validationSchema: AddFormSchema,
        onSubmit: values => {
          controller.post(endpoints.womenproducts,values)
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="imgSrc">Asset Link</label>
          <input
            id="imgSrc"
            name="imgSrc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.imgSrc}
          />
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">Submit</button>
        </form>
      );
}

export default AddProduct