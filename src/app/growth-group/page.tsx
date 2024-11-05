"use client";

import { FC } from "react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

import {
  RadarChart,
  RadarChartProps,
} from "./_internal/components/client/RadarChart";

const radarChartProps: Array<RadarChartProps> = [
  {
    title: "刘子文 SCL90",
    data: {
      before: {
        SELF_ESTEEM: 8,
        SELF_CONFIDENCE: 8,
        HAPPINESS: 7,
        SOMATIZATION: 7,
        COMPULSIVE_SYMPTOMS: 5,
        INTERPERSONAL_SENSITIVITY: 6,
        ANXIETY: 8,
      },
      after: {
        SELF_ESTEEM: 9,
        SELF_CONFIDENCE: 9,
        HAPPINESS: 9,
        SOMATIZATION: 5,
        COMPULSIVE_SYMPTOMS: 4,
        INTERPERSONAL_SENSITIVITY: 4.8,
        ANXIETY: 6,
      },
    },
  },
  {
    title: "武文博 SCL90",
    data: {
      before: {
        SELF_ESTEEM: 8,
        SELF_CONFIDENCE: 8,
        HAPPINESS: 8,
        SOMATIZATION: 8,
        COMPULSIVE_SYMPTOMS: 4,
        INTERPERSONAL_SENSITIVITY: 7,
        ANXIETY: 6,
      },
      after: {
        SELF_ESTEEM: 9,
        SELF_CONFIDENCE: 9,
        HAPPINESS: 9,
        SOMATIZATION: 6,
        COMPULSIVE_SYMPTOMS: 3,
        INTERPERSONAL_SENSITIVITY: 5,
        ANXIETY: 4,
      },
    },
  },
  {
    title: "段磊锋 SCL90",
    data: {
      before: {
        SELF_ESTEEM: 7,
        SELF_CONFIDENCE: 8,
        HAPPINESS: 8,
        SOMATIZATION: 8,
        COMPULSIVE_SYMPTOMS: 7,
        INTERPERSONAL_SENSITIVITY: 5,
        ANXIETY: 8,
      },
      after: {
        SELF_ESTEEM: 8,
        SELF_CONFIDENCE: 9,
        HAPPINESS: 9,
        SOMATIZATION: 6,
        COMPULSIVE_SYMPTOMS: 5,
        INTERPERSONAL_SENSITIVITY: 4,
        ANXIETY: 6,
      },
    },
  },
];

const ITEMS: TabsProps["items"] = radarChartProps.map((radarChartProp) => {
  return {
    key: radarChartProp.title,
    label: radarChartProp.title,
    children: <RadarChart {...radarChartProp} />,
  };
});

type GrowthGroupPageProps = {
  params: Promise<unknown>;
  searchParams: Promise<unknown>;
};

const GrowthGroupPage: FC<GrowthGroupPageProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Tabs className="!p-4" defaultActiveKey={ITEMS[0].key} items={ITEMS} />
  );
  // #endregion render functions end
};

export default GrowthGroupPage;
