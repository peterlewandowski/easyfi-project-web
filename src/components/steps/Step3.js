import React from "react";
import { Cascader } from 'antd'

export default function Step2({ frequencies, setFrequencies }) {
    const options = [
        { value: "Daily", label: "Daily"},
        { value: "Weekly", label: "Weekly"},
        { value: "Monthly", label: "Monthly"},

      ];
      return (
        <Cascader
          placeholder="How often?"
          options={options}
          onChange={(value) => setFrequencies(value)}
        />
      );
}