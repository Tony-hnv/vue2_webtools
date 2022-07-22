<template>
  <div class="telnumber-container" v-loading="loading">
    <div class="box">
      <el-input class="telno-sea" v-model="id" :disabled="isShowInput" placeholder="请输入手机号码" @keyup.enter.native="getSimInfoByNumber()"></el-input>
      <el-button type="primary" class="blf-cx" :disabled="isShowInput" @click="getSimInfoByNumber()">查询</el-button>
    </div>
    <div class="info" v-show="isShow">
      <el-row id="first" justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">手机号码:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{tel}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">归属地:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{local}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">号码段:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{duan}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">卡类型:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{type}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">运营商:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{yys}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">通信标准:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{bz}}</div></el-col>
    </el-row>
    </div>
    <div class="footer">
      <router-link class="about" to="/about">关于</router-link>
      <router-link class="index" to="/index">返回首页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getInfoByNumber } from '../api/telnumber'

export default {
  data () {
    return {
      id: '',
      code: '',
      tel: '',
      local: '',
      duan: '',
      type: '',
      yys: '',
      bz: '',
      isShowInput: false,
      loading: false,
      isShow: false
    }
  },
  methods: {
    async getSimInfoByNumber () {
      if (this.id === '') {
        alert('查询的号码不能为空！')
        return
      }
      this.loading = true
      try {
        const { data } = await getInfoByNumber(this.id)
        console.log(data)
        if (data.code === '200') {
          this.code = data.code
          this.tel = data.tel
          this.local = data.local.slice(4)
          this.duan = data.duan.slice(4)
          this.type = data.type.slice(4)
          this.yys = data.yys.slice(4)
          this.bz = data.bz.slice(5)
          this.id = ''
          this.isShow = true
        }
      } catch (error) {
        if (this.data.code === 202) {
          alert('查询的uid不存在!')
        } else {
          alert('服务器出现了问题，请稍后再试！')
        }
        this.isShowInput = true
        return
      } finally {
        this.loading = false
        this.isShowInput = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.telnumber-container {
  background: url('../asserts/img/telnumber-bg.jpeg');
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  // background-position: center center;

  .info {

  }
  .box {
    display: flex;
  }
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    img {
      width: 26px;
      height: 26px;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 20px;
    }
  }
  .row-bg {
    padding: 10px 0;
    margin-bottom: 0;
    background-color: #52494d80;
    #first {
      margin-top: 20px;
    }
  }
  .el-input {
    width: 33%;
    margin: 10%;
  }

  .el-button {
    margin: 10%;
  }
  .bg-purple {
    color: aqua;
  }
  .bg-purple-light {
    color: aliceblue;
  }
  .box {
    .telno-sea {
      display: block;
      border: 2px solid skyblue;
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
