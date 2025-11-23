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
import ChartDataLabels from "chartjs-plugin-datalabels";

import { CHART_COLORS } from "@/app/chart-js/_internal/utils";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Title,
  Tooltip,
  ChartDataLabels,
);

// const DATA_COUNT = 3;

const labels = ["9月", "10月", "11月", "12月"];
const data: ChartData<"line"> = {
  labels: labels,
  datasets: [
    {
      label: "平均",
      fill: false,
      backgroundColor: CHART_COLORS.blue,
      borderColor: CHART_COLORS.blue,
      data: [1.8, 2.0, 1.9, 1.8],
      datalabels: {
        align: "bottom",
        color: CHART_COLORS.blue,
      },
    },
    {
      label: "标准(2.7)",
      backgroundColor: CHART_COLORS.green,
      borderColor: CHART_COLORS.green,
      borderDash: [5, 5],
      data: [2.7, 2.7, 2.7, 2.7],
      datalabels: {
        display: false,
        align: "bottom",
        color: CHART_COLORS.green,
      },
    },
  ],
};

type ReviewFixProps = unknown;

const ReviewFix: FC<ReviewFixProps> = () => {
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
          // title: {
          //   display: true,
          //   text: "Chart.js Line Chart",
          // },
          datalabels: {
            font: {
              size: 18,
              weight: "bold",
            },
            formatter: (value: number) => value.toFixed(1), // 格式化显示的值
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

              text: "单位：件/KS",
              font: {
                weight: "bold",
                size: 16,
              },
            },
          },
          y: {
            display: true,
            min: 0, // 设置最小值为 0
            max: 5, // 设置最大值为 8
            ticks: {
              stepSize: 0.5, // 设置每个刻度的步长为 1
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
    <Space className="w-[800px]" orientation="vertical">
      <Typography.Title>レビュー指摘</Typography.Title>

      <div className="text-center font-bold">
        <Typography className="text-[20px]">目标 指摘率上升20%</Typography>
        <Typography className="text-[20px] text-orange-500">待改进</Typography>
      </div>

      <canvas ref={canvasRef} />
    </Space>
  );
  // #endregion render functions end
};

export type { ReviewFixProps };
export { ReviewFix };
