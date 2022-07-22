<template>
  <div id="about">
    <p class="api">接口Api地址:<a href="https://tenapi.cn">https://tenapi.cn</a></p>
    <div class="footer">
      <router-link class="index" to="/index">返回首页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#about {
  .api {
    display: block;
    margin: 10% 45%;
    width: 100%;
  }
  .footer {
    position: relative;
    .index {
      position: fixed;
      left: 47%;
      top: 866px;
      color: black;
      text-decoration: none;
    }
  }
}

</style>
