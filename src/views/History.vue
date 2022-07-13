<template>
  <div class="history-container" v-loading="loading">
    <p class="date">{{ date }}</p>
    <div class="box">
      <p class="title">历史上的今天:</p>
      <p class="article" v-text="article"></p>
      <el-button type="primary" class="button" :disabled="isShow" @click="getHistoryToday()">刷新</el-button>
    </div>
    <div class="footer">
      <router-link class="about" to="/about">关于</router-link>
      <router-link class="index" to="/index">返回首页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getHistoryInToday } from '../api/lishi'

export default {
  data () {
    return {
      article: '',
      weekdays: '',
      date: '', // 实时时间
      loading: true,
      isShow: false
    }
  },
  created () {
    // this.setNowTime()
    this.getHistoryToday()
  },
  methods: {
    async getHistoryToday () {
      this.isShow = true
      this.loading = true
      try {
        const data = await getHistoryInToday()
        console.log(data)
        if (data.status === 200) {
          this.article = data.data
        }
      } catch (error) {
        alert('网页出错！')
      } finally {
        this.loading = false
        this.isShow = false
      }
    },
    setNowTime () {
      const val = new Date()
      const year = val.getFullYear()
      const month = val.getMonth() + 1
      const day = val.getDate()
      var hours = val.getHours()
      var minutes = val.getMinutes()
      var seconds = val.getSeconds()
      var weekdays = val.getDay()
      var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      var weekday = week[weekdays]
      this.date = year + '年' + month + '月' + day + '日  ' + weekday + '   ' + hours + '时' + minutes + '分' + seconds + '秒'
    }

  },
  mounted () {
    // 创建定时器更新最新的时间
    this.setTime = setInterval(() => {
      this.setNowTime()
    }, 1000)
  },
  beforeDestroy: function () {
  // 实例销毁前青出于定时器
    if (this.setTime) {
      clearInterval(this.setNowTime)
    }
  }
}
</script>

<style lang="less" scoped>
.history-container {
  position: relative;
  background: url('../asserts/img/history-bg.jpeg');
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;

  .date {
    position: absolute;
    background-color: rgba(100, 95, 95, 0.226);
    color: aliceblue;
    display: block;
    right: 0;
    font-size: 20px;
  }
  .box {
    background-color: rgba(100, 95, 95, 0.226);
    padding-top: 30%;
    min-height: 100vh;
  }

  .title {
    margin-bottom: 40px;
    font-size: 50px;
    text-align: center;
  }
  .article {
    font-size: 39px;
    text-align: center;
    margin-bottom: 40px;
    color: white;
  }
  .button {
    margin-left: 46.5%;
  }

  .footer {
    position: relative;
    .about {
      position: fixed;
      left: 49%;
      top: 840px;
      color: white;
    }
    .index {
      position: fixed;
      left: 47%;
      top: 860px;
      color: white;
    }
  }
}
</style>
