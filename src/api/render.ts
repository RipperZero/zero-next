import type { AxiosResponse } from "axios";

import { GetWorldTime } from "@api.render";

import {
  nestOnVercelAxiosInstance,
  worldTimeAxiosInstance,
} from "./axiosInstance";

const getWorldTime = () => {
  return worldTimeAxiosInstance.get<GetWorldTime, AxiosResponse<GetWorldTime>>(
    "/ip",
  );
};

const getTimeStamp = () => {
  return nestOnVercelAxiosInstance.get<number>("/time/getTimestamp");
};

export { getWorldTime, getTimeStamp };
