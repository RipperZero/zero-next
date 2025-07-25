"use client";

import { FC, PropsWithChildren, ReactNode, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    <Box>
      <Typography>{count}</Typography>
      <Button
        variant="contained"
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
    </Box>
  );
  // #endregion render functions end
};

export { Counter };
