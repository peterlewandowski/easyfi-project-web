import React, { useEffect } from "react";
import { Cascader } from "antd";

export default function Step2({
  userInput,
  setUserInput,
  frequencies,
  setFrequencies,
  currentStrategy,
}) {
  useEffect(() => {
    if (currentStrategy) {
      setFrequencies(currentStrategy.strategy.frequency);
    }
  }, [currentStrategy]);

  const options = [
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
  ];

  return (
    <Cascader
      placeholder={currentStrategy.strategy.frequency || "How often?"}
      defaultValue={currentStrategy.strategy.frequency || userInput.frequency}
      options={options}
      onChange={(value) => setUserInput({ ...userInput, frequency: value })}
    />
  );
}
