import React from "react";
import { Divider, Button } from "antd";
import "./hero.css";

export default function Hero() {
  const handleGetStarted = () => {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="textBlock">
        <div className="allText">
          <p className="textHeader">Investment planning.</p>
          <p className="textHeader">Made easy.</p>
      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={handleGetStarted}
        className="button"
        >
        Get Started
      </Button>
        </div>
          </div>
    </>
  );
}
