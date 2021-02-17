import React,{ useState} from 'react'
import { Form, Input } from 'antd';
import { Redirect } from "react-router";
import { Link, useHistory, auth } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Home from './Home'

import './register.css'

const Registration = (props) => {

   
  
   
    const [form] = Form.useForm();

    const onFinish = values => {
      
        alert('Succuss');
        console.log('USER DATA:',values)
  };
  
    const [state, setState] = useState(
 
        {
            redirect: false
        })
  
const redirectHandler = (props) => {
    console.log("heloo")
    setState({
       
        redirect: true,
    
        
 
    })
   const renderRedirect = () => {
       alert('error')
       return
       <h1>Hi</h1>
    };
   
}
    const renderRedirect = () => {
     
    if (state.redirect) {
        return <Redirect to={{ pathname: '/'}}/>
    }
    }
 
    return (
      
    <Form
      name="normal_login"
      className="login-form"
          initialValues={{email: "", password: "",username:"",confirmpassword:"",
        remember: true,
      }}
      onFinish={onFinish}
      >
          
          
            {/* Username */}
          <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
          > 
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          

          
            {/* Email */}
          <Form.Item
        name="email"
        
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E--mail" />
      </Form.Item>


            {/* Password */}
      <Form.Item
        name="password"
       
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
      </Form.Item>

      <Form.Item
        name="confirm"
        
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password"/>
      </Form.Item>
        

      <Form.Item>
      <button onClick={redirectHandler}>Submit</button>
              {renderRedirect() }
           
          </Form.Item>
    </Form>
  );
};

export default Registration;