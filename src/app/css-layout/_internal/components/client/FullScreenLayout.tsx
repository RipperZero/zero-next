"use client";

import Image from "next/image";

import { FC } from "react";

import { Space, Typography } from "antd";

import { SeeLink } from "./SeeLink";
import { TabPane } from "./TabPane";

/** @tw */
const containerClassName = "box-border h-[800px] text-center";

/** @tw */
const headerClassName = "h-[100px] bg-[#70a1ff]";

// #region Content ---start
/** @tw */
const contentClassName = "grid grid-cols-[auto,1fr] bg-[#52c41a]";

/** @tw */
const leftClassName = "w-[200px] bg-[#52c41a]";

/** @tw */
const rightClassName = "bg-[#f759ab]";

/** @tw */
const rightInClassName = "";
// #endregion Content ---end

/** @tw */
const footerClassName = "h-[100px] bg-[#ff7a45]";

const FULL_SCREEN_LAYOUT_TAB_LABEL = "全屏布局";

type FullScreenLayoutProps = unknown;

const FullScreenLayout: FC<FullScreenLayoutProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={FULL_SCREEN_LAYOUT_TAB_LABEL}
      blocks={[
        {
          title: FULL_SCREEN_LAYOUT_TAB_LABEL,
          preserveText: `
          // COMMON CODE
        //   <div class="container">
        //     <div class="header">header</div>
        //     <div class="content">
        //         <div class="left">导航</div>
        //         <div class="right">
        //             <div class="right-in">自适应，超出高度出现滚动条</div>
        //         </div>
        //     </div>
        //     <div class="footer">footer</div>
        //   </div>
          <section class="container">
            <header class="header">header</header>
            <section class="content">
                <aside class="left">导航</aside>
                <main class="right">
                    <div class="right-in">自适应，超出高度出现滚动条</div>
                </main>
            </section>
            <footer class="footer">footer</footer>
          </section>

          .container {
            // height: 100vh;
            height: 800px;
            box-sizing: border-box;
            text-align: center;
            // overflow: hidden;
          }
          .header {
            height: 100px;
            background-color: #70a1ff;
          }
          .content {
            background-color: #52c41a;
            /* content的布局可以参考 两列 三列 布局 */
            display: grid;
            grid-template-columns: auto 1fr;
          }
          .left {
            // width: 240px;
            width: 200px;
            background-color: #52c41a;
            // font-size: 80px;
            // line-height: calc(100vh - 200px);
          }
          .right {
            background-color: #f759ab;
            // font-size: 60px;
          }
          .footer {
            height: 100px;
            background-color: #ff7a45;
          }
        //   .header,
        //   .footer {
        //     line-height: 100px;
        //     font-size: 52px;
        //   }
        `,
          content: (
            <Space orientation="vertical" size="large">
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-46" />
              <Typography.Text className="text-xl!">
                全屏布局主要应用在后台
              </Typography.Text>
              <Image
                src="/images/fullScreenLayout.webp"
                height={300}
                width={770}
                alt="fullScreenLayout"
              />
            </Space>
          ),
        },
        {
          title: "1.使用calc函数实现",
          preserveText: `
          1.通过calc函数计算出中间容器的高度。
          2.中间出现滚动条的容器设置overflow: auto即出现滚动条的时候出现滚动条。

          .content {
            // overflow: hidden;
            /* 通过 calc 计算容器的高度 */
            height: calc(100% - 200px);
          }
          .left {
            height: 100%;
          }
          .right {
            /* 如果超出出现滚动条 */
            overflow: auto;
            height: 100%;
          }
          .right-in {
            /* 假设容器内有1000px的元素 */
            // height: 500px;
            height: 1000px;
          }
        `,
          content: (
            <section className={`${containerClassName}`}>
              <header className={`${headerClassName}`}>header</header>
              <section
                // 100% is container's height
                // header height is 100px
                // footer height is 100px
                className={`${contentClassName} h-[calc(100%-200px)]`}
              >
                <aside className={`${leftClassName} h-full`}>导航</aside>
                <main className={`${rightClassName} h-full overflow-auto`}>
                  <div className={`${rightInClassName} h-[1000px]`}>
                    自适应，超出高度出现滚动条
                  </div>
                </main>
              </section>
              <footer className={`${footerClassName}`}>footer</footer>
            </section>
          ),
        },
        {
          title: "2.Flex方案",
          preserveText: `
          .container {
            /* 开启flex布局 */
            display: flex;
            /* 将子元素布局方向修改为垂直排列 */
            flex-flow: column;
          }
          .content {
            /* 设置 中间 部分自适应 */
            flex: 1;

            /* 如果超出出现滚动条 */
            // overflow: auto;

            // planA:
            // overflow: hidden;
            // planB:
            min-height: 0px;
          }
          .right {
            overflow: auto;
          }
          .right-in {
            /* 假设容器内有1000px的元素 */
            // height: 500px;
            height: 1000px;
          }
        `,
          content: (
            <Space className="w-full" orientation="vertical" size="large">
              <Typography.Text strong className="text-xl! text-red-600!">
                What the FXXX planA/planB is???
              </Typography.Text>
              <SeeLink openUrl="https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size?answertab=votes#tab-top" />

              <section className={`${containerClassName} flex flex-col`}>
                <header className={`${headerClassName}`}>header</header>
                {/* <section className={`${contentClassName} flex-1 overflow-hidden`}> */}
                <section className={`${contentClassName} min-h-0 flex-1`}>
                  <aside className={`${leftClassName}`}>导航</aside>
                  <main className={`${rightClassName} overflow-auto`}>
                    <div className={`${rightInClassName} h-[1000px]`}>
                      自适应，超出高度出现滚动条
                    </div>
                  </main>
                </section>
                <footer className={`${footerClassName}`}>footer</footer>
              </section>
            </Space>
          ),
        },
        {
          title: "3.Grid 方案",
          preserveText: `
          grid布局对于这种布局来说，实现起来是非常得心应手的，通过template属性即可实现。

          .container {
            /* 开启grid布局 */
            display: grid;
            grid-template-rows: auto 1fr auto;
          }
          .content {
            /* 如果超出出现滚动条 */
            // overflow: auto;

            // planA:
            overflow: hidden;
            // planB:
            // min-height: 0px;
          }
          .right {
            overflow: auto;
          }
          .right-in {
            /* 假设容器内有1000px的元素 */
            // height: 500px;
            height: 1000px;
          }
        `,
          content: (
            <Space className="w-full" orientation="vertical" size="large">
              <Typography.Text strong className="text-xl! text-red-600!">
                What the FXXX planA/planB is???
              </Typography.Text>
              <SeeLink openUrl="https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size?answertab=votes#tab-top" />

              <section
                className={`${containerClassName} grid grid-rows-[auto,1fr,auto]`}
              >
                <header className={`${headerClassName}`}>header</header>
                <section className={`${contentClassName} overflow-hidden`}>
                  {/* <section className={`${contentClassName} min-h-0`}> */}
                  <aside className={`${leftClassName}`}>导航</aside>
                  <main className={`${rightClassName} overflow-auto`}>
                    <div className={`${rightInClassName} h-[1000px]`}>
                      自适应，超出高度出现滚动条
                    </div>
                  </main>
                </section>
                <footer className={`${footerClassName}`}>footer</footer>
              </section>
            </Space>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { FullScreenLayout, FULL_SCREEN_LAYOUT_TAB_LABEL };
