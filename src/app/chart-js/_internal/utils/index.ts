import { Color } from "@kurkle/color";

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
let _seed = Date.now();

const srand = (seed: number) => {
  _seed = seed;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const CHART_COLORS = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
} as const;

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
] as const;

type Config = Partial<{
  count: number;
  section: number;
  min: number;
  max: number;
  from: number[];
  decimals: number;
  continuity: number;
  rmin: number;
  rmax: number;
}>;

const namedColor = (index: number) => {
  return NAMED_COLORS[index % NAMED_COLORS.length];
};

const rand = (min = 0, max = 0) => {
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
};

/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
// const valueOrDefault = <T>(value: T | undefined, defaultValue: T) => {
//   return typeof value === "undefined" ? defaultValue : value;
// };

const months = (config: Config) => {
  const count = config?.count ?? 12;
  const section = config?.section;
  const values = [];

  for (let index = 0; index < count; ++index) {
    const value = MONTHS[Math.ceil(index) % 12];
    values.push(value.substring(0, section));
  }

  return values;
};

const numbers = ({
  min = 0,
  max = 100,
  from = [],
  count = 8,
  decimals = 8,
  continuity = 1,
}: Config) => {
  const dfactor = Math.pow(10, decimals) || 0;
  const data = [];

  for (let index = 0; index < count; ++index) {
    const value = (from[index] ?? 0) + rand(min, max);

    data.push(
      rand() <= continuity ? Math.round(dfactor * value) / dfactor : null,
    );
  }

  return data;
};

const transparentize = (value: string, opacity: number) => {
  const alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return new Color(value).alpha(alpha).rgbString();
};

const points = (config: Config) => {
  const xs = numbers(config);
  const ys = numbers(config);

  return xs.map((x, i) => ({ x: x ?? 0, y: ys[i] ?? 0 }));
};

const bubbles = (config: Config) => {
  return points(config).map((pt) => {
    const r = rand(config.rmin, config.rmax);

    return {
      ...pt,
      r: r,
    };
  });
};

export type { Config };
export {
  months,
  numbers,
  CHART_COLORS,
  transparentize,
  rand,
  namedColor,
  points,
  bubbles,
};
