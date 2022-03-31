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
            @click="ckxq"
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
      customColors: [
        { color: '#f56c6c', percentage: 60 },
        { color: '#e6a23c', percentage: 70 },
        { color: '#5cb87a', percentage: 80 },
        { color: '#1989fa', percentage: 90 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      tableData: [
        {
          date: '2021-07-02-08:00',
          name: '已结束',
          many: '126',
          address: '南通大学高等数学(一)期末考试',
          fraction: '95'
        },
        {
          date: '2021-07-02-10:30',
          name: '已结束',
          many: '67',
          address: '南通大学大学英语(一)期末考试',
          fraction: '86'
        },
        {
          date: '2021-07-03-14:00',
          name: '已结束',
          many: '128',
          address: '南通大学大学物理(一)期末考试',
          fraction: '92'
        },
        {
          date: '2021-07-03-18:30',
          name: '已结束',
          many: '65',
          address: '南通大学程序设计基础期末考试',
          fraction: '85'
        }
      ]
    }
  },
  methods: {
    ckxq() {
      this.$router.push({ path: '/cjfx' })
    }
  }
}
</script>
