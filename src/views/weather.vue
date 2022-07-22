<template>
    <div class="body" v-loading="loading" :style="{ backgroundImage:'url('+ bgi +')' }">
    <span class="title">全国城市天气预报查询</span>
    <el-container class="container">
        <el-input
          class="input"
          placeholder="请输入内容"
          v-model="address"
          @keyup.enter.native="search()"
        >
      </el-input>
      <el-row class="button">
        <el-button type="primary" round size="small" @click="search()">搜索</el-button>
      </el-row>
    </el-container>
    <div class='results'>
      <p v-show="isShow" class="name">{{city}}</p>
      <p v-show="isShow" class="date">{{date.slice(0,2)+'  /  '+date.slice(3,)}}</p>
      <p v-show="isShow" class="type">{{type}}</p>
      <p v-show="isShow" class="fengxiang">{{fengxiang}}</p>
      <p v-show="isShow">最高温度：{{template.high.slice(2,)}}</p>
      <p v-show="isShow">最低温度：{{template.low.slice(2,)}}</p>
    </div>

    <div class="footer">
      <router-link class="about" to="/about">关于</router-link>
      <router-link class="index" to="/index">返回首页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getCityWeather } from '../api/weather'

export default {
  name: 'Search',
  data () {
    return {
      date: '',
      bgi: require('../asserts/img/bg.jpg'),
      address: '',
      city: '',
      fengxiang: '',
      template: {
        high: '',
        low: ''
      },
      type: '',
      isShow: false,
      loading: false
    }
  },
  methods: {
    async search () {
      if (this.address === '') {
        alert('输入为空')
        // console.log('kong')
        return
      }
      this.loading = true
      try {
        const { data } = await getCityWeather(this.address)
        // console.log(data)
        // console.log(data.data.forecast[0].fengxiang)
        if (data.desc === 'OK' && data.status === 1000) {
          this.isShow = true
          this.city = data.data.city
          this.type = data.data.forecast[0].type
          this.date = data.data.forecast[0].date
          this.fengxiang = data.data.forecast[0].fengxiang
          this.template.high = data.data.forecast[0].high
          this.template.low = data.data.forecast[0].low
        }
        this.changeBg()
        this.isShow = true
      } catch (err) {
        console.log('接口获取错误！')
      } finally {
        this.address = ''
        this.loading = false
      }
    },

    changeBg () {
      if (this.type !== '') {
        this.bgi = require(`../asserts/img/${this.type}.jpg`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.body {

  // background: url('../asserts/img/bg.jpg');
  position: relative;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .title {
    color: white;
    font-size: 50px;
    display: block;
    margin: 0 43% 10px 25%;
    width: 50%;
    padding-top: 150px;
  }

  .container {
    float: left;
    margin: 5% 30%;
    width: 60%;
    padding-right: 30%;
    .input {
      margin: 0 5% 0 20%;
      padding-right: 10%;
    }
  }
  .results {
    p {
      color: white;
      font-size: 40px;
      text-align: center;
      text-shadow: 3px 3px 6px rgb(83, 14, 222);
    }
  }

  .footer {
    position: relative;
    .about {
      position: fixed;
      left: 49%;
      top: 840px;
      color: white;
      text-decoration: none;
    }
    .index {
      position: fixed;
      left: 47%;
      top: 860px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
