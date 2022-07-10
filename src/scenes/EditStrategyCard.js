import React from "react";
import { Card } from "antd";
import CreateStrategy from "../components/CreateStrategy";

export default function EditStrategyCard({ currentStrategy }) {
  return (
    <>
      <Card title={currentStrategy.strategy.asset} style={{ width: "100%" }}>
          <p>Amount: ${currentStrategy.strategy.amount}</p>
          <p>Frequency: {currentStrategy.strategy.frequency}</p>
          <p>Type: {currentStrategy.strategy.type}</p>
          <p>Description: {currentStrategy.strategy.description}</p>
          <p>Created: {(new Date(currentStrategy.createdAt._seconds * 1000)).toLocaleDateString()}</p>
        </Card>
        <CreateStrategy currentStrategy={currentStrategy} />
    </>
  );
}
