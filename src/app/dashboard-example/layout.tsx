import { Metadata } from "next";

import { FC, PropsWithChildren } from "react";

const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

type DashboardLayoutProps = unknown;

const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({
  children,
}) => {
  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div
      // @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
      className="antialiased"
    >
      {children}
    </div>
  );
  // #endregion render functions end
};

export default DashboardLayout;
export { metadata };
