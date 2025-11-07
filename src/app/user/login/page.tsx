"use client";

import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";

import { FC } from "react";

import { App, Button, Form, FormProps, Input, Typography } from "antd";

import { LoginReqParams } from "@api.user";

import { login } from "@/api/user";
import { LOCAL_STORAGE_KEY } from "@/constants";

type FormValues = LoginReqParams;

type FormItemLayout = Pick<FormProps, "labelCol" | "wrapperCol">;

const layoutA: FormItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const layoutB: FormItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const Login: FC = () => {
  // #region hooks start
  const router = useRouter();

  const { message } = App.useApp();
  const [formInstance] = Form.useForm<FormValues>();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // const sendEmailCode = () => {
  //   formInstance.validateFields(["email"]).then((formValues) => {
  //     console.log(formValues);

  //     axiosInstance
  //       .get("/email/code", {
  //         address: formValues.email,
  //       })
  //       .then((res: any) => {
  //         message.info(res);
  //       });
  //   });
  // };
  const handleFormFinish = (values: FormValues) => {
    login(values).then((res) => {
      if (!res.success) {
        message.error(res.message);
        return;
      }

      localStorage.setItem(
        LOCAL_STORAGE_KEY.ACCESS_TOKEN,
        res.data.accessToken,
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEY.REFRESH_TOKEN,
        res.data.refreshToken,
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEY.USER_INFO,
        JSON.stringify(res.data.userInfo),
      );

      router.push("/");
      message.success(res.message);
    });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="mx-auto mt-[100px] w-[400px]">
      <Typography.Title className={"text-center"}>
        会议室预定 Login
      </Typography.Title>

      <Form
        {...layoutA}
        form={formInstance}
        colon={false}
        autoComplete="off"
        onFinish={handleFormFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...layoutB}>
          <div className="flex justify-between">
            <Link href="/user/register">创建账号</Link>
            <Link href="/user/update-password">忘记密码</Link>
          </div>
        </Form.Item>

        <Form.Item {...layoutB}>
          <Button className="w-full" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
  // #endregion render functions end
};

export default Login;
