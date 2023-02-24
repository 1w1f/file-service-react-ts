import { Card, Col, Row, Space } from "antd";
import React from "react";

export default function Home() {
  return <Row justify="center" >
    <Col span={8} >

      <Card hoverable>上次登录</Card>
    </Col>

    <Col span={8}>
      <Card hoverable >
        <Space>
          <div>
            云盘容量
          </div>
        </Space>
      </Card>
    </Col>

    <Col span={8}>
      <Card hoverable>操作记录</Card>
    </Col>
  </Row >;
}
