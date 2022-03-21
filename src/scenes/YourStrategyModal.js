import React, { useState } from "react";
import { Modal, Button, Card } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export default function YourStrategyModal({ uid, setUid, userInput }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/login");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Strategy
      </Button>
      <Modal
        title="Your strategy:"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Save Strategy"
        onCancel={handleCancel}
        cancelText="Edit"
      >
        <Card
          title={userInput.asset}
          style={{ width: "100%" }}
          // extra={
          //   <Button
          //     type="secondary"
          //     // icon={<PoweroffOutlined />}
          //     // loading={loadings[2]}
          //     // onClick={() => this.enterLoading(2)}
          //   />
          // }
        >
          <p>Amount: ${userInput.amount}</p>
          <p>Frequency: {userInput.frequency}</p>
          <p>Type: {userInput.type}</p>
          <p>Description: {userInput.description}</p>
          {/* <Button>Edit</Button> */}
        </Card>
      </Modal>
    </>
  );
}
