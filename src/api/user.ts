import {
  LoginReqParams,
  LoginResObj,
  RegisterReqParams,
  UpdatePasswordReqParams,
} from "@api.user";

import { axiosInstance } from "@/shared/utils";

const login = (parmas: LoginReqParams) => {
  return axiosInstance.post<LoginResObj>("/user/login", parmas);
};

const registerCaptcha = (email: string) => {
  return axiosInstance.get<string>("/user/register-captcha", {
    address: email,
  });
};

const register = (parmas: RegisterReqParams) => {
  return axiosInstance.post<string>("/user/register", parmas);
};

const updatePasswordCaptcha = (email: string) => {
  return axiosInstance.get<string>("/user/update_password/captcha", {
    address: email,
  });
};

const updatePassword = (parmas: UpdatePasswordReqParams) => {
  return axiosInstance.post<string>("/user/update_password", parmas);
};

export {
  login,
  registerCaptcha,
  register,
  updatePasswordCaptcha,
  updatePassword,
};
