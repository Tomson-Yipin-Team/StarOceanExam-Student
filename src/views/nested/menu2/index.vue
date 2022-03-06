<template>
<el-row style="margin:10px;" :gutter="32">
  <el-card class="box-card-component">
    <el-descriptions title="用户信息" column="2">
    <template slot="extra">
      <el-button type="primary" @click="dialogTableVisible = true">修改</el-button>
      <el-dialog title="修改资料" :visible.sync="dialogTableVisible">
         <el-descriptions title="用户信息" column="2">
        <el-descriptions-item label="用户名">1978804174</el-descriptions-item>
      <el-descriptions-item label="学号">2130110485</el-descriptions-item>
      <el-descriptions-item label="姓名">小明</el-descriptions-item>
      <el-descriptions-item label="邮箱">1978804174@qq.com</el-descriptions-item>
      <el-descriptions-item label="性别">男</el-descriptions-item>
      <el-descriptions-item label="状态">
        <el-tag size="small">在校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="学院">信息科学技术学院</el-descriptions-item>
      <el-descriptions-item label="居住地">贵州省遵义市正安县</el-descriptions-item>
    </el-descriptions>
      </el-dialog>
    </template>
    <el-descriptions-item label="头像"><el-avatar shape="square" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"></el-avatar></el-descriptions-item>
      <el-descriptions-item label="用户名">1978804174</el-descriptions-item>
      <el-descriptions-item label="学号">2130110485</el-descriptions-item>
      <el-descriptions-item label="姓名">小明</el-descriptions-item>
      <el-descriptions-item label="邮箱">1978804174@qq.com</el-descriptions-item>
      <el-descriptions-item label="性别">男</el-descriptions-item>
      <el-descriptions-item label="状态">
        <el-tag size="small">在校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="学院">信息科学技术学院</el-descriptions-item>
      <el-descriptions-item label="居住地">贵州省遵义市正安县</el-descriptions-item>
    </el-descriptions>
  </el-card>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>