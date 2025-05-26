"use client";

import { FC, useState } from "react";

import { InputAdornment, OutlinedInput } from "@mui/material";

type ExampleInnerClientProps = unknown;

const ExampleInnerClient: FC<ExampleInnerClientProps> = () => {
  // #region hooks start
  const [inputNum, setInputNum] = useState<string | undefined>(undefined);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div>
      <div className={"text-pink-400"}>ExampleInnerClientComponent</div>
      {/* <InputNumber
        prefix="￥"
        style={{ width: "100%" }}
        value={inputNum}
        onChange={(value) => {
          setInputNum(value ?? 0);
        }}
      /> */}
      <OutlinedInput
        startAdornment={<InputAdornment position="start">￥</InputAdornment>}
        value={inputNum}
        onChange={(e) => {
          setInputNum(e.target.value);
        }}
      />
    </div>
  );
  // #endregion render functions end
};

export { ExampleInnerClient };
