import * as Yup from 'yup';
const CategorySchema = Yup.object().shape({
    name: Yup
    .required('Category name is required')
    .matches(/^[a-zA-Z]+$/),
    
})

export default CategorySchema;