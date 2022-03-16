import React from "react";
import { Cascader } from 'antd'

export default function Step2({ userInput, setUserInput }) {
    const options = [
        { value: "Daily", label: "Daily"},
        { value: "Weekly", label: "Weekly"},
        { value: "Monthly", label: "Monthly"},
      ];
    
      return (
        <Cascader
          placeholder="How often?"
          defaultValue={userInput.frequency}
          options={options}
          onChange={(value) => setUserInput({...userInput, frequency: value})}
        />
      );
}