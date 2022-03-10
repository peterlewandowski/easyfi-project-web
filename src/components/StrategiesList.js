import React, { useState, useEffect } from "react";
import { List, Card, Button } from "antd";

export default function StrategiesList() {
  const [strategies, setStrategies] = useState();

  useEffect(() => {
    fetch("https://easyfi-project-pl.uc.r.appspot.com/strategies")
      .then((response) => response.json())
      .then((data) => {
        setStrategies(data);
      })
      .catch(alert);
  }, []);

  return (
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
      dataSource={strategies}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.strategy.asset} style={{ width: "400px" }}>
            <p>Amount: {item.strategy.amount}</p>
            <p>Frequency: {item.strategy.frequency}</p>
            <p>Type: {item.strategy.type}</p>
            <Button>Edit</Button>
          </Card>
        </List.Item>
      )}
    />
  );
}
