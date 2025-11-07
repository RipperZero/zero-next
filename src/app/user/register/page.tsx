"use client";

import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";

import { FC } from "react";

import { App, Button, Form, FormProps, Input, Typography } from "antd";

import { register, registerCaptcha } from "@/api/user";

type RegisterUser = {
  username: string;
  nickName: string;
  password: string;
  confirmPassword: string;
  email: string;
  captcha: string;
};

type FormValues = RegisterUser;

type FormItemLayout = Pick<FormProps, "labelCol" | "wrapperCol">;

const layoutA: FormItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const layoutB: FormItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const Register: FC = () => {
  // #region hooks start
  const router = useRouter();

  const { message } = App.useApp();
  const [formInstance] = Form.useForm<FormValues>();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const sendCaptcha = () => {
    formInstance.validateFields(["email"]).then(({ email }) => {
      registerCaptcha(email).then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        res.success ? message.success(res.message) : message.error(res.message);
      });
    });
  };

  const handleFormFinish = (values: FormValues) => {
    register(values).then((res) => {
      if (!res.success) {
        message.error(res.message);
        return;
      }

      message.success(res.message);
      router.push("/user/login");
    });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="mx-auto mt-[100px] w-[400px]">
      <Typography.Title className={"text-center"}>
        会议室预定 Register
      </Typography.Title>

      <Form
        {...layoutA}
        form={formInstance}
        onFinish={handleFormFinish}
        colon={false}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="昵称"
          name="nickName"
          rules={[{ required: true, message: "请输入昵称!" }]}
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

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "请输入确认密码!" },
            ({ getFieldValue }) => {
              return {
                validator: (_, value) => {
                  const password: string | undefined =
                    getFieldValue("password");

                  if (value !== password) {
                    return Promise.reject(new Error("两次密码不一致"));
                  }

                  return Promise.resolve();
                },
              };
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱!" },
            { type: "email", message: "请输入合法邮箱地址!" },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="flex justify-end">
          <Form.Item
            label="验证码"
            name="captcha"
            rules={[{ required: true, message: "请输入验证码!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" onClick={sendCaptcha}>
            发送验证码
          </Button>
        </div>

        <Form.Item {...layoutB}>
          <div className="flex justify-end">
            已有账号？去<Link href="/user/login">登录</Link>
          </div>
        </Form.Item>

        <Form.Item {...layoutA} label=" ">
          <Button className="w-full" type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
  // #endregion render functions end
};

export default Register;
