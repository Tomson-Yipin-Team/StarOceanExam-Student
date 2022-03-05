<template>
<div class="app-container">
  <el-row :gutter="10">
    <el-col :span="2.5">
      <div class="grid-content bg-purple">
        <el-card class="box-card" shadow="never">
         <div class="text item">
         <p>姓名:周鑫1
         </p>
         </div>
        </el-card>
      </div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box-card" shadow="never">
         <div class="text item">
         <p>姓名:小明
         </p>
         </div>
        </el-card>
      </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</div>
</template>

<style>

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 8px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
  .text {
    font-size: 18px;
  }

  .box-card {
    width: 120px;

  }
</style>
