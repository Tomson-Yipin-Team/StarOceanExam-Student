<template>

  <el-row style="margin:10px;" :gutter="10">
    <el-col :span="3">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>高等数学（一）</span>
          <el-button style="float: right; padding: 3px" type="text">进入</el-button>
        </div>
        <div class="text item">
          <p>班级:<br>软工211、软工212、软工213、软工214</p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3" push="2">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>大学英语（一）</span>
          <el-button style="float: right; padding: 3px" type="text">进入</el-button>
        </div>
        <div class="text item" style="">
          <p>班级:<br>软工211、软工212、软工213、软工214</p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3" push="4">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>大学物理（一）</span>
          <el-button style="float: right; padding: 3px" type="text">进入</el-button>
        </div>
        <div class="text item">
          <p>班级:<br>软工211、软工212、软工213、软工214</p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3" push="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>程序设计基础</span>
          <el-button style="float: right; padding: 3px" type="text">进入</el-button>
        </div>
        <div class="text item">
          <p>班级:<br>软工211、软工212、软工213、软工214</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
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
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>
