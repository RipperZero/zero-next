import { FC, PropsWithChildren } from "react";

import { TypedJS } from "../_internal/components/client";

type ReactFlowLayoutProps = unknown;

const ReactFlowLayout: FC<PropsWithChildren<ReactFlowLayoutProps>> = ({
  children,
}) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="h-screen w-screen">
      <div className="h-[10%]">
        <TypedJS
          strings={["React Flow"]}
          className="flex h-full items-center justify-center font-sans text-6xl"
        />
      </div>
      <div className="h-[90%]">{children}</div>
    </div>
  );
  // #endregion render functions end
};

export default ReactFlowLayout;
