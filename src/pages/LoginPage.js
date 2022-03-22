import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { Modal, Button, message } from 'antd';

export const LoginPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/dashboard");
      })
      .catch((error) => alert(error.message));
  };

  const warning = () => {
    message.warning('Please log in, or cancel to return to home page.', 1.5);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/")
  };

  return (
    <>
      <Modal title="To continue, please log in below:" visible={isModalVisible} onOk={warning} onCancel={handleCancel}>
      <Button type='primary' onClick={() => login()}>Sign In with Google</Button>
      </Modal>
    </>
  );
};