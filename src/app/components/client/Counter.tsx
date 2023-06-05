"use client";

import { FC, PropsWithChildren, ReactNode, useState } from "react";

import { Button, Space, Typography } from "antd";

type CounterProps = {
  serverComponent?: ReactNode;
};

const Counter: FC<PropsWithChildren<CounterProps>> = ({
  serverComponent = null,
  children,
}) => {
  // #region hooks start
  const [count, setCount] = useState(0);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
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
      {serverComponent}
      {children}
    </Space>
  );
  // #endregion render functions end
};

export { Counter };
