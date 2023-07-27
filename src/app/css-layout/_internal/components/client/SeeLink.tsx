"use client";

import { FC } from "react";

type SeeLinkProps = {
  openUrl: string;
};

const SeeLink: FC<SeeLinkProps> = ({ openUrl }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <h3
      className="cursor-pointer select-none text-2xl text-blue-600 hover:!underline"
      onClick={() => {
        window.open(openUrl);
      }}
    >
      {`@see ${openUrl}`}
    </h3>
  );
  // #endregion render functions end
};

export { SeeLink };
