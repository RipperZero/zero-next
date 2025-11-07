import { mockAxiosInstance } from "./axiosInstance";

const _queryTimestamp = () => {
  return mockAxiosInstance.get<number>("/mock-api/render");
};

export { _queryTimestamp };
