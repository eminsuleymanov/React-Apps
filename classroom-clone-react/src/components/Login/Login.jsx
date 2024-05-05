import { Tabs } from 'antd';
import StudentLogin from './StudentLogin';
import TeacherLogin from './TeacherLogin';
import styles from '../Login/login.module.css'
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Log in as Student',
    children: <StudentLogin />,
  },
  {
    key: '2',
    label: ' Log in as Teacher',
    children: <TeacherLogin />,
  },

];
const Login = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Sign In</h2>
      <Tabs size='large' className={styles.tabs} defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )

};
export default Login;