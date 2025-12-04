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
      data: [0.91, 0.84, 0.72, 0.66],
      datalabels: {
        align: "bottom",
        color: CHART_COLORS.blue,
      },
    },
    {
      label: "标准(0.7)",
      backgroundColor: CHART_COLORS.green,
      borderColor: CHART_COLORS.green,
      borderDash: [5, 5],
      data: [0.7, 0.7, 0.7, 0.7],
      datalabels: {
        display: false,
        align: "bottom",
        color: CHART_COLORS.green,
      },
    },
  ],
};

type ITFixProps = unknown;

const ITFix: FC<ITFixProps> = () => {
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
            formatter: (value: number) => value.toFixed(2),
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
            min: 0,
            max: 1.2,
            ticks: {
              stepSize: 0.2,
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
      <Typography.Title>IT指摘</Typography.Title>

      <div className="text-center font-bold">
        <Typography className="text-[20px]">目标 指摘率下降20%</Typography>
        <Typography className="text-[20px] text-green-500">达成</Typography>
      </div>

      <canvas ref={canvasRef} />
    </Space>
  );
  // #endregion render functions end
};

export type { ITFixProps };
export { ITFix };
