"use client";

import Image from "next/image";

import { FC } from "react";

import { Space, Typography } from "antd";

import { SeeLink } from "./SeeLink";
import { TabPane } from "./TabPane";

/** @tw */
const parentClassName = "h-[500px] bg-[#eebefa]";

/** @tw */
const childClassName = "h-[300px] w-[300px] bg-[#f783ac]";

const HORIZONTAL_VERTICAL_CENTER_TAB_LABEL = "水平垂直居中";

type HorizontalVerticalCenterProps = unknown;

const HorizontalVerticalCenter: FC<HorizontalVerticalCenterProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={HORIZONTAL_VERTICAL_CENTER_TAB_LABEL}
      blocks={[
        {
          title: HORIZONTAL_VERTICAL_CENTER_TAB_LABEL,
          preserveText: `
          // COMMON CODE
          <div class="parent">
            <div class="child"></div>
          </div>

          .parent {
            height: 500px;
            background-color: #eebefa;
          }
          .child {
            height: 300px;
            width: 300px;
            background-color: #f783ac;
          }
          `,
          content: (
            <Space direction="vertical" size="large">
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-15" />
              <Image
                src="/images/horizontalVerticalCenter.webp"
                height={300}
                width={770}
                alt="horizontalVerticalCenter"
              />
            </Space>
          ),
        },
        {
          title: "1.行内块级水平垂直居中方案",
          preserveText: `
          1.容器元素行高等于容器高度
          2.通过text-align: center;实现水平居中
          3.将子级元素设置为行内块级元素
          4.通过vertical-align: middle;实现垂直居中

          .parent {
            /* 1. 设置行高等于容器高度 */
            line-height: 500px;
            /* 通过 text-align: center; 实现水平居中 */
            text-align: center;
          }
          .child {
            /* 将子级元素设置为行内块级元素 */
            display: inline-block;
            /* 通过 vertical-align: middle; 实现垂直居中 */
            vertical-align: middle;
          }
          `,
          content: (
            <div className={`${parentClassName} text-center leading-[500px]`}>
              <div className={`${childClassName} inline-block align-middle`} />
            </div>
          ),
        },
        {
          title: "2.定位实现水平垂直居中方案(一)",
          preserveText: `
          1.使子元素相对于容器元素定位
          2.子元素开启绝对定位
          3.设置该元素的偏移量，值为50% 减去宽度/高度的一半

          .parent {
            /* 1. 使子元素相对于本元素定位 */
            position: relative;
          }
          .child {
            /* 2. 开启绝对定位 */
            position: absolute;
            /* 3. 设置该元素的偏移量，值为 50%减去宽度/高度的一半 */
            top: calc(50% - 150px);
            left: calc(50% - 150px);
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div
                className={`${childClassName} absolute left-[calc(50%-150px)] top-[calc(50%-150px)]`}
              />
            </div>
          ),
        },
        {
          title: "3.定位实现水平垂直居中方案(二)",
          preserveText: `
          1.使子元素相对于容器元素定位
          2.子元素开启绝对定位
          3.设置该元素的偏移量，值为50%
          4.通过外边距-值的方式将元素移动回去

          .parent {
            /* 1. 使子元素相对于本元素定位 */
            position: relative;
          }
          .child {
            /* 2. 开启绝对定位 */
            position: absolute;
            /* 3. 设置该元素的偏移量，值为 50% */
            left: 50%;
            top: 50%;
            margin-left: -150px;
            margin-top: -150px;
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div
                className={`${childClassName} absolute left-1/2 top-1/2 -ml-[150px] -mt-[150px]`}
              />
            </div>
          ),
        },
        {
          title: "4.定位实现水平垂直居中方案(三)",
          preserveText: `
          1.使子元素相对于容器元素定位
          2.子元素开启绝对定位
          3.将子元素拉满整个容器
          4.通过margin:auto实现水平垂直居中

          .parent {
            /* 1. 使子元素相对于本元素定位 */
            position: relative;
          }
          .child {
            /* 2. 开启绝对定位 */
            position: absolute;
            /* 3. 将子元素拉满整个容器 */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            /* 4. 通过 margin:auto 实现水平垂直居中 */
            margin: auto;
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div
                className={`${childClassName} absolute inset-x-0 inset-y-0 m-auto`}
              />
            </div>
          ),
        },
        {
          title: "5.定位实现水平垂直居中方案(四)",
          preserveText: `
          1.使子元素相对于容器元素定位
          2.子元素开启绝对定位
          3.设置该元素的偏移量，值为50%
          4.通过margin:auto实现水平垂直居中

          .parent {
            /* 1. 使子元素相对于本元素定位 */
            position: relative;
          }
          .child {
            /* 2. 开启绝对定位 */
            position: absolute;
            /* 3. 设置该元素的偏移量，值为 50%*/
            left: 50%;
            top: 50%;
            /* 通过translate反向偏移的方式，实现居中 */
            transform: translate(-50%, -50%);
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div
                className={`${childClassName} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
              />
            </div>
          ),
        },
        {
          title: "6.Flex方案",
          preserveText: `
          1.将元素设置为 Flex 布局
          2.通过justify-content: center以及align-items: center实现
          或者margin:auto;实现。

          .parent {
            /* 1. 将元素设置为 Flex 布局 */
            display: flex;
            /* 2. 通过 justify-content 以及 align-items: center 实现 */
            /* justify-content: center;
            align-items: center; */
          }
          .child {
            /* 或者通过 margin auto 实现 */
            margin: auto;
          }
          `,
          content: (
            <div className={`${parentClassName} flex`}>
              <div className={`${childClassName} m-auto`} />
            </div>
          ),
        },
        {
          title: "7.Grid方案",
          preserveText: `
          Grid方案的实现方式相对来说比较简单，方式也较多。

          .parent {
            /* 1. 元素设置为Grid 元素 */
            display: grid;
            /* 通过 items 属性实现*/
            /* align-items: center; */
            /* justify-items: center; */
            /* items 的缩写 */
            /* place-items: center; */

            /* 或者通过 content 属性 */
            /* align-content: center; */
            /* justify-content: center; */
            /* content 的缩写 */
            /* place-content: center; */
          }
          .child {
            /* 或者通过 margin auto 实现 */
            /* margin: auto; */
            /* 或者通过 self 属性 */
            /* align-self: center; */
            /* justify-self: center; */
            /* self 的缩写 */
            place-self: center;
          }
          `,
          content: (
            <div className={`${parentClassName} grid`}>
              <div className={`${childClassName} place-self-center`} />
            </div>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { HorizontalVerticalCenter, HORIZONTAL_VERTICAL_CENTER_TAB_LABEL };
