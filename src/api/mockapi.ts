import { GetPatientList } from "@api.mockapi";

import { axiosInstance } from "@/shared/utils";

axiosInstance.defaults.baseURL =
  "https://6643258f3c01a059ea21adf8.mockapi.io/api";

const hasWindow = () => {
  return typeof window !== "undefined";
};

const getPatientList = () => {
  console.log("getPatientList innnnnnnnnnn");
  console.log("has window ====>>>>", hasWindow());
  return axiosInstance.get<GetPatientList>("/patientList");
};

export { getPatientList };
