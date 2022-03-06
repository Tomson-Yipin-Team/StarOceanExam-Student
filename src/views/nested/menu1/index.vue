<template>
  <div class="app-container" direction="horizontal">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>高等数学(一)</span>
        <el-button style="float: right; padding: 3px 0" type="text">进入</el-button>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        班级:软工211、软工212<br>软工213、软工214
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>高等数学(一)</span>
        <el-button style="float: right; padding: 3px 0" type="text">进入</el-button>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        班级:软工211、软工212<br>软工213、软工214
      </div>
    </el-card>
  </div>
</template>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 240px;
  }
  .el-card{
		margin-bottom:20px;
	}
</style>

<script>
</script>
