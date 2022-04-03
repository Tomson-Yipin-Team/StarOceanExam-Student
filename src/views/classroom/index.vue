<template>

  <el-row style="margin:10px;" :gutter="10">
    <el-col :span="3">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>高等数学（一）</span>
          <el-button style="float: right; padding: 3px" type="text" @click="dialogTableVisible = true">进入</el-button>
        </div>
        <div class="text item">
          <p>班级:<br>软工211、软工212、软工213、软工214</p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="3" push="2">
      <el-card class="box-card" shadow="hover">
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
      <el-card class="box-card" shadow="hover">
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
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>程序设计基础</span>
          <el-button style="float: right; padding: 3px" type="text">进入</el-button>
        </div>
        <div class="text item">
          <p>班级:<br>软工211、软工212、软工213、软工214</p>
        </div>
      </el-card>
    </el-col>
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <el-descriptions class="margin-top" title="高等数学（一）" :column="3" :size="size" border>
        <template slot="extra">
          <el-button type="primary" size="small" @click="open2">退出班级</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user" />
            人数
          </template>
          126
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user" />
            授课老师
          </template>
          宋浩
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-time" />
            考试时间
          </template>
          2022-07-02-08:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets" />
            考试状态
          </template>
          <el-tag size="small">待考式</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building" />
            考试地点
          </template>
          南通大学3号教学楼206室
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>
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
      dialogTableVisible: false
    }
  },
  methods: {
    open2() {
      this.$message({
        message: '退出成功！',
        type: 'success'
      })
      this.dialogTableVisible = false
    }
  }
}
</script>
