import React from "react";
import { Form, Input, Button, Typography, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const Feedback = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      style={{ width: "35%" }}
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
        Enter Your Feedback
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
          // prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          size="large"
          // prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="comment"
        rules={[
          {
            required: true,
            message: "Please enter your Comment!",
          },
        ]}
      >
        <TextArea placeholder="Comment" />
      </Form.Item>
      <Form.Item
        style={{
          float: "left",
        }}
        name="upload"
        label="If Your comment is long upload a pdf file"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <br style={{ clear: "both" }} />
      <Form.Item>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            style={{
              margin: 0,
              padding: 0,
            }}
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Send
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
