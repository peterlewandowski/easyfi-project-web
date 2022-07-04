import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { List, Card, Button, Modal } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import EditStrategyCard from "../scenes/EditStrategyCard";

export default function StrategiesList({ userInput, setUserInput }) {
  const [userStrategies, setUserStrategies] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (
      userInput &&
      Object.keys(userInput).length > 0 &&
      userInput.type.length
    ) {
      userInput.userId = user.uid;
      fetch(`${process.env.REACT_APP_API_URL}/strategies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      })
        .then(() => {
          const uid = user.uid;
          fetch(`${process.env.REACT_APP_API_URL}/strategies/${uid}`)
            .then((response) => response.json())
            .then((data) => {
              setUserStrategies(data);
              setUserInput(null);
            });
        })
        .catch((err) => console.error(err));
    } else {
      if (user.uid) {
        const uid = user.uid;
        fetch(`${process.env.REACT_APP_API_URL}/strategies/${uid}`)
          .then((response) => response.json())
          .then((data) => {
            setUserStrategies(data);
          })
          .catch(alert);
      }
    }
  }, [userInput, user.uid]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={userStrategies}
        renderItem={(item) => (
          <List.Item key={item.created} >
            <Card
              title={item.strategy.asset}
              style={{ width: "100%" }}
              extra={<Button type="secondary" icon={<PoweroffOutlined />} />}
            >
              <p>Amount: ${item.strategy.amount}</p>
              <p>Frequency: {item.strategy.frequency}</p>
              <p>Type: {item.strategy.type}</p>
              <p>Description: {item.strategy.description}</p>
              <p>Created: {item.created}</p>
              <p>ID: {item.id}</p>
              <Button onClick={showModal}>Edit</Button> {/* button needs to fetch the data for the one strategy that needs to be updated */}
              <Modal
                title="Edit your strategy"
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleOk}
              >
                <Card title={item.strategy.asset} style={{ width: "100%" }}>
                  <p>Amount: ${item.strategy.amount}</p>
                  <p>Frequency: {item.strategy.frequency}</p>
                  <p>Type: {item.strategy.type}</p>
                  <p>Description: {item.strategy.description}</p>
                </Card>
              </Modal>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}
