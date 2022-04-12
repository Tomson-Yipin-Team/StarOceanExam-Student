<template>
  <el-card style="margin:20px;">
    <el-page-header content="成绩分析" @back="goBack" />
    <el-row>
      <el-card style="margin:8px" shadow="hover">
        <el-descriptions class="margin-top" title="全国大学生四级英语考试" :column="4" border>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user" />
              姓名
            </template>
            张佳
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user" />
              学号
            </template>
            2050110732
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-time" />
              考试时间
            </template>
            2022-03-12-08:00
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user" />
              考试人数
            </template>
            56
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets" />
              最高分
            </template>
            <el-tag size="small">93分</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets" />
              考试成绩
            </template>
            <el-tag size="small">89分</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building" />
              平均分
            </template>
            <el-tag size="small">79分</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building" />
              考试排名
            </template>
            第<el-tag size="small" type="success">3</el-tag>名
          </el-descriptions-item>

        </el-descriptions>

      </el-card>
    </el-row>
    <el-card style="margin:8px" shadow="hover">
      <el-row style="height:580px">
        <chart height="100%" width="100%" />
      </el-row>
    </el-card>
  </el-card>
</template>
<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
.el-row {
    margin-bottom: 20px;
  }
</style>
<script>
import Chart from '@/components/Charts/MixChart'

export default {
  name: 'AnalyseDetail',
  components: { Chart },
  methods: {
    goBack() {
      this.$router.push({ name: '首页' })
    }
  }
}
</script>
