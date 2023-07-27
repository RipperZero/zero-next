import { FC } from "react";

import { Anchor, Col, Row } from "antd";

type TestServerComponentProps = {};

const TestServerComponent: FC<TestServerComponentProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="h-screen">
      <Row className="h-full" gutter={8}>
        <Col span={22}>
          <div id="part-1" className="h-1/2 bg-red-600" />
          <div id="part-2" className="h-1/2 bg-orange-600" />
          <div id="part-3" className="h-1/2 bg-lime-600" />
        </Col>
        <Col span={2}>
          <Anchor
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Part 3",
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
  // #endregion render functions end
};

export default TestServerComponent;
