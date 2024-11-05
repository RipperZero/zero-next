import { FC } from "react";

import { GlobeAltIcon } from "@heroicons/react/24/outline";

type AcmeLogoProps = unknown;

const AcmeLogo: FC<AcmeLogoProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
  // #endregion render functions end
};

export { AcmeLogo };
