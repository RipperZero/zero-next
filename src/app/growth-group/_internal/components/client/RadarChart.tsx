"use client";

import { FC, useEffect, useRef } from "react";

import { Space, Typography } from "antd";
import {
  Chart,
  ChartData,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { CHART_COLORS, transparentize } from "@/app/chart-js/_internal/utils";

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  Filler,
);

type Labels = keyof typeof LABELS;
type RadarData = Record<Labels, number>;

const LABELS = {
  SELF_ESTEEM: "自尊",
  SELF_CONFIDENCE: "自信",
  HAPPINESS: "幸福感",
  SOMATIZATION: "躯体化",
  COMPULSIVE_SYMPTOMS: "强迫症状",
  INTERPERSONAL_SENSITIVITY: "人际关系敏感",
  ANXIETY: "焦虑",
} as const;

const labels = [
  LABELS.SELF_ESTEEM,
  LABELS.SELF_CONFIDENCE,
  LABELS.HAPPINESS,
  LABELS.SOMATIZATION,
  LABELS.COMPULSIVE_SYMPTOMS,
  LABELS.INTERPERSONAL_SENSITIVITY,
  LABELS.ANXIETY,
];

const createData: (data: RadarChartProps["data"]) => ChartData<"radar"> = (
  data,
) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "学习前",
        data: Object.values(data.before),
        borderColor: CHART_COLORS.red,
        backgroundColor: transparentize(CHART_COLORS.red, 0.5),
      },
      {
        label: "学习后",
        data: Object.values(data.after),
        borderColor: CHART_COLORS.blue,
        fill: true,
        backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
      },
    ],
  };
};

type RadarChartProps = {
  title: string;
  data: {
    before: RadarData;
    after: RadarData;
  };
};

const RadarChart: FC<RadarChartProps> = ({ title, data }) => {
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
      data: createData(data),
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "SCL90",
            font: {
              size: 16,
            },
          },
          legend: {
            labels: {
              font: {
                size: 16,
              },
            },
          },
        },
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
              stepSize: 1,
              font: {
                size: 16,
              },
            },
            pointLabels: {
              color: (ctx) => {
                const { label } = ctx;

                // positive
                if (
                  label === LABELS.SELF_ESTEEM ||
                  label === LABELS.SELF_CONFIDENCE ||
                  label === LABELS.HAPPINESS
                ) {
                  return CHART_COLORS.green;
                }

                // negative
                return CHART_COLORS.purple;
              },
              font: {
                size: 16,
              },
            },
          },
        },
      },
    });

    return () => {
      chart.current?.destroy();
    };
  }, [data]);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space className="w-[800px]" direction="vertical">
      <Typography.Title className="text-center">{title}</Typography.Title>

      <canvas ref={canvasRef} />
    </Space>
  );
  // #endregion render functions end
};

export type { RadarChartProps };
export { RadarChart };
