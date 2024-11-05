"use client";

import Image from "next/image";

import { FC } from "react";

import { Space } from "antd";

import { SeeLink } from "./SeeLink";
import { TabPane } from "./TabPane";

/** @tw */
const parentClassName = "h-[500px] bg-[#ff8787]";

/** @tw */
const childClassName = "h-[300px] w-[300px] bg-[#91a7ff]";

const VERTICAL_CENTER_TAB_LABEL = "垂直居中";

type VerticalCenterProps = unknown;

const VerticalCenter: FC<VerticalCenterProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={VERTICAL_CENTER_TAB_LABEL}
      blocks={[
        {
          title: VERTICAL_CENTER_TAB_LABEL,
          preserveText: `
          // COMMON CODE
          <div class="parent">
            <div class="child"></div>
          </div>

          .parent {
            height: 500px;
            background-color: #ff8787;
          }
          .child {
            width: 300px;
            height: 300px;
            background-color: #91a7ff;
          }
          `,
          content: (
            <Space direction="vertical" size="large">
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-8" />
              <Image
                src="/images/verticalCenter.webp"
                height={300}
                width={770}
                alt="verticalCenter"
              />
            </Space>
          ),
        },
        {
          title: "1.行内块级元素垂直居中",
          preserveText: `
          若元素是行内块级元素, 基本思想是子元素使用display: inline-block, vertical-align:middle;
          并让父元素行高等同于高度。

          .parent {
            /* 为父级容器设置行高 */
            line-height: 500px;
          }

          .child {
            /* 将子级元素设置为 inline-block 元素 */
            display: inline-block;
            /* 通过 vertical-align: middle; 实现居中 */
            vertical-align: middle;
          }
          `,
          content: (
            <div className={`${parentClassName} leading-[500px]`}>
              <div className={`${childClassName} inline-block align-middle`} />
            </div>
          ),
        },
        {
          title: "2.定位方式实现(方法一)",
          preserveText: `
          第一种通过定位的方式实现就比较简单，
          实际就是通过top: 50%; margin-top: 等于负的高度的一半就可以实现垂直居中。

          .parent {
            /* 为父级容器开启相对定位 */
            position: relative;
          }

          .child {
            position: absolute;
            top: 50%;
            /* margin-top: 等于负高度的一半 */
            margin-top: -150px;
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div
                className={`${childClassName} absolute top-1/2 -mt-[150px]`}
              />
            </div>
          ),
        },
        {
          title: "3.定位方式实现(方法二)",
          preserveText: `
          第二种通过定位的方式实现实现思路：top和bottom将子元素拉伸至100%，设置指定的高度，
          通过margin:auto; 即可实现垂直居中。

          .parent {
            /* 为父级容器开启相对定位 */
            position: relative;
          }

          .child {
            position: absolute;
            /* 垂直拉满 */
            top: 0;
            bottom: 0;
            /* margin: auto 即可实现 */
            margin: auto;
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div
                className={`${childClassName} absolute bottom-0 top-0 m-auto`}
              />
            </div>
          ),
        },
        {
          title: "4.定位方式实现(方法三)",
          preserveText: `
          第三种通过定位的方式就比较灵活，适用于多种场合，使用top配合transform即可。

          .parent {
            /* 为父级容器开启相对定位 */
            position: relative;
          }

          .child {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div
                className={`${childClassName} absolute top-1/2 -translate-y-1/2`}
              />
            </div>
          ),
        },
        {
          title: "5.Flex方案",
          preserveText: `
          通过Flex可以有很多方式实现这个垂直居中布局的效果。

          .parent {
            /* 开启 flex 布局 */
            display: flex;
            /* 方法一 */
            /* align-items: center; */
          }

          .child {
            /* 方法二 */
            margin-top: auto;
            margin-bottom: auto;
          }
          `,
          content: (
            <div className={`${parentClassName} flex`}>
              <div className={`${childClassName} my-auto`} />
            </div>
          ),
        },
        {
          title: "6.Grid方案",
          preserveText: `
          通过Grid实现居中布局比通过Flex实现的方式更多一些。

          .parent {
            display: grid;
            /* 方法一 */
            /* align-items: center; */
            /* 方法二 */
            /* align-content: center; */
          }

          .child {
            /* 方法三 */
            /*
            margin-top: auto;
            margin-bottom: auto;
            */
            /* 方法四 */
            align-self: center;
          }
          `,
          content: (
            <div className={`${parentClassName} grid`}>
              <div className={`${childClassName} self-center`} />
            </div>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { VerticalCenter, VERTICAL_CENTER_TAB_LABEL };
