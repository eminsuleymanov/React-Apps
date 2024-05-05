import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import Teacher from '../../../classes/teacher.class';
import { endpoints } from '../../../API/constants';
import { post } from '../../../API/services/requests';
import Swal from 'sweetalert2';

const TeacherRegister = () => {
  const [teacher, setTeacher] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    major: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTeacher = new Teacher(teacher.fullName,teacher.username,teacher.email,teacher.password,teacher.major);
    setTeacher({
      fullName: '',
      username: '',
      email: '',
      password: '',
      major: ''

    });
  
    console.log(newTeacher);
  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Teacher added successfully",
      showConfirmButton: false,
      timer: 1500
    }).then(async () => {
      await post(endpoints.teachers, newTeacher);
    });
  };
  
  return (
    <>
      <Form
        name="teacherregister"
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
          <Input value={teacher.fullName} onChange={(e) => {
            setTeacher({ ...teacher, fullName: e.target.value })
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
          <Input value={teacher.username} onChange={(e) => {
            setTeacher({ ...teacher, username: e.target.value })
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
          <Input value={teacher.email} onChange={(e) => {
            setTeacher({ ...teacher, email: e.target.value })
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
          <Input.Password value={teacher.password} onChange={(e) => {
            setTeacher({ ...teacher, password: e.target.value })
          }} />
        </Form.Item>

        <Form.Item
          label="Major"
          name="major"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your major',
              whitespace: true,
              
            },
          ]}
        >
          <Input value={teacher.major} onChange={(e) => {
            setTeacher({ ...teacher, major: e.target.value })
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


export default TeacherRegister;