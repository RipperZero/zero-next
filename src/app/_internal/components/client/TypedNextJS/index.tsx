"use client";

import { FC, useEffect, useRef } from "react";

import Typed from "typed.js";

import "./index.css";

type TypedNextJSProps = {};

const TypedNextJS: FC<TypedNextJSProps> = ({}) => {
  // #region hooks start
  const spanRef = useRef<HTMLSpanElement | null>(null);
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: ["NEXT.JS", "The React Framework for the Web"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <span ref={spanRef} className="typed-cursor text-3xl font-bold" />;
  // #endregion render functions end
};

export { TypedNextJS };
