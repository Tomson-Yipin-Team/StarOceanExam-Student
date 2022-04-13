<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="考试名称" width="360">
        <template slot-scope="scope">
          <i class="el-icon-collection" />
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="参考人数" width="120">
        <template slot-scope="scope">
          <i class="el-icon-user" />
          <span style="margin-left: 10px">{{ scope.row.many }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分数" width="80">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" type="success">{{
              scope.row.fraction
            }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{}">
          <el-button
            size="mini"
            type="primary"
            @click="handleAnalyse"
          >成绩分析</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-progress__text {
  white-space: pre;
}
</style>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [
        {
          date: '2022-03-06-16:00',
          name: '已结束',
          many: '19',
          address: '2021-2022-2大学英语六级模拟考试（二）',
          fraction: '89'
        },
        {
          date: '2022-03-03-08:00',
          name: '已结束',
          many: '19',
          address: '2021-2022-2软件工程期中考试',
          fraction: '95'
        },
        {
          date: '2022-03-03-14:00',
          name: '已结束',
          many: '52',
          address: '线性代数考前练习',
          fraction: '86'
        },
        {
          date: '2022-03-04-14:00',
          name: '已结束',
          many: '51',
          address: '2021-2022-2数据库原理及应用期中考试',
          fraction: '92'
        }
      ]
    }
  },
  methods: {
    handleAnalyse() {
      this.$router.push({ path: '/analysis-detail' })
    }
  }
}
</script>
