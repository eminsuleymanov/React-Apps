import { Button, Form, Input, message, } from 'antd';
import { useState } from 'react';
import { getAll } from '../../../API/services/requests';


const StudentLogin = () => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  const handleSubmit = async () => {
    try {
      const dataStudents = await getAll('/students');

      if (dataStudents) {
        const user = dataStudents.data.find(student => student.username == login.username && student.password == login.password);

        if (user) {

          message.success('Login successful');
          setLogin({
            username: '',
            password: ''
          })

        } else {
          console.log(login.username);
          console.log(login.password);
          // User not found or incorrect credentials
          message.error('Invalid username or password');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      message.error('An error occurred while logging in');
    }
  };

  return (
    <>

      <Form

        name="studentlogin"
        onSubmitCapture={handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: "100%",
        }}
       
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input value={login.username} onChange={(e) => {
            setLogin({ ...login, username: e.target.value })
          }}  />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password value={login.password} onChange={(e) => {
            setLogin({ ...login, password: e.target.value })
          }}  />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>)

}




export default StudentLogin;