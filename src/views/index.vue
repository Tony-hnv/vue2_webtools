<template>
  <div class="index">
    <div class="wyy">
      <router-link to="/wyy" class="link">网易云用户信息查询</router-link>
    </div>
    <div class="tq">
      <router-link to="/wether" class="link" >查询全国天气</router-link>
    </div>
    <div class="blfm">
      <router-link to="/bilibili" class="link" >Bilibili用户信息获取</router-link>
    </div>
    <div class="telno">
      <router-link to="/telnumber" class="link" >号码归属地查询</router-link>
    </div>
    <div class="history">
      <router-link to="/history" class="link" >历史上的今天</router-link>
    </div>
    <div class="MdEditor">
      <router-link to="/md" class="link" >在线MarkDown编辑器</router-link>
    </div>
    <div class="about">
      <router-link to="/about" class="link" >关于</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.index {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  // align-content: space-between;
  // position: absolute;
  min-height: 100vh;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgb(193, 191, 189);
  overflow: hidden;
  .link {
    text-decoration: none;
    display: block;
    height: 190px;
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 15px;
    border-radius: 15px;
    color: black;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: 4px;
    text-align: center;
    line-height: 330px;
  }
  :hover {
    transition: transform .3s, box-shadow .3s;
    transform: translateY(-4px);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .1), 4px 4px 8px rgba(0, 0, 0, 0.1);
  }
   .wyy {
    background: url('../asserts/img/wyy-item.jpg');
    filter:blur(0.6px);
    border-radius: 15px;
    background-size: cover;
    border: 0.01px solid rgb(158, 158, 156);
    overflow: hidden;
    margin-left: 15px;
    margin-top: 5px;
    width: 315px;
    height: 210px;
  }

  .tq {
    background: url('../asserts/img/wether.jpeg');
    filter:blur(0.6px);
    border-radius: 15px;
    background-color: rgb(204,200,199);
    border: 0.01px solid rgb(158, 158, 156);
    // background-size: cover;
    overflow: hidden;
    margin-left: 15px;
    margin-top: 5px;
    width: 315px;
    height: 210px;
  }

  .blfm {
    background: url('../asserts/img/bilifm.jpg');
    background-size: cover;
    background-position: center;
    filter:blur(0.6px);
    border-radius: 15px;
    border: 0.01px solid rgb(158, 158, 156);
    overflow: hidden;
    margin-left: 15px;
    margin-top: 5px;
    width: 315px;
    height: 210px;
  }

  .telno {
    background: url('../asserts/img/telnumber.jpeg');
    background-size: cover;
    // background-position: center center;
    filter:blur(0.6px);
    border-radius: 15px;
    border: 0.01px solid rgb(158, 158, 156);
    overflow: hidden;
    margin-left: 15px;
    margin-top: 5px;
    width: 315px;
    height: 210px;
  }

  .history {
    background: url('../asserts/img/history.jpeg');
    background-size: cover;
    // background-position: center center;
    filter:blur(0.6px);
    border-radius: 15px;
    border: 0.01px solid rgb(158, 158, 156);
    overflow: hidden;
    margin-left: 15px;
    margin-top: 5px;
    width: 315px;
    height: 210px;
    .link {
      color: white
    }
  }

  .MdEditor {
    background: url('../asserts/img/Markdown.png');
    background-size: cover;
    // background-position: center center;
    filter:blur(0.6px);
    border-radius: 15px;
    border: 0.01px solid rgb(158, 158, 156);
    overflow: hidden;
    margin-left: 15px;
    margin-top: 5px;
    width: 315px;
    height: 210px;
    .link {
      color: #fff;
    }
  }

  .about {
    background-size: cover;
    // background-position: center center;
    filter:blur(0.6px);
    border-radius: 15px;
    border: 0.01px solid rgb(158, 158, 156);
    background-color: #fff;
    overflow: hidden;
    margin-left: 15px;
    margin-top: 5px;
    width: 315px;
    height: 210px;
  }
}
</style>
