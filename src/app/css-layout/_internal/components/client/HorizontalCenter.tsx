"use client";

import Image from "next/image";

import { FC } from "react";

import { Space } from "antd";

import { SeeLink } from "./SeeLink";
import { TabPane } from "./TabPane";

/** @tw */
const parentClassName = "bg-[#ff8787]";

/** @tw */
const childClassName = "h-[300px] w-[300px] bg-[#e599f7]";

const HORIZONTAL_CENTER_TAB_LABEL = "水平居中";

type HorizontalCenterProps = unknown;

const HorizontalCenter: FC<HorizontalCenterProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={HORIZONTAL_CENTER_TAB_LABEL}
      blocks={[
        {
          title: HORIZONTAL_CENTER_TAB_LABEL,
          preserveText: `
          // COMMON CODE
          <div class="parent">
            <div class="child"></div>
          </div>

          .parent { background: #ff8787; }
          .child { height: 300px; width: 300px; background: #e599f7; }
          `,
          content: (
            <Space orientation="vertical" size="large">
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-0" />
              <Image
                src="/images/horizontalCenter.webp"
                height={300}
                width={770}
                alt="horizontalCenter"
              />
            </Space>
          ),
        },
        {
          title: "1.使用text-align属性",
          preserveText: `
          若元素为行内块级元素，也就是display: inline-block的元素，
          可以通过为其父元素设置text-align: center实现水平居中。

          .parent {
            /* 对于子级为 display: inline-block; 可以通过 text-align: center; 实现水平居中 */
            text-align: center;

            // clear-inline-block-gap
            // @see https://www.cnblogs.com/Ry-yuan/p/6848197.html
            font-size: 0
          }

          .child {
            display: inline-block;
          }
          `,
          content: (
            <div
              className={`${parentClassName} clear-inline-block-gap text-center`}
            >
              <div className={`${childClassName} inline-block`} />
            </div>
          ),
        },
        {
          title: "2.定宽块级元素水平居中(方法一)",
          preserveText: `
          对于定宽的的块级元素实现水平居中，最简单的一种方式就是margin: 0 auto;
          但是值得注意的是一定需要设置宽度。

          .child {
            /* 对于定宽的子元素，直接 margin:0 auto; 即可实现水平居中 */
            margin: 0 auto;
          }
          `,
          content: (
            <div className={parentClassName}>
              <div className={`${childClassName} mx-auto my-0`} />
            </div>
          ),
        },
        {
          title: "3.定宽块级元素水平居中(方法二)",
          preserveText: `
          对于开启定位的元素，可以通过left属性 和margin实现。

          .child {
            /* 开启定位 */
            position: relative;
            left: 50%;
            /* margin-left 为 负的宽度的一半 */
            margin-left: -150px;
          }
          `,
          content: (
            <div className={parentClassName}>
              <div
                className={`${childClassName} relative left-1/2 -ml-[150px]`}
              />
            </div>
          ),
        },
        {
          title: "4.定宽块级元素水平居中(方法三)",
          preserveText: `
          当元素开启决定定位或者固定定位时，left属性和right属性一起设置就会拉伸元素的宽度,
          再配合width属性与margin属性就可以实现水平居中。

          .parent {
            position: relative;
            height: 300px;
          }

          .child {
            /* 开启定位 父相子绝 */
            position: absolute;
            /* 水平拉满屏幕 */
            left: 0;
            right: 0;
            /* 拉满屏幕之后设置宽度，最后通过 margin 实现水平居中 */
            margin: auto;
          }
          `,
          content: (
            <div className={`${parentClassName} relative h-[300px]`}>
              <div
                className={`${childClassName} absolute right-0 left-0 m-auto`}
              />
            </div>
          ),
        },
        {
          title: "5.定宽块级元素水平居中(方法四)",
          preserveText: `
          当元素开启决定定位或者固定定位时，left属性和transform属性即可实现水平居中。

          .parent {
            position: relative;
          }

          .child {
            /* 开启定位 */
            position: absolute;
            /* 该方法类似于 left 于 -margin 的用法，但是该方法不需要手动计算宽度。 */
            left: 50%;
            transform: translateX(-50%);
          }
          `,
          content: (
            <div className={`${parentClassName} relative h-[300px]`}>
              <div
                className={`${childClassName} absolute left-1/2 translate-x-[-50%]`}
              />
            </div>
          ),
        },
        {
          title: "6.Flex方案",
          preserveText: `
          通过Flex可以有很多方式实现这个居中布局的效果。

          .parent {
            height: 300px;
            /* 开启 Flex 布局 */
            display: flex;
            /* 通过 justify-content 属性实现居中 */
            justify-content: center;
          }

          .child {
            /* 或者 子元素 margin: auto*/
            margin: auto;
          }
          `,
          content: (
            <div className={`${parentClassName} flex justify-center`}>
              <div className={`${childClassName}`} />
            </div>
          ),
        },
        {
          title: "7.Grid方案",
          preserveText: `
          通过Grid实现居中布局比通过Flex实现的方式更多一些。

          .parent {
            /* 开启 Grid 布局 */
            display: grid;
            /* 方法一 */
            justify-items: center;
            /* 方法二 */
            justify-content: center;
          }

          .child {
            /* 方法三 子元素 margin: auto*/
            margin: auto;
          }
          `,
          content: (
            <div className={`${parentClassName} grid justify-items-center`}>
              <div className={`${childClassName}`} />
            </div>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { HorizontalCenter, HORIZONTAL_CENTER_TAB_LABEL };
