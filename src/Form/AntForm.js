import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link} from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Input,
  InputNumber,
  Modal,
  Button,
  Avatar,
  Icon,
  Typography
} from "antd";
import { SmileOutlined, UserOutlined } from "@ant-design/icons";
import Item from "antd/lib/list/Item";


const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  
    useResetFormOnCloseModal({
    form,
    visible
  });
    const onOk = (props) => {
        form.submit();
  };
  return (

    <Modal
      title="Fill The Details"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="userForm">
      <Form.Item
          name="username"
              label="Username"
        rules={[
          {
            required: true,
                message: 'Please input your Username!',
            },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
       
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
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
              label="Password"
            
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
              label="Confirm Password"
            
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
        
      </Form.Item>
      </Form>
    </Modal>
  );
};


const Demo = (props) => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === "userForm") {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue("users") || [];
              basicForm.setFieldsValue({
              users: [...users, values]
            });
            setVisible(false);
              alert('succuss')
              props.history.push('Home'); 
          }
        }}
      >
        <Form {...layout} name="basicForm" onFinish={onFinish}>
                  <div>
                      <h2>Registration Page</h2>
                </div> 
        
         <Form.Item shouldUpdate={(prevValues, curValues) =>
                          prevValues.users !== curValues.users}>
                              
            {({ getFieldValue }) => {
                           
              const users = getFieldValue("users") || [];
                          return users.length ? (
                              <div> {users.map((user, index) => (
                            
                        <div key={index} className="user" >
                      <p><Avatar icon={<UserOutlined />} /> </p>
                              
                     <p><strong>Name:</strong>{user.username}</p>
                     <p> <strong>Email:</strong>{user.email} </p>
                     <p> <strong>Password:</strong> {user.password}</p>
                     <p> <strong>Password:</strong>{user.confirm} </p>
                         </div>   
                  
                  ))}
                </div>) : null;
            }}
          </Form.Item>
          <Form {...tailLayout}>
            
            <Button
              htmlType="button"
              style={{
                margin: "0 8px"
              }}
              onClick={showUserModal}
            >
              Create Account
            </Button>
          </Form>
        </Form>

        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </>
  );
};



  export default withRouter(Demo)
  
  