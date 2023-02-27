import { Card, Col, Divider, List, Row, Space } from "antd";
import React from "react";
import styles from "./Home.module.less"



export default function Home() {
  const Topdata = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',

  ];

  return (<><Row className={styles.actionRow} gutter={[16, 0]} >
    <Col span={2}>
      <Row className={styles.actionTitle} align="middle" >
        信息统计:
      </Row>
    </Col>
    <Col span={5}  >
      <Row className={styles.ColRow} >
        <Col span={24}>
          <Row className={styles.topRow} justify='center' align="bottom">
            <span className={styles.span}>
              云盘容量
            </span>
          </Row>
        </Col>
        <Col span={24}>
          <Row className={styles.bottomRow} align='middle' justify='end'>
            <span>已使用/总量  80%</span>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col span={5}>
      <Row className={styles.ColRow} >
        <Col span={24}>
          <Row className={styles.topRow} justify='center' align="bottom">
            <span>
              操作记录
            </span>
          </Row>
        </Col>
        <Col span={24}>
          <Row className={styles.bottomRow} justify='end' align="middle">
            <span>
              近7天内操作数：
            </span>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col span={5} >
      <Row className={styles.ColRow} >
        <Col span={24}>
          <Row className={styles.topRow} justify='center' align="bottom">
            <span className={styles.span}>
              公共区
            </span>
          </Row>
        </Col>
        <Col span={24}>
          <Row className={styles.bottomRow} justify='end' align="middle">
            <span >
              最近上新：1
            </span>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col span={5} >
      <Row className={styles.ColRow}>
        <Col span={24} >
          <Row justify="center" className={styles.topRow} align='bottom' >
            <span className={styles.span}>登录记录</span>
          </Row>
        </Col>
        <Col span={24} >
          <Row justify="center" className={styles.bottomRow} align="middle">
            <span style={{ marginLeft: '0px', color: 'grey' }}>上次登录: 2022/10/11 18:00:59</span>
          </Row>
        </Col>
      </Row>
    </Col >
  </Row >
    <Divider />
    <Row className={styles.bodyRow} >
      <Row className={styles.bodyContent} gutter={[6, 0]} justify='space-around'>
        <Col span={7} className={styles.bodyContentColumn}>
          <Row className={styles.bodyContentRow}>
            <Col span={24}>
              <span className={styles.columnTitle}>
                资源类型占比
              </span>
            </Col>
          </Row>
        </Col>
        <Col span={7} className={styles.bodyContentColumn}>
          <Row className={styles.bodyContentRow} wrap>
            <Col span={24}>
              <span className={styles.columnTitle}>
                热门排行
              </span>
              <div style={{ height: '87%', overflow: 'auto' }}>
                <List bordered style={{ borderRadius: '20px' }}
                  dataSource={Topdata}
                  renderItem={(item, index) =>
                    <List.Item style={index !== Topdata.length - 1 ? { borderBottom: '1px solid #d9d9d9' } : {}}>
                      <span> {item}</span>
                    </List.Item>}>
                </List>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={7} className={styles.bodyContentColumn}>
          <Row className={styles.bodyContentRow}>
            <Col span={24}>
              <span className={styles.columnTitle}>
                回收站
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  </>)
}
