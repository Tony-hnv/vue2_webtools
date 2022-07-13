<template>
  <div class="bilifm-container" v-loading="loading">
    <div class="box">
      <el-input class="blf-sea" v-model="id" :disabled="isShowInput" placeholder="请输入bilibili用户的UID" @keyup.enter.native="getBilibiliInformByid()"></el-input>
      <el-button type="primary" class="blf-cx" :disabled="isShowInput" @click="getBilibiliInformByid()">查询</el-button>
    </div>
    <div class="info" v-show="isShow">
      <el-row id="first" justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">UID:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{uid}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">头像:</div></el-col>
      <el-col :span="9"><img class="grid-content bg-purple-light" :src="avatar"/></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">用户名:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{name}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">性别:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{sex}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">等级:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{level}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">个性签名:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{description}}</div></el-col>
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
import { getBilibiliById } from '../api/bilibili'

export default {
  data () {
    return {
      id: '',
      uid: '',
      name: '',
      sex: '',
      level: '',
      description: '',
      avatar: '',
      isShowInput: false,
      loading: false,
      isShow: false
    }
  },
  methods: {
    async getBilibiliInformByid () {
      if (this.id === '') {
        alert('查询的uid不能为空！')
        return
      }
      this.loading = true
      try {
        const { data } = await getBilibiliById(this.id)
        console.log(data)
        if (data.code === 200) {
          this.description = data.data.description
          this.level = data.data.level
          this.name = data.data.name
          this.sex = data.data.sex
          this.uid = data.data.uid
          this.avatar = data.data.avatar
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
    // getImages (_url) {
    //   if (this.avatar !== undefined) {
    //     const uf = _url.substring(7)
    //     return 'https://images.weserv.nl/?url=' + uf
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
.bilifm-container {
  background: url('../asserts/img/yellowbilibg.jpeg');
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  // background-position: center center;

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
  .box {
    .blf-sea {
      display: block;
    }
  }

  .footer {
    position: relative;
    .about {
      position: fixed;
      left: 49%;
      top: 840px;
    }
    .index {
      position: fixed;
      left: 47%;
      top: 860px;

    }
  }
}
</style>
