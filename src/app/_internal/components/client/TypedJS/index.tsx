"use client";

import { FC, useEffect, useRef } from "react";

import { clsx } from "clsx";
import Typed, { TypedOptions } from "typed.js";

type TypedJSProps = {
  className?: string;
  strings?: TypedOptions["strings"];
};

const TypedJS: FC<TypedJSProps> = ({ className, strings }) => {
  // #region hooks start
  const spanRef = useRef<HTMLSpanElement | null>(null);
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: strings,
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <span ref={spanRef} className={clsx("text-3xl font-bold", className)} />
  );
  // #endregion render functions end
};

export { TypedJS };
