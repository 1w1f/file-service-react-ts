import { Card, Col, Divider, List, Row, Space } from "antd";
import Title from "antd/lib/skeleton/Title";
import React, { useState } from "react";
import ActionCard from "../../components/ActionCard";
import styles from "./Home.module.less"



export default function Home() {


  // return (<><Row className={styles.actionRow} gutter={[16, 0]} >
  //   <Col span={2}>
  //     <Row className={styles.actionTitle} align="middle" >
  //       信息统计:
  //     </Row>
  //   </Col>
  //   <Col span={5}  >
  //     <Row className={styles.ColRow} >
  //       <Col span={24}>
  //         <Row className={styles.topRow} justify='center' align="bottom">
  //           <span className={styles.span}>
  //             云盘容量
  //           </span>
  //         </Row>
  //       </Col>
  //       <Col span={24}>
  //         <Row className={styles.bottomRow} align='middle' justify='end'>
  //           <span>已使用/总量  80%</span>
  //         </Row>
  //       </Col>
  //     </Row>
  //   </Col>
  //   <Col span={5}>
  //     <Row className={styles.ColRow} >
  //       <Col span={24}>
  //         <Row className={styles.topRow} justify='center' align="bottom">
  //           <span>
  //             操作记录
  //           </span>
  //         </Row>
  //       </Col>
  //       <Col span={24}>
  //         <Row className={styles.bottomRow} justify='end' align="middle">
  //           <span>
  //             近7天内操作数：
  //           </span>
  //         </Row>
  //       </Col>
  //     </Row>
  //   </Col>
  //   <Col span={5} >
  //     <Row className={styles.ColRow} >
  //       <Col span={24}>
  //         <Row className={styles.topRow} justify='center' align="bottom">
  //           <span className={styles.span}>
  //             公共区
  //           </span>
  //         </Row>
  //       </Col>
  //       <Col span={24}>
  //         <Row className={styles.bottomRow} justify='end' align="middle">
  //           <span >
  //             最近上新：1
  //           </span>
  //         </Row>
  //       </Col>
  //     </Row>
  //   </Col>
  //   <Col span={5} >
  //     <Row className={styles.ColRow}>
  //       <Col span={24} >
  //         <Row justify="center" className={styles.topRow} align='bottom' >
  //           <span className={styles.span}>登录记录</span>
  //         </Row>
  //       </Col>
  //       <Col span={24} >
  //         <Row justify="center" className={styles.bottomRow} align="middle">
  //           <span style={{ marginLeft: '0px', color: 'grey' }}>上次登录: 2022/10/11 18:00:59</span>
  //         </Row>
  //       </Col>
  //     </Row>
  //   </Col >
  // </Row >
  // <Divider />


  // useState(["云盘容量",]);
  return (<>
    <div className="grid grid-rows-[25%_75%] bg-red-100 h-full">
      <div className="row-1 bg-yellow-50 grid grid-cols-4">
        <ActionCard title="111" text="ss" containerClassName="bg-red-800" />
        <ActionCard title="111" text="ss" />
        <ActionCard title="111" text="ss" />
        <ActionCard title="111" text="ss" />
      </div>
      <div className="row-2 bg-blue-50" ></div>
    </div>
  </>)
}
