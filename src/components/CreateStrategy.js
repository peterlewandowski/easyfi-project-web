import React from 'react'
import { Steps, Divider } from 'antd';

const { Step } = Steps;

export default function CreateStrategy() {
    return (
        <>
        <Steps progressDot current={1}>
      <Step title="Step 1" /* description="This is a description." */ />
      <Step title="Step 2" /* description="This is a description." */ />
      <Step title="Step 3" /* description="This is a description." */ />
    </Steps>
    <Divider />
    <Steps direction="vertical" size="small" current={1}>
        <Step title="I would like to invest in...(pick one)" description="This is a description." />
        <Step title="How frequently...(pick one)" description="This is a description." />
        <Step title="How much per (day, week, month)?" description="This is a description." />
      </Steps>
    </>
    );
}