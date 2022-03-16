import React, { useState, useEffect } from "react";
import { Steps, Button, message } from "antd";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import YourStrategyModal from "../scenes/YourStrategyModal";
import "./create.css";

const { Step } = Steps;

export default function CreateStrategy() {
  const [step, setStep] = useState(0);

  const [types, setTypes] = useState([]);
  const [assets, setAssets] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  const [amounts, setAmounts] = useState(0);
  const [descriptions, setDescriptions] = useState([])
  const [userInput, setUserInput] = useState({
      type: types,
      asset: assets,
      frequency: frequencies,
      amount: amounts,
      description: descriptions,
  })

  const steps = [
    {
      title: "Choose type",
      content: <Step1 userInput={userInput} setUserInput={setUserInput} types={types} setTypes={setTypes} />,
    },
    {
      title: "Choose investment",
      content: <Step2 userInput={userInput} setUserInput={setUserInput} types={types} assets={assets} />,
    },
    {
      title: "Choose frequency",
      content: (
        <Step3 userInput={userInput} setUserInput={setUserInput} frequencies={frequencies} setFrequencies={setFrequencies} />
      ),
    },
    {
      title: "How much per (day, week, month)?",
      content: <Step4 userInput={userInput} setUserInput={setUserInput} amounts={amounts} setAmounts={setAmounts} />,
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
    console.log(userInput);
  }, [userInput]);

  console.log(userInput.description)

  // useEffect(() => {
  //   console.log(assets);
  // }, [assets]);

  // useEffect(() => {
  //   console.log(frequencies);
  // }, [frequencies]);

  // useEffect(() => {
  //   console.log(amounts);
  // }, [amounts]);

  return (
    <>
      <Steps current={step}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <section className="steps-content">{steps[step].content}</section>

      <div className="steps-action">
        {step > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {step < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {step === steps.length - 1 && (
          <YourStrategyModal userInput={userInput} />
        )}
      </div>
    </>
  );
}
