"use client";

import { FC } from "react";

import { ConfigProvider, Layout, Tabs, TabsProps } from "antd";
import { createStyles } from "antd-style";

import {
  EQUAL_LAYOUT_TAB_LABEL,
  EqualLayout,
  FULL_SCREEN_LAYOUT_TAB_LABEL,
  FullScreenLayout,
  HORIZONTAL_CENTER_TAB_LABEL,
  HORIZONTAL_VERTICAL_CENTER_TAB_LABEL,
  HorizontalCenter,
  HorizontalVerticalCenter,
  STICKY_FOOTER_LAYOUT_TAB_LABEL,
  StickyFooterLayout,
  THREE_COLUMN_LAYOUT_TAB_LABEL,
  ThreeColumnLayout,
  TWO_COLUMN_LAYOUT_TAB_LABEL,
  TwoColumnLayout,
  VERTICAL_CENTER_TAB_LABEL,
  VerticalCenter,
} from "./_internal/components/client";

const { Header, Content } = Layout;

const TabsItems: TabsProps["items"] = [
  {
    key: "HorizontalCenter",
    label: HORIZONTAL_CENTER_TAB_LABEL,
    children: <HorizontalCenter />,
  },
  {
    key: "VerticalCenter",
    label: VERTICAL_CENTER_TAB_LABEL,
    children: <VerticalCenter />,
  },
  {
    key: "HorizontalVerticalCenter",
    label: HORIZONTAL_VERTICAL_CENTER_TAB_LABEL,
    children: <HorizontalVerticalCenter />,
  },
  {
    key: "TwoColumnLayout",
    label: TWO_COLUMN_LAYOUT_TAB_LABEL,
    children: <TwoColumnLayout />,
  },
  {
    key: "ThreeColumnLayout",
    label: THREE_COLUMN_LAYOUT_TAB_LABEL,
    children: <ThreeColumnLayout />,
  },
  {
    key: "EqualLayout",
    label: EQUAL_LAYOUT_TAB_LABEL,
    children: <EqualLayout />,
  },
  {
    key: "StickyFooterLayout",
    label: `_${STICKY_FOOTER_LAYOUT_TAB_LABEL}`,
    children: <StickyFooterLayout />,
  },
  {
    key: "FullScreenLayout",
    label: FULL_SCREEN_LAYOUT_TAB_LABEL,
    children: <FullScreenLayout />,
  },
];

const useStyles = createStyles({
  tabs: {
    "& .ant-tabs-content": {
      height: "100%",
    },
    "& .ant-tabs-tabpane": {
      height: "100%",
      padding: "0 !important",
    },
  },
});

type CssLayoutProps = unknown;

const CssLayout: FC<CssLayoutProps> = () => {
  // #region hooks start
  const { styles, cx } = useStyles();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "white",
          },
        },
      }}
      // tabs={{ className: styles.tabs }}
    >
      <Layout className="h-screen">
        <Header
          className={"flex items-center justify-center text-3xl! font-bold"}
        >
          Common Front Layout
        </Header>
        <Content className="grow p-3">
          <Tabs
            // defaultActiveKey={TabsItems[TabsItems.length - 1].key}
            className={cx("h-full rounded-lg bg-white", styles.tabs)}
            tabPlacement="start"
            items={TabsItems}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
  // #endregion render functions end
};

export default CssLayout;
