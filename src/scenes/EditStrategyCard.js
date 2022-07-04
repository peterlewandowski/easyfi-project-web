import React from "react";
import { Card } from "antd";
import Item from "antd/lib/list/Item";

export default function EditStrategyCard({ strategy }) {
  return (
    <>
      <Card title={strategy.asset} style={{ width: "100%" }}>
        <p>Amount: ${strategy.amount}</p>
        <p>Frequency: {strategy.frequency}</p>
        <p>Type: {strategy.type}</p>
        <p>Description: {strategy.description}</p>
      </Card>
    </>
  );
}
