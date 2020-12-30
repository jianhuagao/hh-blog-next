import React, { memo } from "react";
import Head from "next/head";
import TopMenu from "../top-menu"; //css
//TOP按钮
import { BackTop } from "antd";
//骨架屏
// import SkeletonComp from "@c/skeleton";
import  PageWrap  from "./style";

export default memo(function index({ children }) {
  return (
    <PageWrap>
      <Head>
        <title>(nextJs)hh-blog</title>
      </Head>
      <BackTop />
      <div className="main-top home-page-wrapper">
        <TopMenu />
      </div>
      <div className="main-content home-page-wrapper">{children}</div>
    </PageWrap>
  );
});
