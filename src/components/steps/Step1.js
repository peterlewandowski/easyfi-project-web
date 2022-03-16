import React from "react";
import { Radio } from "antd";

export default function Step1({ types, setTypes }) {
  // const [value, setValue] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setTypes(e.target.value);
  };



  return (
    <>
    <h3>I would like to invest in:</h3>
        <Radio.Group onChange={onChange} value={types}>
          <Radio value={"Stock"}>Stock</Radio>
          <Radio value={"ETF"}>ETF</Radio>
          <Radio value={"Crypto"}>Crypto</Radio>
        </Radio.Group>
    </>
  );
}
