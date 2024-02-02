"use client";

import { FC } from "react";

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

const GlobalError: FC<GlobalErrorProps> = ({ error, reset }) => {
  console.log(error);
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleTryAgainClick = () => {
    reset()
  }
  // #endregion logic functions end

  // #region render functions start
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={handleTryAgainClick}>Try again</button>
      </body>
    </html>
  );
  // #endregion render functions end
};

export default GlobalError;
