"use client";

import { FC, useEffect, useRef } from "react";

import { Space, Typography } from "antd";

import {
  CategoryScale,
  Chart,
  ChartData,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import {
  CHART_COLORS,
  Config,
  months,
  numbers,
} from "@/app/chart-js/_internal/utils";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Title,
  Tooltip,
);

const DATA_COUNT = 7;
const NUMBER_CFG: Config = { count: DATA_COUNT, min: -100, max: 100 };

const labels = months({ count: DATA_COUNT });
const data: ChartData<"line"> = {
  labels: labels,
  datasets: [
    {
      label: "Unfilled",
      fill: false,
      backgroundColor: CHART_COLORS.blue,
      borderColor: CHART_COLORS.blue,
      data: numbers(NUMBER_CFG),
    },
    {
      label: "Dashed",
      fill: false,
      backgroundColor: CHART_COLORS.green,
      borderColor: CHART_COLORS.green,
      borderDash: [5, 5],
      data: numbers(NUMBER_CFG),
    },
  ],
};

type ReviewTimeProps = unknown;

const ReviewTime: FC<ReviewTimeProps> = () => {
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
            text: "Chart.js Line Chart",
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
              text: "Month",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
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
      <Typography.Title>レビュー工数</Typography.Title>

      <canvas ref={canvasRef} />
    </Space>
  );
  // #endregion render functions end
};

export type { ReviewTimeProps };
export { ReviewTime };
