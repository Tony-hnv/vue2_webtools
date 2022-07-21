<template>
  <div class="MdNotebook-container">
    <p class='title'>在线 MarkDown编辑器</p>
    <div class="mdNote">
      <textarea v-model="mdNote" id="Note"></textarea>
      <aside class="toMd" id='Md' v-html="htmlNote"></aside>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
export default {
  name: 'mdNote',
  data () {
    return {
      mdNote: ''
    }
  },
  computed: {
    htmlNote () {
      return marked.parse(this.mdNote)
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
  }
  .mdNote {
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  #Note {
    width: 40%;
    height: 90vh;
    margin-left: 1.25rem /* 20/16 */;
    padding: .3125rem /* 5/16 */;
  }
  #Md {
    width: 40%;
    margin-right: 1.25rem /* 20/16 */;
    float: right;
    padding: .3125rem /* 5/16 */;
    border: .125rem /* 2/16 */ solid #ccc;
    background-color: rgba(3, 2, 2, 0.805);
    color: #fff;
  }
}
}

</style>
