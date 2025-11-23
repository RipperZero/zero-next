"use client";

import { FC, useEffect, useRef } from "react";

import { Button, Space, Typography } from "antd";

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import {
  CHART_COLORS,
  Config,
  months,
  numbers,
  transparentize,
} from "../../utils";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
);

const DATA_COUNT = 7;
const NUMBER_CFG: Config = { count: DATA_COUNT, min: -100, max: 100 };

const labels = months({ count: DATA_COUNT });
const data: ChartData<"bar"> = {
  labels: labels,
  datasets: [
    {
      label: "Fully Rounded",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: "Small Radius",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
};

type BarChartProps = unknown;

const BarChart: FC<BarChartProps> = () => {
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
      type: "bar",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart",
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
      <Typography.Title>Bar Chart Border Radius</Typography.Title>

      <canvas ref={canvasRef} />

      <Button
        type="primary"
        onClick={() => {
          if (chart.current === null) {
            return;
          }

          chart.current.data.datasets.forEach((dataset) => {
            dataset.data = numbers({
              count: DATA_COUNT,
              min: -100,
              max: 100,
            });
          });

          chart.current.update();
        }}
      >
        Randomize
      </Button>
    </Space>
  );
  // #endregion render functions end
};

export { BarChart };
