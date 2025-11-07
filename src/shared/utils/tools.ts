import { getApiServerURL } from "./envUtils";

const isNullish = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

const getFullApiUrl = (url: string) => {
  // remove leading and trailing slashes from url
  const normalizedUrl = url.replace(/\/+$/, "").replace(/^\/+/, "");
  const apiServerURL = getApiServerURL() ?? "";

  return apiServerURL.endsWith("/")
    ? apiServerURL + normalizedUrl
    : apiServerURL + "/" + normalizedUrl;
};

export { isNullish, getFullApiUrl };
