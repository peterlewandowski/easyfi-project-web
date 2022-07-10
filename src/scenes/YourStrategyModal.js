import React, { useState } from "react";
import { Modal, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

export default function YourStrategyModal({ userInput, currentStrategy }) {
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
          title={currentStrategy.strategy.asset || userInput.asset}
          style={{ width: "100%" }}
        >
          <p>Amount: ${currentStrategy.strategy.amount || userInput.amount}</p>
          <p>Frequency: {currentStrategy.strategy.frequency || userInput.frequency}</p>
          <p>Type: {currentStrategy.strategy.frequency || userInput.type}</p>
          <p>Description: {currentStrategy.strategy.frequency || userInput.description}</p>
        </Card>
      </Modal>
    </>
  );
}
