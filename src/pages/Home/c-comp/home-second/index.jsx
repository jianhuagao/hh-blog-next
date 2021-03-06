import React, { memo } from "react";
import QueueAnim from "rc-queue-anim";
import { Typography } from "antd";
import PageWrap,{ButtonWrap } from "./style";

const { Title, Text } = Typography;

export default memo(function index() {
  return (
    <PageWrap>
      <QueueAnim duration="1500" type="bottom">
        <div className="page midCardContent" key="midCard">
          <div className="midCard">
            <div className="top">
              <Title level={4}>原创</Title>
              <Text type="secondary">Original Blog</Text>
            </div>
            <ButtonWrap>
              <img
                src="img/home-Original.svg"
                alt=""
              />
            </ButtonWrap>
          </div>
          <div className="midCard">
            <div className="top">
              <Title level={4}>转载</Title>
              <Text type="secondary">Reprinted blog</Text>
            </div>
            <ButtonWrap>
              <img
                src="img/home-Reprinted.svg"
                alt=""
              />
            </ButtonWrap>
          </div>
          <div className="midCard">
            <div className="top">
              <Title level={4}>资源</Title>
              <Text type="secondary">Resources</Text>
            </div>
            <ButtonWrap>
              <img
                src="img/home-Resources.svg"
                alt=""
              />
            </ButtonWrap>
          </div>
          <div className="midCard">
            <div className="top">
              <Title level={4}>生活</Title>
              <Text type="secondary">Life</Text>
            </div>
            <ButtonWrap>
              <img src="img/home-Life.svg" alt="" />
            </ButtonWrap>
          </div>
        </div>
      </QueueAnim>
    </PageWrap>
  );
});
