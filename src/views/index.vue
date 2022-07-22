<template>
  <div class="index-container">
    <span>Web Tools</span>
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.index-container {
  // 设置背景为渐变色
  background: linear-gradient(to right, #7dd9f2a9, #2972e6db);
  min-height: 100vh;
  overflow: hidden;
  span {
    display: block;
    color: #fff;
    font-size: 3rem;
    margin-left: 43%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    &:hover {
      color: #fff;
      text-shadow: 1rem 1rem 1rem skyblue;
    }
  }
}
.index {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  .link {
    text-decoration: none;
    display: block;
    height: 11.875rem /* 190/16 */;
    width: 18.75rem /* 300/16 */;
    height: 12.5rem /* 200/16 */;
    margin-bottom: .625rem /* 10/16 */;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: .9375rem /* 15/16 */;
    border-radius: .9375rem /* 15/16 */;
    color: black;
    font-size: 1.4375rem /* 23/16 */;
    font-weight: 50rem /* 800/16 */;
    letter-spacing: .25rem /* 4/16 */;
    text-align: center;
    line-height: 20.625rem /* 330/16 */;
  }
  :hover {
    transition: transform .3s, box-shadow .3s;
    transform: translateY(-4px);
    flex-basis: 40%;
  }
   .wyy {
    background: url('../asserts/img/wyy-item.jpg');
    background-size: cover;
    filter:blur(.0375rem /* 0.6/16 */);
    border-radius: .9375rem /* 15/16 */;
    background-size: cover;
    border: .25rem /* 4/16 */ solid #fff;
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    // width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
  }

  .tq {
    background: url('../asserts/img/wether.jpeg');
    background-size: cover;
    filter:blur(.0375rem /* 0.6/16 */);
    border-radius: .9375rem /* 15/16 */;
    background-color: rgb(204,200,199);
    border: .25rem /* 4/16 */ solid #fff;
    // background-size: cover;
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    // width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
  }

  .blfm {
    background: url('../asserts/img/bilifm.jpg');
    background-size: cover;
    background-position: center;
    filter:blur(.0375rem /* 0.6/16 */);
    border-radius: .9375rem /* 15/16 */;
    border: .25rem /* 4/16 */ solid #fff;
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    // width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
  }

  .telno {
    background: url('../asserts/img/telnumber.jpeg');
    background-size: cover;
    // background-position: center center;
    filter:blur(.0375rem /* 0.6/16 */);
    border-radius: .9375rem /* 15/16 */;
    border: .25rem /* 4/16 */ solid #fff;
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    // width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
  }

  .history {
    background: url('../asserts/img/history.jpeg');
    background-size: cover;
    // background-position: center center;
   filter:blur(.0375rem /* 0.6/16 */);
    border-radius: .9375rem /* 15/16 */;
    border: .25rem /* 4/16 */ solid #fff;
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    // width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
    .link {
      color: white
    }
  }

  .MdEditor {
    background: url('../asserts/img/Markdown.png');
    background-size: cover;
    // background-position: center center;
    filter:blur(.0375rem /* 0.6/16 */);
    border-radius: .9375rem /* 15/16 */;
    border: .25rem /* 4/16 */ solid #fff;
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    // width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
    .link {
      color: #fff;
    }
  }

  .about {
    background-size: cover;
    // background-position: center center;
    filter:blur(.0375rem /* 0.6/16 */);
    border-radius: .9375rem /* 15/16 */;
    border: .25rem /* 4/16 */ solid #fff;
    background-color: rgba(0, 0, 0, 0.679);
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    // width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
    .link {
      color: #fff;
    }
  }
}
</style>
