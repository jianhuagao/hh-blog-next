import styled from "styled-components"

export default styled.div`
  background-color:#3d6fd3;
  background:url("img/bluebg.png")  no-repeat  34% 19%;
  padding:70px 0px;
  .con{
    padding:30px 0px;
    text-align:center;
    position:relative;
    .btnLeft{
      position: absolute;
      left:3px;
      top:60%;
      z-index:1000;
    }
    .btnRight{
      position: absolute;
      right:3px;
      top:60%;
      z-index:1000;
    }
    h3{
      color: white;
      margin-bottom:18px;
    }

    .carouselItem{
      display:flex !important;
      justify-content:space-evenly;
      width:100%;
      padding:25px 0px;
    }
    //隐藏轮播图的指示标
    .slick-dots-bottom {
    display: none !important;
    }
    .avatarItem{
      transition: transform .3s cubic-bezier(.645,.045,.355,1),box-shadow .3s cubic-bezier(.645,.045,.355,1);
      cursor: pointer;
      position:relative;
      background: url("img/icon_sprite.png") no-repeat;
      background-size: 556% 378%;
      background-color:white;
    }
    .avatarItem:hover {
      box-shadow: 0 20px 40px #0f2da0;
      transform: translateY(-13px);
    }
    .avatarItemSelect{
      box-shadow: 0 20px 40px #0f2da0;
      transform: translateY(-13px);
    }
  }
`