import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    username: Yup.string()
    .required('username is required')
    .min(3, 'Minimum 3 chars'),
    password: Yup
    .required('password is required')
    .min(5, 'Minimum 5 chars')
    .matches(/^(?=[a-zA-Z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/, 'Password must contain 1 uppercase, 1 lowercase, 1 number'),
    confirmPassword: Yup
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
    profileImg: Yup
    .string()
    .url('invalid url')
    .required('Url is required'),
    balance: Yup
    .positive()
    .required('Balance is required')
    .number()
})
// username, password, createdAt, email, profileImg, balance, role (default 'client'), basketItems (default boş array)
// username min 3 simvol və required, password min 5 simvol (1 uppercase, 1 lowercase, 1 number), 
// confirmPassword input match olmalıdır password-la, email format düzgün olmalıdır və required. profileImg url olmalıdır və required. balance (positive, integer, required)
export default UserSchema;