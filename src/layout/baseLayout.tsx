import { Layout, Menu, Avatar, Popover, Space, Button } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  UserOutlined,
  UnorderedListOutlined,
  CloudOutlined,
  ContainerOutlined,
  BookOutlined
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./baseLayout.module.less"
import "../less/baseLess.less"
import { useUserContext } from "../Context/UserContext";



const { Header, Content, Footer, Sider } = Layout;

export default function () {

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const goRoute = useCallback((routePath: string) => {
    navigate(`${routePath}`);
  }, []);



  const { userName } = useUserContext();

  const userPoperOverContent = useMemo(() => {

    return <Space direction="vertical" align="center">
      <Button type="primary">个人资料</Button>
      <Button danger>退出登录</Button>
    </Space>
  }, [])




  const items = useMemo(() => {
    return [
      {
        key: "/home",
        icon: <UserOutlined />,
        label: "首页",
        onClick: (args: IAntdMenuItemOnClickArgs) => {
          goRoute(args.key);
        },
      },
      {
        key: "cloudDisk",
        icon: <CloudOutlined />,
        label: "我的云盘",
        children: [
          {
            key: "/diskDetail",
            label: "云盘详情",
            icon: <ContainerOutlined />,
            onClick: (args: IAntdMenuItemOnClickArgs) => goRoute(args.key),
          },
          {
            key: "/files",
            icon: <UnorderedListOutlined />,
            label: "文件列表",
            onClick: (args: IAntdMenuItemOnClickArgs) => goRoute(args.key),
          },
        ],
      },
    ];
  }, []);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          className={styles.sider}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div id={styles.siderTitle}>
            <BookOutlined />
            {
              collapsed ? null : <span id={styles.title}>CloudDisk</span>
            }
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[items[0].key]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className={styles.siteLayout}>
          <Header className={styles.header} style={{ padding: 0, height: 52 }}>
            <Popover className={styles.avatarPopoveer} content={userPoperOverContent} align={{ offset: [0, 14] }}
              placement="top">
              <Avatar className={styles.avatar} size={32} icon={<UserOutlined />} />
              <span id={styles.username}>{userName}</span>
            </Popover>
          </Header>
          <Content style={{ margin: 8 }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

