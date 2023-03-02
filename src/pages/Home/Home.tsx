import { Card, Col, Divider, List, Row, Space } from "antd";
import Title from "antd/lib/skeleton/Title";
import React, { useState } from "react";
import ActionCard from "../../components/ActionCard";
import styles from "./Home.module.less"

const cardInfo: ActionCardInfo[] = [{ title: '云盘容量', text: "已使用/总量 60%" }, { title: '操作记录', text: '近7天内操作数：' }, { title: '公共区', text: '最近上新：1' }, {
  title: '登录记录', text: '上次登录：22/10/11 18: 00: 59'
}]

export default function Home() {
  const [cardInfoState, setCarInfoState] = useState(cardInfo);
  return (<>
    <div className="grid mt-4 grid-rows-[13%_87%] gap-y-5  h-full">
      <div className="row-1 gap-x-7  grid grid-cols-4">
        {cardInfoState.map(item => <ActionCard title={item.title} text={item.text} containerClassName="bg-yellow-800 mx-5" />)}
      </div>
      <div className="row-2 bg-blue-100 mt-6" >
        1
      </div>
    </div>
  </>)
}



