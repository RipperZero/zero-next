"use client";

import { FC, useEffect, useRef } from "react";

import { Button, Space, Typography } from "antd";

import {
  Chart,
  ChartData,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";

import {
  CHART_COLORS,
  Config,
  numbers,
  rand,
  transparentize,
} from "../../utils";

Chart.register(PolarAreaController, RadialLinearScale, Legend, Title, Tooltip);

const DATA_COUNT = 5;
const NUMBER_CFG: Config = { count: DATA_COUNT, min: 0, max: 100 };

const labels = ["Red", "Orange", "Yellow", "Green", "Blue"];
const data: ChartData<"polarArea"> = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: numbers(NUMBER_CFG).filter(
        (num) => typeof num === "number",
      ) as number[],
      backgroundColor: [
        transparentize(CHART_COLORS.red, 0.5),
        transparentize(CHART_COLORS.orange, 0.5),
        transparentize(CHART_COLORS.yellow, 0.5),
        transparentize(CHART_COLORS.green, 0.5),
        transparentize(CHART_COLORS.blue, 0.5),
      ],
    },
  ],
};

type PolarAreaChartProps = unknown;

const PolarAreaChart: FC<PolarAreaChartProps> = () => {
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
      type: "polarArea",
      data: data,
      options: {
        responsive: true,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 18,
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Polar Area Chart With Centered Point Labels",
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
      <Typography.Title>Polar area centered point labels</Typography.Title>

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

export { PolarAreaChart };
