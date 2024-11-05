import { FC } from "react";

import { ExampleClient } from "./client";

type ExampleServerProps = unknown;

const ExampleServer: FC<ExampleServerProps> = () => {
  // #region render functions start
  return (
    <div className="flex flex-col">
      <div>ExampleServerComponent</div>
      <div>ExampleServerComponent</div>
      <ExampleClient />
      <div>ExampleServerComponent</div>
    </div>
  );
  // #endregion render functions end
};

export { ExampleServer };
