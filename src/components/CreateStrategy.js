import React, { useState, useEffect } from "react";
import { Steps, Button, message } from "antd";
import Step1 from "./steps/Step1";
import "./create.css";

const { Step } = Steps;

export default function CreateStrategy() {
  
  const [step, setStep] = useState(0);
  
  const [types, setTypes] = useState([]);
  const [assets, setAssets] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  const [amounts, setAmounts] = useState(0);
  
  
  const userInput = {
    strategy: {
      type: types,
      asset: assets,
      frequency: frequencies,
      amount: amounts,
    },
  };
  
  const steps = [
    {
      title: "I would like to invest in:",
      content: <Step1 types={types} setTypes={setTypes} assets={assets} setAssets={setAssets} />,
    },
    {
      title: "How frequently...(pick one)",
      // content: <Step2 />,
    },
    {
      title: "How much per (day, week, month)?",
      // content: <Step3 />,
    },
  ];
  
  const next = () => {
    setStep(step + 1);
  };
  
  const prev = () => {
    setStep(step - 1);
  };
  
  const handleFormSubmit = () => {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
    .then((response) => response.json())
    .then()
    .catch((err) => console.error(err));
  };
  
  useEffect(() => {
    console.log(amounts);
  }, [amounts]);
  

  return (
    <>
      <Steps current={step}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <section className="steps-content">{steps[step].content}</section>

      <div className="steps-action">
        {step < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {step === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {step > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
}
