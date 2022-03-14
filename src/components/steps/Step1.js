import { useState } from "react";
import { Radio } from "antd";

export default function Step1({ types, setType, assets, setAssets }) {
  const [value, setValue] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };



  return (
    <>
    <p>I would like to invest in:</p>
      <p>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Stock</Radio>
          <Radio value={2}>ETF</Radio>
          <Radio value={3}>Crypto</Radio>
        </Radio.Group>
      </p>
    </>
  );
}
