"use client";

import Image from "next/image";

import { FC } from "react";

import { Space, Typography } from "antd";

import { SeeLink } from "./SeeLink";
import { TabPane } from "./TabPane";

const STICKY_FOOTER_LAYOUT_TAB_LABEL = "Sticky Footer布局";

type StickyFooterLayoutProps = unknown;

const StickyFooterLayout: FC<StickyFooterLayoutProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={STICKY_FOOTER_LAYOUT_TAB_LABEL}
      blocks={[
        {
          title: STICKY_FOOTER_LAYOUT_TAB_LABEL,
          content: (
            <Space direction="vertical" size="large">
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-41" />
              <Typography.Text className="!text-xl">
                所谓的Sticky
                Footer布局并不是一种新的前端技术和概念，它就是一种网页布局。
                <br />
                如果页面内容不够长时，底部栏就会固定到浏览器的底部；如果足够长时，底部栏就后跟随在内容的后面。
              </Typography.Text>
              <Image
                src="/images/stickyFooterLayout.webp"
                height={300}
                width={770}
                alt="stickyFooterLayout"
              />
            </Space>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { StickyFooterLayout, STICKY_FOOTER_LAYOUT_TAB_LABEL };
