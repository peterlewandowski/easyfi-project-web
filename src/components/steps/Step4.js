import React from "react";
import { Cascader } from 'antd'

export default function Step4({ userInput, setUserInput }) {
    const options = [
        { value: 10, label: "$10"},
        { value: 20, label: "$20"},
        { value: 50, label: "$50"},
        { value: 100, label: "$100"},
        { value: 200, label: "$200"},
        { value: 500, label: "$500"},

      ];
      return (
        <Cascader
          placeholder="How much?"
          defaultValue={userInput.amount}
          options={options}
          onChange={(value) => setUserInput({...userInput, amount: value})}
        />
      );
}