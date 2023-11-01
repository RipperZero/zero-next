"use client";

import { FC } from "react";

import { App, Button, Form, Input } from "antd";
import { AxiosError } from "axios";

import { axiosInstance } from "@/share/utils";

type FormValues = {
  email: string;
  code: string;
};

type LoginProps = {};

const Login: FC<LoginProps> = ({}) => {
  // #region hooks start
  const { message } = App.useApp();

  const [formInstance] = Form.useForm<FormValues>();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const sendEmailCode = () => {
    formInstance.validateFields(["email"]).then((formValues) => {
      console.log(formValues);

      axiosInstance
        .get("/email/code", {
          address: formValues.email,
        })
        .then((res: any) => {
          message.info(res);
        });
    });
  };

  const login = (values: FormValues) => {
    axiosInstance
      .post("/user/login", values)
      .then((res: any) => {
        console.log(res);

        if (res === "success") {
          message.success("Login successful");
        }
      })
      .catch((e: AxiosError) => {
        // @ts-ignore:next-line
        const resMessage = e.response?.data.message;

        if (resMessage !== undefined) {
          message.error(resMessage);
        }
      });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="mx-auto my-[100px] w-[500px]">
      <Form form={formInstance} onFinish={login}>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            {
              required: true,
              message: "请输入邮箱地址",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="验证码"
          name="code"
          rules={[
            {
              required: true,
              message: "请输入验证码",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button onClick={sendEmailCode}>发送验证码</Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
  // #endregion render functions end
};

export default Login;
