<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <h2>反馈中心</h2>
    <el-input
      v-model="textarea"
      type="textarea"
      :rows="10"
      placeholder="请输入内容"
      style="width:610px"
    />
    <br><br>
    <el-row :gutter="20">
      <el-col :span="12" :offset="10"><div class="grid-content bg-purple">
        <el-button type="primary" @click="open2">提交</el-button></div></el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    open2() {
      this.$message({
        showClose: true,
        message: '提交成功',
        type: 'success'
      })
    }
  }
}
</script>
