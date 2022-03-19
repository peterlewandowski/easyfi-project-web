import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Card } from "antd";
import { userContext } from "../App";

export default function YourStrategyModal({ userInput }) {
  const { user } = useContext(userContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = userInput;
    if (userInput.amounts.length === 0) {
      navigate("/");
      return;
    }
    fetch("https://easyfi-project-pl.uc.r.appspot.com/strategies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then()
      .catch((err) => console.error(err));
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleSaveStrategy = (e) => {
    setIsModalVisible(false);
    navigate("./Dashboard");
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Strategy
      </Button>
      <Modal
        title="Your strategy:"
        visible={isModalVisible}
        onOk={handleSaveStrategy}
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
