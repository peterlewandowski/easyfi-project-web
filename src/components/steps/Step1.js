import React, { useEffect } from "react";
import { Radio } from "antd";

export default function Step1({
  types,
  setTypes,
  userInput,
  setUserInput,
  currentStrategy,
}) {
  useEffect(() => {
    if (currentStrategy) {
      setTypes(currentStrategy.strategy.type);
    }
  }, [currentStrategy]);

  const onChange = (e) => {
    setTypes(e.target.value);
    setUserInput({ ...userInput, type: e.target.value });
  };

  return (
    <>
      <h3>I would like to invest in:</h3>
      <Radio.Group onChange={onChange} value={types} size="large">
        <Radio value={"Stock"}>Stock</Radio>
        <Radio value={"ETF"}>ETF</Radio>
        <Radio value={"Crypto"}>Crypto</Radio>
      </Radio.Group>
    </>
  );
}
