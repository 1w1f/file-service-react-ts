import { Button, Checkbox, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { SetAuth } from "../common/AuthHelper";
import { useUserContext } from "../Context/UserContext";

export default function login() {


  const { userName, setUserName } = useUserContext();
  console.log(`userName${userName}`);

  const Navigate = useNavigate();

  const Login = useCallback(
    (value: { username: string; password: string; remember: boolean }) => {
      let userInfo: userInfo = {
        userName: value.username,
        passWord: value.password
      };
      if (true) {
        setUserName(value.username)
        SetAuth(userInfo);
        Navigate("/home");
      } else {
        Navigate("/404")
      }
    },
    []
  );

  return (
    <div
      style={{
        background: "#50697d",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#8ca6b3",
          borderRadius: "10%",
          padding: "0px 50px",
        }}
      >
        <div style={{ margin: "20px auto", textAlign: "center" }}>
          <span
            style={{ fontSize: "30px", fontWeight: "500", color: "#284651" }}
          >
            CloudDisk
          </span>
        </div>
        <div></div>
        <Form
          onFinish={(values) => {
            console.log(values);

            Login(values);
          }}
        >
          <Form.Item
            name="username"
            style={{ marginBottom: "10px" }}
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            style={{ marginBottom: "10px" }}
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <a href="" style={{ marginLeft: "10px" }}>
              忘了密码
            </a>
          </Form.Item>
          <Form.Item
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <br />
            <a href="">注册</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
