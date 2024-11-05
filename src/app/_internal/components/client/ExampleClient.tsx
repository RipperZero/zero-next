"use client";

import { FC, useState } from "react";

import { Input, Space, Typography } from "antd";

import { ExampleInnerClient } from "./ExampleInnerClient";

type ExampleClientProps = unknown;

const ExampleClient: FC<ExampleClientProps> = () => {
  // #region hooks start
  const [input, setInput] = useState("input text");
  // #endregion hooks end

  // #region render functions start
  return (
    <Space direction="vertical">
      <div className={"text-blue-600"}>ExampleClientComponent</div>
      <Typography.Text>{input}</Typography.Text>
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <ExampleInnerClient />
    </Space>
  );
  // #endregion render functions end
};

export { ExampleClient };
