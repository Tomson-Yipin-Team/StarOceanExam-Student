<template>
  <div class="app-container">
    <el-alert
      title="通知:请考生尽快完成考试。"
      type="warning"
      effect="dark"
      show-icon
      :closable="false"
    />
    <el-row style="margin:0px;" :gutter="32">
      <el-card class="box-card-component" shadow="hover">
        <el-descriptions title="用户信息" column="2">
          <template slot="extra" />
          <el-descriptions-item label="头像"><el-avatar shape="square" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" /></el-descriptions-item>
          <el-descriptions-item label="用户名" style="margin-right:20px;">1978804174</el-descriptions-item>
          <el-descriptions-item label="学号" style="margin-right:20px;">2130110485</el-descriptions-item>
          <el-descriptions-item label="姓名" style="margin-right:20px;">小明</el-descriptions-item>
          <el-descriptions-item label="邮箱" style="margin-right:20px;">1978804174@qq.com</el-descriptions-item>
          <span style="margin-right:20px;" />
          <el-descriptions-item label="性别" style="margin-right:20px;">男</el-descriptions-item>
          <el-descriptions-item label="状态" style="margin-right:20px;">
            <el-tag size="small" style="margin-right:20px;">在校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="学院" style="margin-right:20px;">信息科学技术学院</el-descriptions-item>
          <el-descriptions-item label="居住地" style="margin-right:20px;">贵州省遵义市正安县</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-row>
    <el-table
      :data="tableData"
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
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >参加考试</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit1(scope.$index, scope.row)"
          >查看成绩</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style>
.el-alert{
		margin-bottom:20px;
	}
</style>
<script>
export default {
  data() {
    return {
      tableData1: [{
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
      }],
      tableData: [{
        date: '2022-07-02-08:00',
        name: '待参加',
        many: '126',
        address: '南通大学高等数学(一)期末考试'
      }, {
        date: '2022-07-02-10:30',
        name: '待参加',
        many: '67',
        address: '南通大学大学英语(一)期末考试'
      }, {
        date: '2022-07-03-14:00',
        name: '待参加',
        many: '128',
        address: '南通大学大学物理(一)期末考试'
      }, {
        date: '2022-07-03-18:30',
        name: '待参加',
        many: '65',
        address: '南通大学程序设计基础期末考试'
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
    },
    handleEdit(index, row) {
      this.$confirm('即将进入考试, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('app/toggleSideBar')

        this.$message({
          type: 'success',
          message: '正在进入!'
        })
        const timejump = 1
        if (!this.timer) {
          this.count = timejump
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= timejump) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
              // 跳转的页面写在此处
              this.$router.push({ path: '/exam' })
            }
          }, 1000)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消进入'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
