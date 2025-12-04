"use client";

import { FC, useEffect, useRef } from "react";

import { Button, Space, Typography } from "antd";

import {
  Chart,
  ChartData,
  Legend,
  PieController,
  Title,
  Tooltip,
} from "chart.js";

import { CHART_COLORS, Config, numbers, rand } from "../../utils";

Chart.register(PieController, Legend, Title, Tooltip);

const DATA_COUNT = 5;
const NUMBER_CFG: Config = { count: DATA_COUNT, min: 0, max: 100 };

const data: ChartData<"pie"> = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: numbers(NUMBER_CFG).filter(
        (num) => typeof num === "number",
      ) as number[],
      backgroundColor: Object.values(CHART_COLORS),
    },
  ],
};

type PieChartProps = unknown;

const PieChart: FC<PieChartProps> = () => {
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
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Pie Chart",
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
      <Typography.Title>Pie</Typography.Title>

      <canvas ref={canvasRef} />

      <Space>
        <Button
          type="primary"
          onClick={() => {
            if (chart.current === null) {
              return;
            }

            chart.current.data.datasets.forEach((dataset) => {
              dataset.data = numbers({
                count: chart.current?.data.labels?.length,
                min: 0,
                max: 100,
              });
            });

            chart.current.update();
          }}
        >
          Randomize
        </Button>

        <Button
          type="primary"
          onClick={() => {
            if (chart.current === null) {
              return;
            }
            const datasetsLength = chart.current.data.datasets.length;
            const labelsLength = chart.current.data.labels?.length ?? 0;

            const data: any[] = [];
            const backgroundColor: string[] = [];

            for (let index = 0; index < labelsLength; index++) {
              data.push(numbers({ count: 1, min: 0, max: 100 }));

              const colorIndex = index % Object.keys(CHART_COLORS).length;
              backgroundColor.push(Object.values(CHART_COLORS)[colorIndex]);
            }

            chart.current.data.datasets.push({
              label: `Dataset ${datasetsLength + 1}`,
              backgroundColor: backgroundColor,
              data: data,
            });

            chart.current.update();
          }}
        >
          Add Dataset
        </Button>

        <Button
          type="primary"
          onClick={() => {
            if (chart.current === null) {
              return;
            }

            const data = chart.current.data;
            if (data.datasets.length === 0) {
              return;
            }

            data.labels?.push("data #" + (data.labels.length + 1));

            for (let index = 0; index < data.datasets.length; ++index) {
              data.datasets[index].data.push(rand(0, 100));
            }

            chart.current.update();
          }}
        >
          Add Data
        </Button>

        <Button
          type="primary"
          onClick={() => {
            if (chart.current === null) {
              return;
            }

            chart.current.data.datasets.pop();
            chart.current.update();
          }}
        >
          Remove Dataset
        </Button>

        <Button
          type="primary"
          onClick={() => {
            if (chart.current === null) {
              return;
            }

            chart.current.data.labels?.pop();

            chart.current.data.datasets.forEach((dataset) => {
              dataset.data.pop();
            });

            chart.current.update();
          }}
        >
          Remove Data
        </Button>
      </Space>
    </Space>
  );
  // #endregion render functions end
};

export { PieChart };
