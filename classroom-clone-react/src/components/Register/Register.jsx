import { Tabs } from 'antd';
import styles from '../Login/login.module.css'
import StudentRegister from './StudentRegister/StudentRegister';
import TeacherRegister from './TeacherRegister/TeacherRegister';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Register as Student',
    children: <StudentRegister/>,
  },
  {
    key: '2',
    label: 'Register as Teacher',
    children: <TeacherRegister/>,
  },
  
];
const Register = () =>{
  return (
    <>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Sign Up</h2>
    <Tabs size='large' className={styles.tabs} defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )

} ;

export default Register