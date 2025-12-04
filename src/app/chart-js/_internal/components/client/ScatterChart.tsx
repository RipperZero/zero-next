"use client";

import { FC, useEffect, useRef } from "react";

import { Button, Space, Typography } from "antd";

import {
  Chart,
  ChartData,
  Legend,
  ScatterController,
  Title,
  Tooltip,
} from "chart.js";

import {
  bubbles,
  CHART_COLORS,
  Config,
  namedColor,
  transparentize,
} from "../../utils";

Chart.register(ScatterController, Legend, Title, Tooltip);

const DATA_COUNT = 7;
const NUMBER_CFG: Config = {
  count: DATA_COUNT,
  rmin: 1,
  rmax: 1,
  min: 0,
  max: 100,
};

const data: ChartData<"scatter"> = {
  datasets: [
    {
      label: "Dataset 1",
      data: bubbles(NUMBER_CFG),
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
    },
    {
      label: "Dataset 2",
      data: bubbles(NUMBER_CFG),
      borderColor: CHART_COLORS.orange,
      backgroundColor: transparentize(CHART_COLORS.orange, 0.5),
    },
  ],
};

type ScatterChartProps = unknown;

const ScatterChart: FC<ScatterChartProps> = () => {
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
      type: "scatter",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Scatter Chart",
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
      <Typography.Title>Scatter</Typography.Title>

      <canvas ref={canvasRef} />

      <Space>
        <Button
          type="primary"
          onClick={() => {
            if (chart.current === null) {
              return;
            }

            chart.current.data.datasets.forEach((dataset) => {
              dataset.data = bubbles({
                count: DATA_COUNT,
                rmin: 1,
                rmax: 1,
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
            const chartData = chart.current.data;
            const dsColor = namedColor(chartData.datasets.length);

            const newDataset = {
              label: "Dataset " + (chartData.datasets.length + 1),
              backgroundColor: transparentize(dsColor, 0.5),
              borderColor: dsColor,
              data: bubbles({
                count: DATA_COUNT,
                rmin: 1,
                rmax: 1,
                min: 0,
                max: 100,
              }),
            };

            chartData.datasets.push(newDataset);
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

            const chartData = chart.current.data;
            if (chartData.datasets.length === 0) {
              return;
            }

            for (let index = 0; index < chartData.datasets.length; ++index) {
              chartData.datasets[index].data.push(
                bubbles({ count: 1, rmin: 1, rmax: 1, min: 0, max: 100 })[0],
              );
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

export { ScatterChart };
