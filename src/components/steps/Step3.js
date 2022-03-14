import React, { useState, useEffect } from "react";
import { Button, Cascader } from 'antd'

export default function Step2({ assets, setAssets }) {
    const options = [
        { value: "Daily", label: "Daily"},
        { value: "Weekly", label: "Weekly"},
        { value: "Monthly", label: "Monthly"},

      ];
      return (
        <Cascader
          placeholder="How often?"
          options={options}
          onChange={(value) => setAssets(value)}
        />
      );
}