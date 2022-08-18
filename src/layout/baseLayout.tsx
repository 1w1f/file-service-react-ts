import { Layout, Menu } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  UserOutlined,
  UnorderedListOutlined,
  CloudOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

interface IAntdMenuItemOnClickArgs {
  item: any;
  key: any;
  keyPath: any;
  domEvent: any;
}

const { Header, Content, Footer, Sider } = Layout;

export default function () {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const goRoute = useCallback((routePath: string) => {
    navigate(`${routePath}`);
  }, []);
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
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              alignContent: "center",
            }}
          >
            <span>云盘</span>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[items[0].key]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0 }} />
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
