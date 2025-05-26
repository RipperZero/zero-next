"use client";

import { FC, useState } from "react";

import { Box, TextField, Typography } from "@mui/material";

import { ExampleInnerClient } from "./ExampleInnerClient";

type ExampleClientProps = unknown;

const ExampleClient: FC<ExampleClientProps> = () => {
  // #region hooks start
  const [input, setInput] = useState("input text");
  // #endregion hooks end

  // #region render functions start
  return (
    <Box>
      <div className={"text-blue-600"}>ExampleClientComponent</div>
      <Typography>{input}</Typography>
      <TextField
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <ExampleInnerClient />
    </Box>
  );
  // #endregion render functions end
};

export { ExampleClient };
