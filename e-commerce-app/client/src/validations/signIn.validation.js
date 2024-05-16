import * as Yup from 'yup';


const SignInSchema = Yup.object().shape({
    username: Yup
    .string()
    .required('username is required')
    .min(3, 'Minimum 3 chars'),
    password: Yup
    .string()
    .required('password is required')
    .min(5, 'Minimum 5 chars')
    
})


export default SignInSchema;