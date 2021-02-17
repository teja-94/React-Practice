import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Link, useHistory, auth } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Dis from './Dis'
import User from './user';


class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: null,
                email: null,
                password: null,
                confirmpassword: null,
            }
        };
        this.setUser = this.setUser.bind(this);
    }
    setUser(props) {
        this.setState({
            user: {
                username: props.username,
                email: props.email,
                password: props.password,
                confirmpassword: props.confirmpassword
       
            }
        });
    }
    onFinish = values => {
      
        alert('Succuss');
        console.log('USER DATA:',values)
    };
    user = ({ username, email, password, confirmpassword }) => {
        const redirectHandler = () => {
            this.state = {
                
                username: username,
                email: email,
                password: password,
                confirmpassword: confirmpassword
              }
            
        }
    }
    getData(){
        setTimeout(() => {
          console.log('Our data is fetched');
          this.setState({
            data: 'Hello WallStreet'
          })
        }, 1000)
      }
      componentDidMount(){
        this.getData();
      }
  
         renderRedirect = () => {
            return (e) => this.props.renderRedirect(User);
        };
    
    }
        this.renderRedirect = () => {
         
        if (this.state.redirect) {
            return <Redirect to={{ pathname: '/' }} />
        }
    }
    

     return(
           
         <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
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
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
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
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
                </Form.Item>
        

                <Form.Item>
                    <button onClick={this.redirectHandler}>Submit</button>
                    {this.renderRedirect()}
           
                </Form.Item>
            </Form>
        );
  
      

export default Log;