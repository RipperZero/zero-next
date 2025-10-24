"use client";

import { FC, use, useRef, useState } from "react";

import { TestCompilerCode } from "./_internal/components/TestCompilerCode";

const getRandomColor = () => {
  console.log("====>>>> run getRandomColor");

  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TestCompilerA: FC<{
  printCountB: () => void;
}> = ({ printCountB }) => {
  "use no memo";

  console.log("TestCompilerA render");

  const color = getRandomColor();

  printCountB();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>TestCompilerA → run printCountB(props) every render</div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

const TestCompilerB: FC<{
  printCountA: () => void;
}> = ({ printCountA }) => {
  // "use no memo";

  console.log("TestCompilerB render");

  const color = getRandomColor();

  printCountA();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>TestCompilerB → run printCountA(props) every render</div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

const TestCompilerAandB: FC<{
  printCountA: () => void;
  printCountB: () => void;
}> = ({ printCountA, printCountB }) => {
  // "use no memo";

  console.log("TestCompilerAandB render");

  const color = getRandomColor();

  printCountA();
  printCountB();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>
        TestCompilerAandB → run printCountA&printCountB(props) every render
      </div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

type TestCompilerPageProps = {
  /**
   * An object containing the [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
   * from the root segment down to that page.
   *
   * @see [Page Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional)
   */
  params: Promise<unknown>;
  /**
   * An object containing the search parameters of the current URL.
   *
   * @see [Layout Searchparams → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
   */
  searchParams: Promise<unknown>;
};

const TestCompilerPage: FC<TestCompilerPageProps> = ({
  params,
  searchParams,
}) => {
  // #region hooks start
  const {} = use(params) ?? {};
  const {} = use(searchParams) ?? {};

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const objC = { count: 0 };
  const refC = useRef({ count: 0 });
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const printCountA = () => {
    console.log("countA", countA);
  };
  const printCountB = () => {
    console.log("countB", countB);
  };
  const printAllC = () => {
    console.log("objC", objC);
    console.log("refC", refC.current);
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="m-6 flex flex-col gap-6">
      <div className="card flex flex-col gap-2">
        <button
          className="w-[200px] cursor-pointer border"
          onClick={() => setCountA((pre) => pre + 1)}
        >
          countA(state) is {countA}
        </button>

        <button
          className="w-[200px] cursor-pointer border"
          onClick={() => setCountB((pre) => pre + 1)}
        >
          countB(state) is {countB}
        </button>

        <button
          className="w-[200px] cursor-pointer border"
          // eslint-disable-next-line react-hooks/immutability
          onClick={() => {
            objC.count += 1;
            refC.current.count += 1;
          }}
        >
          Add all CountC(obj & ref)
        </button>
      </div>

      <div>
        <button className="w-[200px] cursor-pointer border" onClick={printAllC}>
          printAllC(obj & ref)
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <TestCompilerA printCountB={printCountB} />
        <TestCompilerB printCountA={printCountA} />
        <TestCompilerAandB
          printCountA={printCountA}
          printCountB={printCountB}
        />
      </div>

      <TestCompilerCode />
    </div>
  );
  // #endregion render functions end
};

export type { TestCompilerPageProps };

export default TestCompilerPage;
