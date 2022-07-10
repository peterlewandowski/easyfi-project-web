import React, { useState, useEffect, useContext } from "react";
import { Steps, Button } from "antd";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import YourStrategyModal from "../scenes/YourStrategyModal";
import "./create.css";
import { InputContext } from "../context/InputContext";

const { Step } = Steps;

export default function CreateStrategy({ currentStrategy }) {
  const { userInput, setUserInput } = useContext(InputContext);
  const [step, setStep] = useState(0);
  const [types, setTypes] = useState([]);
  const [assets, setAssets] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  const [amounts, setAmounts] = useState(0);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
      setUserInput({
        type: types,
        asset: assets,
        frequency: frequencies,
        amount: amounts,
        description: descriptions,
      });
  }, []);
  console.log(currentStrategy)

  const steps = [
    {
      title: "Choose type",
      content: (
        <Step1
          userInput={userInput}
          setUserInput={setUserInput}
          types={types}
          setTypes={setTypes}
          currentStrategy={currentStrategy}
        />
      ),
    },
    {
      title: "Choose investment",
      content: (
        <Step2
          userInput={userInput}
          setUserInput={setUserInput}
          types={types}
          assets={assets}
          setAssets={setAssets}
          currentStrategy={currentStrategy}
        />
      ),
    },
    {
      title: "Choose frequency",
      content: (
        <Step3
          userInput={userInput}
          setUserInput={setUserInput}
          frequencies={frequencies}
          setFrequencies={setFrequencies}
          currentStrategy={currentStrategy}
        />
      ),
    },
    {
      title: "How much per (day, week, month)?",
      content: (
        <Step4
          userInput={userInput}
          setUserInput={setUserInput}
          amounts={amounts}
          setAmounts={setAmounts}
          currentStrategy={currentStrategy}
        />
      ),
    },
  ];

  const next = () => {
    if (types.length !== 0) {
      setStep(step + 1);
    } else {
      alert("Choose an investment type to continue");
    }
  };

  const prev = () => {
    setStep(step - 1);
  };

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
          <YourStrategyModal userInput={userInput} currentStrategy={currentStrategy} />
        )}
      </div>
    </>
  );
}
