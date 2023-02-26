import { Card, Col, Divider, Row, Space } from "antd";
import React from "react";
import styles from "./Home.module.less"



export default function Home() {


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
    <Row className={styles.bodyRow}>
      <Row className={styles.bodyContent} gutter={[12, 0]}>
        <Col span={8} >
          <Row>
            1111
          </Row>
        </Col>
        <Col span={8} >
          <Row>
            1111
          </Row>
        </Col>
        <Col span={8} >
          <Row>
            1111
          </Row>
        </Col>
      </Row>
    </Row>
  </>)



}
