import * as Yup from 'yup';
const AddFormSchema = Yup.object().shape({
    title: Yup.string().required().min(3),
    imgSrc: Yup.string().url().required(),
    price: Yup.number().min(0)

})
export default AddFormSchema;