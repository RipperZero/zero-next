"use client";

import { FC, useEffect, useRef } from "react";

import { Button, Space } from "antd";
// import Chart from "chart.js/auto";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Colors,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

import {
  CHART_COLORS,
  months,
  numbers,
  transparentize,
} from "./_internal/utils";

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
);

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = months({ count: DATA_COUNT });
const data = {
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

type ChartJSProps = {};

const ChartJS: FC<ChartJSProps> = ({}) => {
  // #region hooks start
  const acquisitionsRef = useRef<HTMLCanvasElement | null>(null);
  const chart = useRef<Chart | null>(null);
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    if (acquisitionsRef.current === null) {
      return;
    }

    chart.current = new Chart(acquisitionsRef.current, {
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
    <Space className="w-[800px]" direction="vertical">
      <canvas ref={acquisitionsRef} />
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

export default ChartJS;
