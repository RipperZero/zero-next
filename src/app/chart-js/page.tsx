"use client";

import { FC } from "react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

import {
  BarChart,
  BubbleChart,
  DoughnutChart,
  ITFix,
  LineChart,
  PGTime,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ReviewFix,
  ReviewTime,
  ScatterChart,
} from "./_internal/components/client";

const ITEMS: TabsProps["items"] = [
  {
    key: "レビュー工数",
    label: "レビュー工数",
    children: <ReviewTime />,
  },
  {
    key: "レビュー指摘",
    label: "レビュー指摘",
    children: <ReviewFix />,
  },
  {
    key: "IT指摘",
    label: "IT指摘",
    children: <ITFix />,
  },
  {
    key: "PG工数",
    label: "PG工数",
    children: <PGTime />,
  },
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
    key: "Bubble",
    label: "Bubble",
    children: <BubbleChart />,
  },
  {
    key: "Doughnut",
    label: "Doughnut",
    children: <DoughnutChart />,
  },
  {
    key: "Pie",
    label: "Pie",
    children: <PieChart />,
  },
  {
    key: "PolarArea",
    label: "PolarArea",
    children: <PolarAreaChart />,
  },
  {
    key: "Radar",
    label: "Radar",
    children: <RadarChart />,
  },
  {
    key: "Scatter",
    label: "Scatter",
    children: <ScatterChart />,
  },
];

type ChartJSProps = unknown;

const ChartJS: FC<ChartJSProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Tabs
      className="p-4!"
      tabPosition="left"
      defaultActiveKey={ITEMS[0].key}
      items={ITEMS}
    />
  );
  // #endregion render functions end
};

export default ChartJS;
