import * as Yup from 'yup';
const MessageSchema = Yup.object().shape({
    fullName: Yup
    .required(),
    email: Yup
    .required(),
    title: Yup
    .required(),
    messsage: Yup
    .required()
    .min(10,"Message must be minimum 10 chars")
})
// fullName, email, title, message, createdAt

export default MessageSchema;