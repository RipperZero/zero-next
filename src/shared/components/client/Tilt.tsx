"use client";

import { FC, PropsWithChildren } from "react";
import ReactTilt, {
  ReactParallaxTiltProps,
  TiltProps as ReactTiltProps,
} from "react-parallax-tilt";

type TiltProps = ReactParallaxTiltProps & ReactTiltProps;

const Tilt: FC<PropsWithChildren<TiltProps>> = ({ children, ...props }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <ReactTilt {...props}>{children}</ReactTilt>;
  // #endregion render functions end
};

export { Tilt };
