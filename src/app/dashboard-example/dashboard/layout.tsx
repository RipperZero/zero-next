import { FC, PropsWithChildren } from "react";

import { SideNav } from "../ui/dashboard";

type DashboardLayoutProps = unknown;

const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({
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
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
  // #endregion render functions end
};

export default DashboardLayout;
