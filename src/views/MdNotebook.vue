<template>
  <div class="MdNotebook-container">
    <span class='title'> MarkDown Editor Online</span>
    <section class="mdNote">
      <textarea @click="onFocus()" v-model="mdNote" id="Note"></textarea>
      <aside class="toMd" id='Md' v-html="htmlNote"></aside>
    </section>
    <div class="footer">
      <router-link class="about" to="/about">关于</router-link>
      <router-link class="index" to="/index">返回首页</router-link>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
// import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
export default {
  name: 'mdNote',
  data () {
    return {
      mdNote: ''
    }
  },
  computed: {
    htmlNote () {
      return marked(this.mdNote)
    }
  },
  methods: {
    onFocus () {
      this.$refs.textarea.focus.classList.add('focus')
    }
  }
}
</script>

<style lang='less' scoped>
.MdNotebook-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    &:hover {
      color: #666;
      text-shadow: 1rem 1rem 1rem skyblue;
    }
  }
  .mdNote {
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  #Note {
    width: 40%;
    height: 82vh;
    margin-left: 1.25rem /* 20/16 */;
    padding: .3125rem /* 5/16 */;
    &:focus {
      box-shadow: 1rem 1rem 1rem skyblue;
    }
  }
  #Md {
    width: 40%;
    margin-right: 1.25rem /* 20/16 */;
    float: right;
    // padding: .3125rem /* 5/16 */;
    border: .125rem /* 2/16 */ solid #ccc;
    background-color: rgb(114, 110, 110);
    color: #fff;
  }
}
 .footer {
    position: relative;
    color: #666;
    .about {
      position: fixed;
      left: 49%;
      top: 840px;
      color: #666;
      text-decoration: none;
    }
    .index {
      position: fixed;
      left: 47%;
      top: 860px;
      color: #666;
      text-decoration: none;
    }
  }
}

</style>
