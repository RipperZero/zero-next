import { createAxiosInstance } from "@/shared/utils/createAxiosInstance";
import { getApiServerURL } from "@/shared/utils/envUtils";

/**
 * 200 <= status && status < 300
 * @param status
 */
const isValidResponse = (status: number) => {
  return 200 <= status && status < 300;
};

const nestOnVercelAxiosInstance = createAxiosInstance({
  config: {
    baseURL: getApiServerURL(),
  },
});

const mockapiAxiosInstance = createAxiosInstance({
  config: {
    baseURL: "https://6643258f3c01a059ea21adf8.mockapi.io/api",
  },
  options: {
    skipDefaultResponseInterceptor: true,
  },
});

// use Next router system to mock
const mockAxiosInstance = createAxiosInstance({
  config: {
    baseURL: undefined,
  },
});

const worldTimeAxiosInstance = createAxiosInstance({
  config: {
    baseURL: "https://worldtimeapi.org/api",
  },
  options: {
    skipDefaultResponseInterceptor: true,
  },
});

export {
  isValidResponse,
  nestOnVercelAxiosInstance,
  mockapiAxiosInstance,
  mockAxiosInstance,
  worldTimeAxiosInstance,
};
