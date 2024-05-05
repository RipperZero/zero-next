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

const rand = (min = 0, max = 0) => {
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
};

/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
const valueOrDefault = <T>(value: T | undefined, defaultValue: T) => {
  return typeof value === "undefined" ? defaultValue : value;
};

const months = (config?: { count?: number; section?: number }) => {
  const count = config?.count ?? 12;
  const section = config?.section;
  const values = [];

  for (let index = 0; index < count; ++index) {
    const value = MONTHS[Math.ceil(index) % 12];
    values.push(value.substring(0, section));
  }

  return values;
};

const numbers = (config?: {
  min?: number;
  max?: number;
  from?: [];
  count?: number;
  decimals?: number;
  continuity?: number;
}) => {
  const cfg = config || {};
  const min = valueOrDefault(cfg.min, 0);
  const max = valueOrDefault(cfg.max, 100);
  const from = valueOrDefault(cfg.from, []);
  const count = valueOrDefault(cfg.count, 8);
  const decimals = valueOrDefault(cfg.decimals, 8);
  const continuity = valueOrDefault(cfg.continuity, 1);
  const dfactor = Math.pow(10, decimals) || 0;
  const data = [];

  for (let index = 0; index < count; ++index) {
    const value = (from[index] ?? 0) + rand(min, max);

    rand() <= continuity
      ? data.push(Math.round(dfactor * value) / dfactor)
      : data.push(null);
  }

  return data;
};

const transparentize = (value: string, opacity: number) => {
  const alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return new Color(value).alpha(alpha).rgbString();
};

export { months, numbers, CHART_COLORS, transparentize, rand };
