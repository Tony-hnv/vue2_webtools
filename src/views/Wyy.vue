<template>
  <div class="wyy" v-loading="loading" :style="{ backgroundImage:'url('+ background +')'}">
    <div class="box">
      <el-input class="wyy-sea" v-model="id" :disabled="isShowInput" placeholder="请输入网易云uid" @keyup.enter.native="searchUid()"></el-input>
      <el-button type="primary" class="wyy-cx" @click="searchUid()">查询</el-button>
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
      <el-col :span="9"><div class="grid-content bg-purple">等级:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{level}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">个性签名:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{description}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">关注:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{follower}}</div></el-col>
    </el-row>
    <el-row justify="center" type="flex" class="row-bg">
      <el-col :span="9"><div class="grid-content bg-purple">粉丝:</div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light">{{following}}</div></el-col>
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
import { getNeteasInform } from '../api/wyy'

export default {
  data () {
    return {
      id: '',
      uid: '',
      code: '',
      avatar: '',
      description: '',
      follower: '',
      following: '',
      level: '',
      name: '',
      data: '',
      background: require('../asserts/img/20140525-DSC01981.jpg'),
      loading: false,
      isShowInput: false,
      isShow: false
    }
  },
  name: 'wyy',
  methods: {
    async searchUid () {
      if (this.id === '') {
        alert('查询的uid不能为空')
        return
      }
      try {
        this.loading = true

        const { data } = await getNeteasInform(this.id)
        this.data = data
        this.code = data.code
        if (this.code === 200) {
          this.uid = data.data.uid
          this.avatar = data.data.avatar
          this.description = data.data.description
          this.follower = data.data.follower
          this.following = data.data.following
          this.level = data.data.level
          this.name = data.data.name
          this.background = data.data.background
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
  .wyy {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 100vh;
    .wyy-sea {
      display: block;
    }
    img {
      width: 26px;
      height: 26px;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 20px;
    }
    text-shadow: 2px 2px 6px skyblue;
    font-size: 20px;
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    margin-bottom: 0;
    background-color: #63656a48;
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
    display: flex;
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
      top: 865px;
      color: white;
    }
  }
}
</style>
