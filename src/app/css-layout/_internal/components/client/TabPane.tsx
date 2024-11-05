"use client";

import { FC, ReactNode, useRef } from "react";

import { Anchor, Col, Row } from "antd";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";

import { Block, BlockProps } from "../Block";

type BlockInfo = Omit<BlockProps, "id">;

type TabPaneProps = {
  tabLabel: string;
  blocks: BlockInfo[];
};

const createContent = (tabLabel: string, blocks: BlockInfo[]) => {
  const Blocks: ReactNode[] = [];
  const anchorItems: AnchorLinkItemProps[] = [];

  blocks.forEach((block) => {
    const { title, preserveText, content } = block;
    const blockId = `${tabLabel}_${title}`;

    Blocks.push(
      <Block
        key={blockId}
        id={blockId}
        title={title}
        preserveText={preserveText}
        content={content}
      />,
    );

    anchorItems.push({
      key: blockId,
      href: `#${blockId}`,
      title: title,
    });
  });

  return { Blocks: Blocks, anchorItems: anchorItems };
};

const TabPane: FC<TabPaneProps> = ({ tabLabel, blocks }) => {
  const { Blocks, anchorItems } = createContent(tabLabel, blocks);

  // #region hooks start
  const containerRef = useRef<HTMLDivElement | null>(null);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto p-4 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400"
    >
      <Row gutter={8}>
        <Col span={20}>{Blocks}</Col>
        <Col span={4}>
          <Anchor
            getContainer={() => containerRef.current ?? window}
            items={anchorItems}
          />
        </Col>
      </Row>
    </div>
  );
  // #endregion render functions end
};

export { TabPane };
