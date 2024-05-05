import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import Student from '../../../classes/student.class';
import { endpoints } from '../../../API/constants';
import { post } from '../../../API/services/requests';
import Swal from 'sweetalert2';

const StudentRegister = () => {
  const [student, setStudent] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = new Student(student.fullName, student.username, student.email, student.password);
    setStudent({
      fullName: '',
      username: '',
      email: '',
      password: ''
    });
  
    console.log(newUser);
  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Student added successfully",
      showConfirmButton: false,
      timer: 1500
    }).then(async () => {
      await post(endpoints.students, newUser);
    });
  };
  
  return (
    <>
      <Form
        name="studentregister"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onSubmitCapture={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="FullName"
          name="fullname"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your fullname',
              whitespace: true,
              min: 4
            },
          ]}
        >
          <Input value={student.fullName} onChange={(e) => {
            setStudent({ ...student, fullName: e.target.value })
          }} />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              whitespace: true,
              min: 3
            },
          ]}
        >
          <Input value={student.username} onChange={(e) => {
            setStudent({ ...student, username: e.target.value })
          }} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your email',
            },
            {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            },
            { whitespace: true, },
            { type: 'email', message: "Please input valid email" },

          ]}
        >
          <Input value={student.email} onChange={(e) => {
            setStudent({ ...student, email: e.target.value })
          }} />
        </Form.Item>


        <Form.Item
          label="Password"
          name="password"

          rules={[

            { required: true },
            { message: 'Please input your password!' },
            { whitespace: true },
            { min: 5 },
            ({ getValue }) => ({
              validator(_, value) {
                const passwordValidationPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
                if (!value || passwordValidationPattern.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject("Password must contain 1 uppercase and and digit");
              }
            })



          ]}
        >
          <Input.Password value={student.password} onChange={(e) => {
            setStudent({ ...student, password: e.target.value })
          }} />
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
    </>

  )
}


export default StudentRegister;