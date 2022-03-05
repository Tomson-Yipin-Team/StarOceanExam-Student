<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      element-loading-text="Loading"
        border
        fit
        highlight-current-row>
      <el-table-column
        label="考试名称"
        width="360">
        <template slot-scope="scope">
          <i class="el-icon-collection"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
    </el-table-column>
        <el-table-column
      label="参考人数"
      width="120">
      <template slot-scope="scope">
        <i class="el-icon-user"></i>
        <span style="margin-left: 10px">{{ scope.row.many }}</span>
      </template>
    </el-table-column>
        <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      width="80">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium" type="success">{{ scope.row.name }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">查看成绩</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2021-07-02-08:00',
        name: '已结束',
        many: '126',
        address: '南通大学高等数学(一)期末考试',
        fraction: '95'
      }, {
        date: '2021-07-02-10:30',
        name: '已结束',
        many: '67',
        address: '南通大学大学英语(一)期末考试',
        fraction: '86'
      }, {
        date: '2021-07-03-14:00',
        name: '已结束',
        many: '128',
        address: '南通大学大学物理(一)期末考试',
        fraction: '92'
      }, {
        date: '2021-07-03-18:30',
        name: '已结束',
        many: '65',
        address: '南通大学程序设计基础期末考试',
        fraction: '89'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      this.$alert('该学科分数为:' + row.fraction, '', {
        confirmButtonText: '确定',
        callback: action => {
        }
      })
    }
  }
}
</script>
