"use client";

import Image from "next/image";

import { FC } from "react";

import { Space, Typography } from "antd";

import { SeeLink } from "./SeeLink";
import { TabPane } from "./TabPane";

/** @tw */
const parentClassName = "clearfix h-[400px] bg-[#eebefa]";

/** @tw */
const childAClassName = "h-full bg-[#eccc68]";

/** @tw */
const childBClassName = "h-full bg-[#a6c1fa]";

/** @tw */
const childCClassName = "h-full bg-[#fa7d90]";

/** @tw */
const childDClassName = "h-full bg-[#b0ff70]";

const EQUAL_LAYOUT_TAB_LABEL = "等分布局";

type EqualLayoutProps = unknown;

const EqualLayout: FC<EqualLayoutProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={EQUAL_LAYOUT_TAB_LABEL}
      blocks={[
        {
          title: EQUAL_LAYOUT_TAB_LABEL,
          preserveText: `
          // COMMON CODE
          <!-- clearfix 父元素清除浮动 -->
          <div class="container clearfix">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
            <div class="item item4"></div>
          </div>

          .container {
            height: 400px;
            background-color: #eebefa;
          }
          .item {
            height: 100%;
          }
          .item1 {
            background-color: #eccc68;
          }
          .item2 {
            background-color: #a6c1fa;
          }
          .item3 {
            background-color: #fa7d90;
          }
          .item4 {
            background-color: #b0ff70;
          }
          /* 清除浮动 */
          .clearfix:after {
            content: '';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
        `,
          content: (
            <Space orientation="vertical" size="large">
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-36" />
              <Typography.Text className="!text-xl">
                等分布局就是将一个容器平均分成几等份，这里以 4 等分为例
              </Typography.Text>
              <Image
                src="/images/equalLayout.webp"
                height={300}
                width={770}
                alt="equalLayout"
              />
            </Space>
          ),
        },
        {
          title: "1.浮动+百分比方式",
          preserveText: `
          这种方式比较简单，开启浮动，使每个元素占25%的宽度。

          .item {
            /* 开启浮动，每个元素占 25% 的宽度 */
            float: left;
            width: 25%;
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childAClassName} float-left w-1/4`} />
              <div className={`${childBClassName} float-left w-1/4`} />
              <div className={`${childCClassName} float-left w-1/4`} />
              <div className={`${childDClassName} float-left w-1/4`} />
            </div>
          ),
        },
        {
          title: "2.行内块级+百分比方式",
          preserveText: `
          .item {
            /* 设置每个元素为行内块级元素，每个元素占 25% 的宽度 */
            display: inline-block;
            width: 25%;
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childAClassName} inline-block w-1/4`} />
              <div className={`${childBClassName} inline-block w-1/4`} />
              <div className={`${childCClassName} inline-block w-1/4`} />
              <div className={`${childDClassName} inline-block w-1/4`} />
            </div>
          ),
        },
        {
          title: "3.Flex方案",
          preserveText: `
          .container {
            /* 开启 flex 布局 */
            display: flex;
          }
          .item {
            /* 每个元素占相同的宽度 */
            flex: 1;
          }
          `,
          content: (
            <div className={`${parentClassName} flex`}>
              <div className={`${childAClassName} flex-1`} />
              <div className={`${childBClassName} flex-1`} />
              <div className={`${childCClassName} flex-1`} />
              <div className={`${childDClassName} flex-1`} />
            </div>
          ),
        },
        {
          title: "4.Grid方案",
          preserveText: `
          通过 Grid 布局实现该功能主要是通过template属性实现。

          .container {
            /* 开启 grid 布局 */
            display: grid;
            /* 使用 repeat 函数生成如下代码 */
            /* grid-template-columns: 1fr 1fr 1fr 1fr; */
            // grid-template-columns: repeat(4, 1fr);
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-template-rows: repeat(1, minmax(0, 1fr));
          }
          `,
          content: (
            <div className={`${parentClassName} grid grid-cols-4 grid-rows-1`}>
              <div className={`${childAClassName}`} />
              <div className={`${childBClassName}`} />
              <div className={`${childCClassName}`} />
              <div className={`${childDClassName}`} />
            </div>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { EqualLayout, EQUAL_LAYOUT_TAB_LABEL };
