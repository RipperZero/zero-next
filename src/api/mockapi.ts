import { GetPatientList } from "@api.mockapi";

import { axiosInstance } from "@/shared/utils";

axiosInstance.defaults.baseURL =
  "https://6643258f3c01a059ea21adf8.mockapi.io/api";

const getPatientList = () => {
  return axiosInstance.get<GetPatientList>("/patientList");
};

export { getPatientList };
