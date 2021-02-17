import React, { useState, useEffect, useRef } from 'react';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,Avatar, Typography,Modal
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
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
  
 
   
const RegistrationForm = ({ onCancel }) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
      });
    
      const onOk = () => {
        form.submit();
      };

    const onFinish = (values) => {

        alert('Succuss')
           
        console.log('Received values of form: ', values);
        //const data = [...values];
     
        
  };

  
  
    return (
   <>
        <Form
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue('users') || [];
            basicForm.setFieldsValue({
              users: [...users, values],
            });
            setVisible(false);
          }
        }}
      /> 
    <Form
      {...formItemLayout}
                form={form}
               
      name="userForm"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
        >
             <Form.Item
              label="User List"
              shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
            >
              {({ getFieldValue }) => {
                        const users = getFieldValue('users') || [];
                       
                      
                        return users.length ? (
                  <ul>
                                {users.map((user, index) => (
                         
                      <li key={index} className="user">
                        <Avatar icon={<UserOutlined />} />
                        {user.username} - {user.email}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography.Text className="ant-form-text" type="secondary" >
                    ( <SmileOutlined /> No user yet. )
                  </Typography.Text>
                );
              }}
            </Form.Item>  
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
      <Form.Item {...tailFormItemLayout} >
        <Button type="primary"  visible={visible} onOk={onOk}  onCancel={onCancel} htmlType="submit" >
          Register
        </Button>
      </Form.Item>
     
            </Form>
           
           
            
      </>
  );
};

export default RegistrationForm;