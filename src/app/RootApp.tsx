"use client";

import { FC, useState } from "react";

import { StyleProvider } from "@ant-design/cssinjs";
import { Button, Space, Typography } from "antd";
import { App } from "antd";

type RootAppProps = {};

const RootApp: FC<RootAppProps> = () => {
  // #region hooks start
  const [count, setCount] = useState(0);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <StyleProvider hashPriority="high">
      <App>
        <Space>
          <Typography.Text>{count}</Typography.Text>
          <Button
            type="primary"
            onClick={() => {
              setCount((pre) => {
                return pre + 1;
              });
            }}
          >
            Add
          </Button>
        </Space>
      </App>
    </StyleProvider>
  );
  // #endregion render functions end
};

export { RootApp };
