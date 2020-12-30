import React, { memo, useEffect, useState } from "react";
import Link from 'next/link'
import { Menu, Avatar, Divider, Button, Tooltip } from "antd";
import { useRouter } from 'next/router'
import {
  HomeOutlined,
  GiftOutlined,
  BookOutlined,
  GithubOutlined,
  SketchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import  PageWrap  from "./style";

export default memo(function TopMenu() {
  //hooks
  //当前页面路径
  const [selectKeys, setSelectKeys] = useState("/Home");
  //router hooks
  let location = useRouter()
  useEffect(() => {
    setSelectKeys(location.pathname)
  }, [location]);
  return (
    <PageWrap page={location.pathname}>
      <div className="content page">
        <div key="left" className="c_left">
          <Avatar
            size={44}
            icon={<UserOutlined />}
            src="https://himg.bdimg.com/sys/portraitn/item/b566d1f3d0a1f6cf159b"
          />
          <Divider type="vertical" style={{ fontSize: 30 }} />
          <span>Happy hacking Blog</span>
        </div>
        <div key="right" className="c_right">
          <div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={selectKeys}
              selectedKeys={selectKeys}
            >
              <Menu.Item key="/Home" icon={<HomeOutlined />}>
                <Link href="/Home">Home</Link>
              </Menu.Item>
              <Menu.Item key="/Blog" icon={<BookOutlined />}>
                <Link href="/Blog">Blog</Link>
              </Menu.Item>
              <Menu.Item key="/Find" icon={<GiftOutlined />}>
                <Link href="/Find">Find</Link>
              </Menu.Item>
              <Menu.Item key="/AboutMe" icon={<SketchOutlined />}>
                <Link href="/AboutMe">AboutMe</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="top-btn">
            <Tooltip
              title="源码在这里~"
              placement="bottomRight"
              color="#108ee9"
              defaultVisible
            >
              <Button
                shape="circle"
                icon={<GithubOutlined />}
                href="https://github.com/jianhuagao/hh-blog-react"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </PageWrap>
  );
});
