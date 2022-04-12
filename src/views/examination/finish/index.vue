<template>
  <div class="app-container">
    <el-table
      :data="tableData1"
      style="width: 100%"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="考试名称"
        width="360"
      >
        <template slot-scope="scope">
          <i class="el-icon-collection" />
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="参考人数"
        width="120"
      >
        <template slot-scope="scope">
          <i class="el-icon-user" />
          <span style="margin-left: 10px">{{ scope.row.many }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="180"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        width="80"
      >
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" type="success">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="分数">
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.fraction }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [{
        date: '2021-07-02-08:00',
        name: '已结束',
        many: '126',
        address: '超星大学高等数学(一)期末考试',
        fraction: '95'
      }, {
        date: '2021-07-02-10:30',
        name: '已结束',
        many: '67',
        address: '超星大学大学英语(一)期末考试',
        fraction: '86'
      }, {
        date: '2021-07-03-14:00',
        name: '已结束',
        many: '128',
        address: '超星大学大学物理(一)期末考试',
        fraction: '92'
      }, {
        date: '2021-07-03-18:30',
        name: '已结束',
        many: '65',
        address: '超星大学程序设计基础期末考试',
        fraction: '89'
      }]
    }
  },
  methods: {
    handleEdit1(index, row) {
      this.$alert('该学科分数为:' + row.fraction, '', {
        confirmButtonText: '确定',
        callback: action => {
        }
      })
    }
  }
}
</script>
