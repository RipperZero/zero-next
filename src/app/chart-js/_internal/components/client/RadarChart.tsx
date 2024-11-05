"use client";

import { FC, useEffect, useRef } from "react";

import { Button, Space, Typography } from "antd";

import { Chart, ChartData, RadarController, Title } from "chart.js";

import {
  CHART_COLORS,
  Config,
  months,
  namedColor,
  numbers,
  rand,
  transparentize,
} from "../../utils";

Chart.register(RadarController, Title);

const DATA_COUNT = 7;
const NUMBER_CFG: Config = { count: DATA_COUNT, min: 0, max: 100 };

const labels = months({ count: 7 });
const data: ChartData<"radar"> = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
    },
    {
      label: "Dataset 2",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
    },
  ],
};

type RadarChartProps = unknown;

const RadarChart: FC<RadarChartProps> = () => {
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
      type: "radar",
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Chart.js Radar Chart",
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
      <Typography.Title>Radar</Typography.Title>

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
            const datasetsLength = data.datasets.length;
            const dsColor = namedColor(data.datasets.length);
            const labelsLength = chart.current.data.labels?.length ?? 0;

            chart.current.data.datasets.push({
              label: `Dataset ${datasetsLength + 1}`,
              backgroundColor: transparentize(dsColor, 0.5),
              data: numbers({ count: labelsLength, min: 0, max: 100 }),
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

            const labelsLength = data.labels?.length ?? 0;

            data.labels = months({ count: labelsLength + 1 });

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

export { RadarChart };
