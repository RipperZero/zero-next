"use client";

import { FC, useState } from "react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { BarChart, DoughnutChart, LineChart } from "./_internal/client";

const ITEMS: TabsProps["items"] = [
  {
    key: "Bar",
    label: "Bar",
    children: <BarChart />,
  },
  {
    key: "Line",
    label: "Line",
    children: <LineChart />,
  },
  {
    key: "Doughnut",
    label: "Doughnut",
    children: <DoughnutChart />,
  },
];

type ChartJSProps = {};

const ChartJS: FC<ChartJSProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Tabs tabPosition="left" defaultActiveKey={ITEMS[0].key} items={ITEMS} />
  );
  // #endregion render functions end
};

export default ChartJS;
