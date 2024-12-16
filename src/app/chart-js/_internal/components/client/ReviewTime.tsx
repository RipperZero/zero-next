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
      label: "工数(单位：H/KS)",
      fill: false,
      backgroundColor: CHART_COLORS.blue,
      borderColor: CHART_COLORS.blue,
      data: [5.9, 6.1, 5.2, 5.0],
      datalabels: {
        align: "top",
        color: CHART_COLORS.blue,
      },
    },
    {
      label: "指摘(单位：件/KS)",
      fill: false,
      backgroundColor: CHART_COLORS.orange,
      borderColor: CHART_COLORS.orange,
      // borderDash: [5, 5],
      data: [1.8, 1.9, 2.0, 2.0],
      datalabels: {
        // display: false,
        align: "top",
        color: CHART_COLORS.orange,
      },
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
          // title: {
          //   display: true,
          //   text: "Chart.js Line Chart",
          // },
          legend: {
            labels: {
              font: {
                size: 18,
              },
            },
          },
          datalabels: {
            font: {
              size: 24,
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
            // title: {
            //   display: true,

            //   text: "单位：H/KS",
            //   font: {
            //     weight: "bold",
            //     size: 16,
            //   },
            // },
            ticks: {
              font: {
                size: 16,
              },
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            min: 0, // 设置最小值为 0
            max: 8, // 设置最大值为 8
            ticks: {
              stepSize: 0.5, // 设置每个刻度的步长为 1
              font: {
                size: 16,
              },
            },
            // weight: 20,
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
      <Typography.Title>Reivew</Typography.Title>

      <div className="text-center font-bold">
        <Typography className="text-[20px]">目标 工数下降10%</Typography>
        <Typography className="text-[20px] text-green-500">达成</Typography>
      </div>

      <canvas ref={canvasRef} />
    </Space>
  );
  // #endregion render functions end
};

export type { ReviewTimeProps };
export { ReviewTime };
