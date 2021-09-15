import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title } = Typography;

export const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      style={{ width: "50%" }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Title
        style={{
          margin: 0,
          fontWeight: "800",
          fontSize: "3.5em",
          color: "#2C8CF4",
          marginBottom: 20,
          textAlign: "left",
        }}
      >
        Login
      </Title>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          or<Link to="/register">register now!</Link>
        </div>
      </Form.Item>
    </Form>
  );
};
