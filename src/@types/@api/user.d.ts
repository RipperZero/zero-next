declare module "@api.user" {
  type LoginReqParams = {
    username: string;
    password: string;
  };

  type LoginResObj = {
    userInfo: {
      id: number;
      username: string;
      nickName: string;
      email: string;
      phoneNumber: string | null;
      headPic: string | null;
      createTime: number;
      isFrozen: boolean;
      isAdmin: boolean;
      roles: Array<string>;
      permissions: Array<{
        id: number;
        code: string;
        description: string;
      }>;
    };
    accessToken: string;
    refreshToken: string;
  };

  type RegisterReqParams = {
    username: string;
    nickName: string;
    password: string;
    email: string;
    captcha: string;
  };

  type UpdatePasswordReqParams = {
    username: string;
    password: string;
    email: string;
    captcha: string;
  };
}
