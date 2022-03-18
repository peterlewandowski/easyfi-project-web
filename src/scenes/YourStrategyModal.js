import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Modal, Button, Card } from 'antd';
// import { userContext } from .....

export default function YourStrategyModal( { userInput }) {
  // const {user} = useContext(UserContext)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate()

  // const handleSaveStrategy = (e) => {
  //   navigate('./Dashboard')
  // }

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleSaveStrategy = (e) => {
    setIsModalVisible(false);
    navigate('./Dashboard')
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
};

