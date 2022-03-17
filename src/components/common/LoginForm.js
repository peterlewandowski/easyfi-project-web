import React, { useState, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { SignupForm } from "./SignupForm";
import { UserContext } from "../../App";

const firebaseConfig = {
  apiKey: "AIzaSyCES8OSTdgJtG8PUMLl7jXg2icq-IaIObU",
  authDomain: "easyfi-project-pl.firebaseapp.com",
  projectId: "easyfi-project-pl",
  storageBucket: "easyfi-project-pl.appspot.com",
  messagingSenderId: "1069772611994",
  appId: "1:1069772611994:web:54a1a981e8ba2b9ea5da23",
};

export default function LoginForm({ type }) {
  const [email, setEmall] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("login");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const { setUser, jwt, setJwt } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        let tempJwt = null;
        response.user
          .getIdToken()
          .then((jwtToken) => {
            localStorage.setItem("jwt", jwtToken);
            setJwt(jwtToken);
            tempJwt = jwtToken;
          })
          .then(() => {
            fetch(`${process.env.REACT_APP_API_URL}/getUser`, {
              headers: { Authorization: tempJwt },
            })
              .then((apiResponse) => apiResponse.json())
              .then(setUser)
              .catch(alert);
          });
      })
      .catch((err) => alert(err.message));
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        let userObj = {
          name: response.user.displayName,
          email: response.user.email,
          uid: response.user.uid,
        };
        fetch(`${process.env.REACT_APP_API_URL}/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        })
          .then((apiResponse) => apiResponse.json())
          .then((data) => {
            response.user.getIdToken().then((jwtToken) => {
              localStorage.setItem("jwt", jwtToken);
              setJwt(jwtToken);
            });
            setUser(data);
          })
          .catch(alert);
      })
      .catch((err) => alert(err.message));
  };

  const NormalLoginForm = () => {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
  };

  return (
    <>
      {formType === "login" ? (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
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
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in!
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      ) : (
        <SignupForm />
      )}
    </>
  );
}
