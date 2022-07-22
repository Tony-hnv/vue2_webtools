<template>
  <div class="index-container">
    <span>Web Tools</span>
    <div class="index">
      <div class="wyy" name='查询网易云用户信息' ref="wyy" @mouseenter="getWyyName()" @mouseleave="clear()" @click="toWyy()">
      </div>
      <div class="tq" name='查询今日天气' ref="tq" @mouseleave="clear()" @mouseenter="getTqName()"  @click="toWether()">
      </div>
      <div class="blfm" name='查询b站用户信息' ref="blfm" @mouseenter="getBlfmName()" @mouseleave="clear()"  @click="toBilibili()">
      </div>
      <div class="telno" name='查询手机号信息' ref="telno" @mouseenter="getTelnoName()" @mouseleave="clear()"  @click="toTel()">
      </div>
      <div class="history" name='历史上的今日' ref="history" @mouseenter="getHistoryName()" @mouseleave="clear()" @click="toHistory()">
      </div>
      <div class="MdEditor" name='在线md编辑器' ref="mdEditor" @mouseenter="getMdEditorName()" @mouseleave="clear()" @click="toMd()">
      </div>
      <div class="about" name='本站关于页面' ref="about" @mouseenter="getAboutName()" @mouseleave="clear()" @click="toAbout()">
      </div>
    </div>
    <span v-text='title'></span>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: '请选择一个功能'
    }
  },
  methods: {
    clear () {
      this.title = '请选择一个功能'
    },
    getWyyName () {
      this.title = this.$refs.wyy.getAttribute('name')
    },
    getTqName () {
      this.title = this.$refs.tq.getAttribute('name')
    },
    getBlfmName () {
      this.title = this.$refs.blfm.getAttribute('name')
    },
    getTelnoName () {
      this.title = this.$refs.telno.getAttribute('name')
    },
    getHistoryName () {
      this.title = this.$refs.history.getAttribute('name')
    },
    getMdEditorName () {
      this.title = this.$refs.mdEditor.getAttribute('name')
    },
    getAboutName () {
      this.title = this.$refs.about.getAttribute('name')
    },
    toWyy () {
      this.$router.push('/wyy')
    },
    toBilibili () {
      this.$router.push('/bilibili')
    },
    toWether () {
      this.$router.push('/wether')
    },
    toTel () {
      this.$router.push('/telnumber')
    },
    toHistory () {
      this.$router.push('/history')
    },
    toMd () {
      this.$router.push('/md')
    },
    toAbout () {
      this.$router.push('/about')
    }
  }
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
      text-shadow: 1rem 1rem 1rem rgba(63, 91, 233, 0.741);
    }
  }
}
.index {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  :hover {
    // filter:blur(.0625rem /* 1/16 */);
    transition: transform .5s, box-shadow .5s;
    transform: translateY(-.3125rem /* 5/16 */);
    flex-basis: 30%;
  }
   .wyy {
    background: url('../asserts/img/wyy-item.jpg');
    background-size: cover;
    border-radius: .9375rem /* 15/16 */;
    background-size: cover;
    border: .25rem /* 4/16 */ solid #fff;
    overflow: hidden;
    margin-left: .9375rem /* 15/16 */;
    margin-top: .3125rem /* 5/16 */;
    width: 17.5rem /* 280/16 */;
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
    width: 17.5rem /* 280/16 */;
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
    width: 17.5rem /* 280/16 */;
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
    width: 17.5rem /* 280/16 */;
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
    width: 17.5rem /* 280/16 */;
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
    width: 17.5rem /* 280/16 */;
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
    // margin-right: .9375rem /* 15/16 */;
    margin: .3125rem /* 5/16 */ .9375rem /* 15/16 */ 0 .9375rem /* 15/16 */;
    width: 17.5rem /* 280/16 */;
    height: 20rem /* 320/16 */;
    object-fit: cover;
    transition: .5s;
    .link {
      color: #fff;
    }
  }
}
</style>
