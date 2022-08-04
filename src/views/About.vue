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

<style  scoped>
@keyframes movement {
  0%, 100% {
    background-size:
      130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax;
    background-position:
      -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax;
  }
  25% {
    background-size:
      100vmax 100vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      60vmax 60vmax;
    background-position:
      -60vmax -90vmax,
      50vmax -40vmax,
      0vmax -20vmax,
      -40vmax -20vmax,
      40vmax 60vmax;
  }
  50% {
    background-size:
            80vmax 80vmax,
            110vmax 110vmax,
            80vmax 80vmax,
            60vmax 60vmax,
            80vmax 80vmax;
    background-position:
            -50vmax -70vmax,
            40vmax -30vmax,
            10vmax 0vmax,
            20vmax 10vmax,
            30vmax 70vmax;
  }
  75% {
    background-size:
            90vmax 90vmax,
            90vmax 90vmax,
            100vmax 100vmax,
            90vmax 90vmax,
            70vmax 70vmax;
    background-position:
            -50vmax -40vmax,
            50vmax -30vmax,
            20vmax 0vmax,
            -10vmax 10vmax,
            40vmax 60vmax;
  }
}
#about {
   margin: 0;
  min-height: 100vh;
  background-color: #e493d0;
  background-image:
    radial-gradient(closest-side, rgb(235, 105, 78, 1), rgb(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(243, 11, 164, 1), rgb(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(254, 234, 131, 1), rgb(254, 234, 131, 0)),
    radial-gradient(closest-side, rgb(170, 142, 245, 1), rgb(170, 142, 245, 0)),
    radial-gradient(closest-side, rgb(248, 192, 147, 1), rgb(248, 192, 147, 0));
  background-size:
    130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax;
  background-position:
    -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;

  background-repeat: no-repeat;
  animation: movement 10s linear infinite;
  overflow: hidden;

}

#about::after {
  contain: '';
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(.625rem /* 10/16 */);
}

  .api {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.875rem /* 30/16 */;
    letter-spacing: .1875rem /* 3/16 */;
    color: transparent;
    text-shadow:
      0 0 .0625rem /* 1/16 */ rgba(255, 255, 255, 0.6),
      0 .25rem /* 4/16 */ .25rem /* 4/16 */ rgba(0, 0, 0, .05);
  }
  a {
    text-decoration: none;
    color: transparent;
    text-shadow:
      0 0 .0625rem /* 1/16 */ rgba(255, 255, 255, 0.6),
      0 .25rem /* 4/16 */ .25rem /* 4/16 */ rgba(0, 0, 0, 0.192);
  }

  .footer {
    position: relative;

  }
  .index {
      position: fixed;
      left: 47%;
      top: 866px;
      color: transparent;
    text-shadow:
      0 0 .0625rem /* 1/16 */ rgba(255, 255, 255, 0.6),
      0 .25rem /* 4/16 */ .25rem /* 4/16 */ rgba(0, 0, 0, .05);
      text-decoration: none;
    }

</style>
