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
const childContentClassName =
  "h-[400px] bg-[#d9480f] text-center text-3xl/[400px]";

/** @tw */
const childRightClassName =
  "h-[400px] w-[200px] bg-[#c0eb75] text-center text-3xl/[400px]";

const THREE_COLUMN_LAYOUT_TAB_LABEL = "三列布局";

type ThreeColumnLayoutProps = unknown;

const ThreeColumnLayout: FC<ThreeColumnLayoutProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <TabPane
      tabLabel={THREE_COLUMN_LAYOUT_TAB_LABEL}
      blocks={[
        {
          title: THREE_COLUMN_LAYOUT_TAB_LABEL,
          preserveText: `
          // COMMON CODE
          <!-- clearfix 解决高度塌陷 -->
          <div class="container clearfix">
            <div class="left">左</div>
            <div class="content">内容</div>
            <div class="right">右</div>
          </div>

          .container {
            background-color: #eebefa;
          }
          .left {
            height: 400px;
            width: 200px;
            background-color: #f783ac;
          }
          .content {
            height: 400px;
            background-color: #d9480f;
          }
          .right {
            height: 400px;
            width: 200px;
            background-color: #c0eb75;
          }

          .left,
          .content,
          .right {
            font-size: 1.875rem
            line-height: 400px;
            text-align: center;
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
              <SeeLink openUrl="https://juejin.cn/post/7028962991345254407#heading-30" />
              <Typography.Text className="!text-xl">
                三列布局主要分为两种：
                <br />
                第一种是前两列定宽，最后一列自适应，这一种本质上与两列布局没有什么区别，可以参照两列布局实现。
                <br />
                第二种是前后两列定宽，中间自适应
              </Typography.Text>
              <Image
                src="/images/threeColumnLayout.webp"
                height={300}
                width={770}
                alt="threeColumnLayout"
              />
            </Space>
          ),
        },
        {
          title: "1.通过float实现(一)",
          preserveText: `
          1.为了完成效果需要调整HTML结构，调整后如下：
          <div class="container clearfix">
            <div class="left">左</div>
            <div class="right">右</div>
            <div class="content">内容</div>
          </div>

          2.左列容器开启左浮动
          3.右列容器开启右浮动
          4.自适应元素设置overflow会创建一个BFC完成自适应

          .left {
            /* 1. 左列容器开启左浮动 */
            float: left;
          }
          .content {
            /* 自适应元素设置 overflow 会创建一个BFC 完成自适应 */
            overflow: hidden;
          }
          .right {
            /* 2. 右列容器开启右浮动 */
            float: right;
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childLeftClassName} float-left`}>左</div>
              <div className={`${childRightClassName} float-right`}>右</div>
              <div className={`${childContentClassName} overflow-hidden`}>
                内容
              </div>
            </div>
          ),
        },
        {
          title: "2.通过float实现(二)",
          preserveText: `
          1.为了完成效果需要调整HTML结构，调整后如下：
          <div class="container clearfix">
            <div class="left">左</div>
            <div class="right">右</div>
            <div class="content">内容</div>
          </div>

          2.左列容器开启左浮动
          3.右列容器开启右浮动
          4.使中间自适应的宽度为父级容器减去两个定宽的列
          5.通过外边距的方式使该容器的左边有左边列容器的宽度的外边距

          .left {
            /* 1. 左列容器开启左浮动 */
            float: left;
          }
          .content {
            /* 3. 使中间自适应的宽度为父级容器减去两个定宽的列 */
            width: calc(100% - 400px);
            /* 4.通过外边距的方式使该容器的左边有200px */
            margin-left: 200px;
          }
          .right {
            /* 2. 右列容器开启右浮动 */
            float: right;
          }
          `,
          content: (
            <div className={`${parentClassName}`}>
              <div className={`${childLeftClassName} float-left`}>左</div>
              <div className={`${childRightClassName} float-right`}>右</div>
              <div
                className={`${childContentClassName} w-[calc(100%-400px) ml-[200px]`}
              >
                内容
              </div>
            </div>
          ),
        },
        {
          title: "3.通过position实现",
          preserveText: `
          1.使子元素相对于容器元素定位
          2.左右两列脱离文档流，并通过偏移的方式到达自己的区域
          3.使中间自适应的宽度为父级容器减去两个定宽的列
          4.通过外边距将容器往内缩小

          .container {
            /* 1. 使子元素相对于本元素定位 */
            position: relative;
          }
          .left {
            /* 2. 左右两列脱离文档流，并通过偏移的方式到达自己的区域 */
            position: absolute;
            left: 0;
            top: 0;
          }
          .content {
            /* 3. 使中间自适应的宽度为父级容器减去两个定宽的列 */
            width: calc(100% - 400px);
            /* 4. 通过外边距将容器往内缩小 */
            margin-right: 200px;
            margin-left: 200px;
          }
          .right {
            position: absolute;
            right: 0;
            top: 0;
          }
          `,
          content: (
            <div className={`${parentClassName} relative`}>
              <div className={`${childLeftClassName} absolute left-0 top-0`}>
                左
              </div>
              <div
                className={`${childContentClassName} w-[calc(100%-400px) mx-[200px]`}
              >
                内容
              </div>
              <div className={`${childRightClassName} absolute right-0 top-0`}>
                右
              </div>
            </div>
          ),
        },
        {
          title: "4.Flex方案",
          preserveText: `
          .container {
            display: flex;
          }
          .content {
            /* flex: 1; 表示 flex-grow: 1; 即该项占所有剩余空间 */
            flex: 1;
          }
          `,
          content: (
            <div className={`${parentClassName} flex`}>
              <div className={`${childLeftClassName}`}>左</div>
              <div className={`${childContentClassName} flex-1`}>内容</div>
              <div className={`${childRightClassName}`}>右</div>
            </div>
          ),
        },
        {
          title: "5.Grid方案",
          preserveText: `
          通过 Grid 布局实现该功能主要是通过 template 属性实现。

          .container {
            display: grid;
            /* 将其划分为三列，其中两列由本身宽度决定，一列占剩余宽度*/
            grid-template-columns: auto 1fr auto;
          }
          `,
          content: (
            <div
              className={`${parentClassName} grid grid-cols-[auto,1fr,auto]`}
            >
              <div className={`${childLeftClassName}`}>左</div>
              <div className={`${childContentClassName}`}>内容</div>
              <div className={`${childRightClassName}`}>右</div>
            </div>
          ),
        },
      ]}
    />
  );
  // #endregion render functions end
};

export { ThreeColumnLayout, THREE_COLUMN_LAYOUT_TAB_LABEL };
