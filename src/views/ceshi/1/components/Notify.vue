<template>
  <div>
    <el-row class="text-title">标题</el-row>
    <el-input v-model="title" placeholder="请输入标题" />
    <el-row class="text-body">正文</el-row>
    <markdown-editor
      ref="markdownEditor"
      v-model="content"
      language="zh"
      :options="{hideModeSwitch:true,previewStyle: 'tab'}"
      height="200px"
    />
    <el-row type="flex" justify="end" class="button">
      <el-button type="primary" plain @click="testMessage">测试消息</el-button>
      <el-button type="primary" @click="sendMessage">发送消息</el-button>
    </el-row>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  name: 'Notify',
  components: { MarkdownEditor },
  data() {
    return {
      content: '',
      title: '标题',
      successSendMessage: false
    }
  },
  methods: {
    sendMessage() {
      this.$confirm('确认发送？(发送前可以进行测试)', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '发送成功!'
        })
        this.$emit('sendMessage', this.successSendMessage)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消发送'
        })
      })
    },
    testMessage() {
      this.$notify({
        title: this.title,
        message: this.content,
        type: 'info'
      })
    }
  }
}
</script>

<style scoped>
.text-body{
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
}
.text-title{
  margin-bottom: 10px;
  font-size: 18px;
}
.button{
  margin-top: 10px;
}
</style>
