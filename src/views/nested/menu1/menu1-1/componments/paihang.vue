<template>
  <el-table
    :data="tableData"
    height="300"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column
      prop="date"
      label="排名"
      width="50"
    />
    <el-table-column
      prop="name"
      label="分数"
      width="80"
    />
    <el-table-column
      prop="address"
      label="姓名"
    />
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: #f0f9eb;
  }
</style>
<script>
export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 3) {
          return 'warning-row';
        }
        return '';
      }
    },
  data() {
    return {
      tableData: [{
        date: '1',
        name: '98',
        address: '李**'
      }, {
        date: '2',
        name: '96',
        address: '王**'
      }, {
        date: '3',
        name: '95',
        address: '张**'
      }, {
        date: '4',
        name: '92',
        address: '小明'
      }, {
        date: '5',
        name: '90',
        address: '朱**'
      }, {
        date: '6',
        name: '89',
        address: '李**'
      }, {
        date: '7',
        name: '88',
        address: '周**'
      }]
    }
  }
}
</script>
