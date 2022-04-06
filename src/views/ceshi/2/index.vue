<template>
<el-descriptions class="margin-top" title="高等数学（一）" :column="3" :size="size" border>
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
      </template>
      <template12>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">班级成员</el-menu-item>
  <el-menu-item index="2">班级信息</el-menu-item>

</el-menu>
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
