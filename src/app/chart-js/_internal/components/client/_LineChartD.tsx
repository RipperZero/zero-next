"use client";

import { FC, useEffect, useRef, useState } from "react";

import { Space, Typography } from "antd";

import {
  Chart,
  ChartData,
  Filler,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { CHART_COLORS } from "../../utils";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
);

const DATA_COUNT = 8;

const labels = [1, 2, 3, 4, 5, 6, 7, 8];
const data: ChartData<"line"> = {
  labels: labels,
  datasets: [
    {
      label: "每周达成",
      backgroundColor: CHART_COLORS.blue,
      borderColor: CHART_COLORS.blue,
      data: [30, 48, 58, 96, 67, 61, 52, 58],
    },
    {
      label: "目标(50公里)",
      backgroundColor: CHART_COLORS.red,
      borderColor: CHART_COLORS.red,
      data: Array.from({ length: DATA_COUNT }, () => 50),
    },
  ],
};

type _LineChartDProps = {};

const _LineChartD: FC<_LineChartDProps> = ({}) => {
  // #region hooks start
  const chart = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }

    chart.current = new Chart(canvasRef.current, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            color: "green",
            font: {
              size: 20,
            },
            text: ["目标 每周50公里", "平均 每周58.75公里"],
          },
        },
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "周数(7.25-9.20)",
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
            },
          },
        },
      },
    });

    return () => {
      chart.current?.destroy();
    };
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space className="w-[800px]" direction="vertical">
      <Typography.Title>段磊锋</Typography.Title>

      <canvas ref={canvasRef} />
    </Space>
  );
  // #endregion render functions end
};

export type { _LineChartDProps };
export { _LineChartD };
