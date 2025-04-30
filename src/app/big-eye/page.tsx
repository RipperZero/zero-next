"use client";

import { FC, MouseEvent, useEffect, useRef, useState } from "react";

import * as echarts from "echarts/core";
import { useMemoizedFn } from "ahooks";
import { clsx } from "clsx";
import {
  // 引入仪表盘（gauge）图
  GaugeChart,
  GaugeSeriesOption,
} from "echarts/charts";
import type { ComposeOption, ECharts } from "echarts/core";
// 引入渲染器
import { CanvasRenderer } from "echarts/renderers";
import { produce } from "immer";
import {
  divide,
  enableBoundaryChecking,
  minus,
  plus,
  times,
} from "number-precision";

import "./page.css";

// @see https://juejin.cn/post/7132409301380890660

type ECOption = ComposeOption<GaugeSeriesOption>;

echarts.use([GaugeChart, CanvasRenderer]);

const setEyeBallChartOption = (
  eyeBallChart: ECharts,
  eyeBallChartParams: EyeBallChartParams,
  isAngry: boolean,
) => {
  const ballColor = isAngry ? "#d00e4a" : "#00eeff";

  eyeBallChart.setOption<ECOption>({
    series: [
      {
        // 使用仪表盘类型
        type: "gauge",
        // 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
        // 采用负数是为了让分割线从内向外延伸
        radius: "-20%",
        // 仪表盘刻度是否是顺时针增长。
        clockwise: false,
        // 仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
        startAngle:
          // 逆时针旋转，乘5表示速度为leftRotSize的倍
          0 + eyeBallChartParams.leftRotSize * 5,
        // 仪表盘结束角度。
        endAngle:
          // 变为每10微秒移动0.5度
          270 + eyeBallChartParams.leftRotSize * 5,
        // 仪表盘刻度的分割段数。
        // 会将270度分割为3份，所以有四根线
        splitNumber: 3,
        axisLine: {
          // 是否显示仪表盘轴线。
          show: false,
        },
        axisTick: {
          // 是否显示刻度。
          show: false,
        },
        // 分隔线样式。
        splitLine: {
          // 分割线长度
          length:
            // 设置为眼球尺寸变量
            eyeBallChartParams.ballSize,
          lineStyle: {
            // 阴影渐变
            shadowBlur: 20,
            // 阴影颜色
            shadowColor: ballColor,
            // 阴影垂直方向上的偏移距离。
            shadowOffsetY: 0,
            // 分割线颜色
            color: ballColor,
            // 分割线宽度
            width: 4,
          },
        },
        axisLabel: {
          // 是否显示标签。
          show: false,
        },
      },
      {
        type: "gauge",
        radius: "-20%",
        clockwise: false,
        startAngle: 45 + eyeBallChartParams.leftRotSize * 5,
        endAngle: 315 + eyeBallChartParams.leftRotSize * 5,
        splitNumber: 3,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: eyeBallChartParams.ballSize,
          lineStyle: {
            shadowBlur: 20,
            shadowColor: ballColor,
            shadowOffsetY: 0,
            color: ballColor,
            width: 4,
          },
        },
        axisLabel: {
          show: false,
        },
      },
    ],
  });
};

type EyeBallChartParams = {
  /** 旋转角度 */
  leftRotSize: number;
  /** 眼睛尺寸 */
  ballSize: number;
};

type BigEyeProps = unknown;

const BigEye: FC<BigEyeProps> = () => {
  // #region hooks start
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bigEyeRef = useRef<HTMLDivElement | null>(null);
  const eyeBallRef = useRef<HTMLDivElement | null>(null);

  const wakeUpTimeoutId = useRef<NodeJS.Timeout | null>(null);
  const sleepTimeoutId = useRef<NodeJS.Timeout | null>(null);

  const [eyeBallChartParams, setEyeBallChartParams] =
    useState<EyeBallChartParams>({
      leftRotSize: 0,
      ballSize: 0,
    });

  // 是否休眠
  const [isSleep, setIsSleep] = useState(true);
  // 是否生气
  const isAngry = !isSleep;

  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    if (eyeBallRef.current === null) {
      return;
    }

    const eyeBallChart = echarts.init(eyeBallRef.current);
    setEyeBallChartOption(eyeBallChart, eyeBallChartParams, isAngry);

    return () => {
      eyeBallChart.dispose();
    };
  }, [eyeBallChartParams, isAngry]);
  // #endregion useEffect functions end

  // #region logic functions start
  /**
   * wake up
   */
  const handleBigEyeClick = useMemoizedFn(() => {
    if (!isSleep) {
      return;
    }

    // 唤醒
    setIsSleep(false);

    // 清除sleep定时器
    if (sleepTimeoutId.current !== null) {
      clearInterval(sleepTimeoutId.current);
    }

    // 每10ms改变eyeBallChartParams state
    wakeUpTimeoutId.current = setInterval(() => {
      setEyeBallChartParams(
        produce((draft) => {
          if (draft.ballSize <= 30) {
            draft.ballSize = plus(draft.ballSize, 1);
          }

          // 旋转
          draft.leftRotSize =
            draft.leftRotSize >= 360 ? 0 : plus(draft.leftRotSize, 0.5);
        }),
      );
    }, 10);
  });

  /**
   * sleep
   */
  const handleBigEyeAnimationEnd = useMemoizedFn(() => {
    // 清除wakeUp定时器
    if (wakeUpTimeoutId.current !== null) {
      clearInterval(wakeUpTimeoutId.current);
    }

    const promise = new Promise<void>((res) => {
      const rotTimeId = setInterval(() => {
        setEyeBallChartParams(
          produce((draft) => {
            // 眼球尺寸减小
            if (draft.ballSize > 0) {
              draft.ballSize = minus(draft.ballSize, 0.5);
            }
            // 旋转
            draft.leftRotSize =
              draft.leftRotSize >= 360 ? 0 : plus(draft.leftRotSize, 0.1);

            // 将Promise标记为resolved，然后执行后面的代码
            if (draft.ballSize <= 0) {
              clearInterval(rotTimeId);
              res();
            }
          }),
        );
      }, 10);
    });

    promise.then(() => {
      // 睡
      setIsSleep(true);

      sleepTimeoutId.current = setInterval(() => {
        setEyeBallChartParams(
          produce((draft) => {
            // 眼球尺寸缓慢增加
            if (draft.ballSize <= 12) {
              draft.ballSize = plus(draft.ballSize, 0.1);
            }

            // 旋转
            draft.leftRotSize =
              draft.leftRotSize >= 360 ? 0 : plus(draft.leftRotSize, 0.1);
          }),
        );
      }, 10);
    });
  });

  const handleContainerMouseMove = useMemoizedFn(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      if (
        containerRef.current === null ||
        bigEyeRef.current === null ||
        eyeBallRef.current === null
      ) {
        return;
      }

      // disable number-precision's check
      enableBoundaryChecking(false);

      // 容器尺寸，获取到整个容器的宽高
      const containerClientWidth = containerRef.current.clientWidth;
      const containerClientHeight = containerRef.current.clientHeight;
      // 原点，即bigEye中心位置
      const origin = [
        divide(containerClientWidth, 2),
        divide(containerClientHeight, 2),
      ];

      const { clientX, clientY } = e;
      // 鼠标坐标
      const mouseCoords = [
        minus(clientX, origin[0]),
        minus(origin[1], clientY),
      ];
      // 旋转角度
      const eyeXDeg = times(
        divide(mouseCoords[1], containerClientHeight),
        // 这里的80代表的是最上下边缘大眼X轴旋转角度
        80,
      );
      const eyeYDeg = times(divide(mouseCoords[0], containerClientWidth), 60);

      bigEyeRef.current.style.transform = `rotateY(${eyeYDeg}deg) rotateX(${eyeXDeg}deg)`;
      eyeBallRef.current.style.transform = `translate(${divide(
        eyeYDeg,
        1.5,
      )}px, ${divide(-eyeXDeg, 1.5)}px)`;

      // enable number-precision's check
      enableBoundaryChecking(true);
    },
  );
  // #endregion logic functions end

  // #region render functions start
  return (
    <div
      ref={containerRef}
      className="big-eye-container-perspective h-screen w-screen overflow-hidden bg-[#111]"
      onMouseMove={handleContainerMouseMove}
    >
      <div
        ref={bigEyeRef}
        className={clsx(
          "big-eye-transition absolute top-[calc(50%-75px)] left-[calc(50%-75px)] z-[1] aspect-square w-[150px] rounded-[50%] border-4 border-solid border-[#2968D9] shadow-[0_35px_60px_-15px_transparent]",
          isSleep && "animate-[eyeSleeping_6s_infinite]",
          isAngry &&
            "animate-[eyeLookAround_2.5s] border-[#ffbbff] shadow-[#ff3c56]",
        )}
        onClick={handleBigEyeClick}
        onAnimationEnd={handleBigEyeAnimationEnd}
      >
        <div
          className={clsx(
            "big-eye-pseudo h-[calc(100%+20px)] w-[calc(100%+20px)] border-[6px] border-solid border-[#02ffff]",
            isAngry && "border-[#ee5587]",
          )}
        />

        <div ref={eyeBallRef} className="h-full w-full" />

        <div
          className={clsx(
            "big-eye-pseudo h-full w-full border-4 border-solid border-[#23168c] shadow-[inset_0px_0px_30px_#23168c]",
            isAngry && "border-[#d00e4a] shadow-[#d00e4a]",
          )}
        />
      </div>

      <div style={{ filter: "url('#filter')" }} className="h-full w-full">
        <div
          className={clsx(
            "big-eye-transition absolute top-[calc(50%-92px)] left-[calc(50%-92px)] z-[1] aspect-square w-[150px] rounded-[50%] border-4 border-solid border-[#2968D9] opacity-0 shadow-[0_35px_60px_-15px_transparent] transition-[all_0.5s_ease-in-out]",
            isSleep && "animate-[eyeSleeping_6s_infinite]",
            isAngry &&
              "animate-[eyeLookAround_2.5s] border-[#ffbbff] opacity-100 shadow-[#ff3c56]",
          )}
        ></div>
      </div>

      {/* Svg滤镜 */}
      <svg width="0">
        <filter id="filter">
          <feTurbulence baseFrequency="1">
            <animate
              id="animate1"
              attributeName="baseFrequency"
              dur="1s"
              from="0.5"
              to="0.55"
              begin="0s;animate1.end"
            ></animate>
            <animate
              id="animate2"
              attributeName="baseFrequency"
              dur="1s"
              from="0.55"
              to="0.5"
              begin="animate2.end"
            ></animate>
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </svg>
    </div>
  );
  // #endregion render functions end
};

export default BigEye;
