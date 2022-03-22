import React, { useState } from "react";
import { Modal, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

export default function YourStrategyModal({ userInput }) {
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
        >
          <p>Amount: ${userInput.amount}</p>
          <p>Frequency: {userInput.frequency}</p>
          <p>Type: {userInput.type}</p>
          <p>Description: {userInput.description}</p>
        </Card>
      </Modal>
    </>
  );
}
