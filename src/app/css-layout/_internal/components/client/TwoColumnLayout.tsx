"use client";

import Image from "next/image";

import { FC } from "react";

import { Space, Typography } from "antd";

import { SeeLink } from "./SeeLink";
import { TabPane } from "./TabPane";

/** @tw */
const parentClassName = "clearfix bg-[#eebefa]";

/** @tw */
const childLeftClassName =
  "h-[400px] w-[200px] bg-[#f783ac] text-center text-3xl/[400px]";

/** @tw */
const childRightClassName = "h-[400px] bg-[#c0eb75] text-3xl/[400px]";

const TWO_COLUMN_LAYOUT_TAB_LABEL = "两列布局";

type TwoColumnLayoutProps = unknown;

const TwoColumnLayout: FC<TwoColumnLayoutProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={TWO_COLUMN_LAYOUT_TAB_LABEL}
      blocks={[
        {
          title: TWO_COLUMN_LAYOUT_TAB_LABEL,
          preserveText: `
          // COMMON CODE
          <!-- clearfix 解决高度塌陷 -->
          <div class="container clearfix">
            <div class="left">定宽</div>
            <div class="right">自适应</div>
          </div>

          .container {
            background-color: #eebefa;
          }
          .left {
            height: 400px;
            width: 200px;
            background-color: #f783ac;
            font-size: 1.875rem
            line-height: 400px;
            text-align: center;
          }
          .right {
            height: 400px;
            background-color: #c0eb75;
            font-size: 1.875rem;
            line-height: 400px;
          }
          /* 清除浮动 */
          // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear#%E5%B0%9D%E8%AF%95%E4%B8%80%E4%B8%8B
          .clearfix::after {
            content: '';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
          `,
          content: (
            <Space direction="vertical" size="large">
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-23" />
              <Typography.Text className="!text-xl">
                两列布局就是一列定宽(也有可能由子元素决定宽度)，一列自适应的布局。
              </Typography.Text>
              <Typography.Text mark strong className="!text-xl">
                注意：1 2 3方案左边列必须定宽，才可以实现
              </Typography.Text>
              <Image
                src="/images/twoColumnLayout.webp"
                height={300}
                width={770}
                alt="twoColumnLayout"
              />
            </Space>
          ),
        },
        {
          title: "1.float+calc()函数完成左列定宽右列自适应",
          preserveText: `
          1.左边列开启浮动
          2.右边列开启浮动
          3.右边列宽度为父级 100%减去左列的宽度

          .left {
            /* 左边列开启浮动 */
            float: left;
          }
          .right {
            /* 右边列开启浮动 */
            float: left;
            /* 宽度减去左列的宽度 */
            width: calc(100% - 200px);
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childLeftClassName} float-left`}>定宽</div>
              <div
                className={`${childRightClassName} float-left w-[calc(100%-200px)]`}
              >
                自适应
              </div>
            </div>
          ),
        },
        {
          title: "2.float+margin-left完成左列定宽右列自适应",
          preserveText: `
          1.左边列开启浮动
          2.通过外边距的方式使该容器的左边有左边列容器的宽度的外边距

          .left {
            /* 左边列开启浮动 */
            float: left;
          }
          .right {
            /* 通过外边距的方式使该容器的左边有200px */
            margin-left: 200px;
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childLeftClassName} float-left`}>定宽</div>
              <div className={`${childRightClassName} ml-[200px]`}>自适应</div>
            </div>
          ),
        },
        {
          title: "3.absolute+margin-left完成左列定宽右列自适应",
          preserveText: `
          1.开启定位脱离文档流
          2.通过外边距的方式使该容器的左边有左边列容器的宽度的外边距

          .left {
            /* 开启定位脱离文档流 */
            position: absolute;
          }
          .right {
            /* 通过外边距的方式使该容器的左边有200px */
            margin-left: 200px;
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childLeftClassName} absolute`}>定宽</div>
              <div className={`${childRightClassName} ml-[200px]`}>自适应</div>
            </div>
          ),
        },
        {
          title: "4.float+overflow完成左列定宽右列自适应",
          preserveText: `
          1.左侧元素开始浮动
          2.右侧自适应元素设置overflow会创建一个BFC完成自适应

          .left {
            /* 1. 左侧元素开始浮动 */
            float: left;
          }
          .right {
            /* 2. 右侧自适应元素设置 overflow 会创建一个BFC 完成自适应 */
            overflow: hidden;
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childLeftClassName} float-left`}>定宽</div>
              <div className={`${childRightClassName} overflow-hidden`}>
                自适应
              </div>
            </div>
          ),
        },
        {
          title: "5.Flex方案",
          preserveText: `
          .container {
            display: flex;
          }
          .right {
            /* flex: 1; 表示 flex-grow: 1; 即该项占所有剩余空间 */
            flex: 1;
          }
          `,
          content: (
            <div className={`${parentClassName} flex`}>
              <div className={`${childLeftClassName}`}>定宽</div>
              <div className={`${childRightClassName} flex-1`}>自适应</div>
            </div>
          ),
        },
        {
          title: "6.Grid方案",
          preserveText: `
          通过 Grid 布局实现该功能主要是通过template属性实现

          .container {
            display: grid;
            /* 将其划分为两列，其中一列由本身宽度决定，一列占剩余宽度*/
            grid-template-columns: auto 1fr;
          }
          `,
          content: (
            <div className={`${parentClassName} grid grid-cols-[auto,1fr]`}>
              <div className={`${childLeftClassName}`}>定宽</div>
              <div className={`${childRightClassName}`}>自适应</div>
            </div>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { TwoColumnLayout, TWO_COLUMN_LAYOUT_TAB_LABEL };
