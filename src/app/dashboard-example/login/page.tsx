import { FC, Suspense } from "react";

import { AcmeLogo, LoginForm } from "../ui";

type LoginPageProps = unknown;

const LoginPage: FC<LoginPageProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>

        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
  // #endregion render functions end
};

export default LoginPage;
