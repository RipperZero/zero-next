"use client";

import { FC, PropsWithChildren } from "react";

import { Typography } from "antd";

import { UserOutlined } from "@ant-design/icons";

type indexLayoutProps = unknown;

const IndexLayout: FC<PropsWithChildren<indexLayoutProps>> = ({ children }) => {
  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-20 justify-between border-b border-solid border-b-[#aaaaaa] px-5 leading-[80px]">
        <Typography.Title className="m-0">会议室预定系统</Typography.Title>
        <UserOutlined className="mt-5 text-[40px]" />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
  // #endregion render functions end
};

export default IndexLayout;
