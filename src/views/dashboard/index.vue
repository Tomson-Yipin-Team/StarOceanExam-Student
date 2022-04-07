<template>
  <div class="container">
    <el-alert
      title="通知:请考生尽快完成考试。"
      type="warning"
      effect="dark"
      show-icon
      :closable="false"
    />
  <div>
    <el-card>
      <template slot="header">
        <!--标题-->
        <span>
          已加入的班级
        </span>
        <el-button type="text" class="header-button">加入新的班级</el-button>
      </template>
      <el-row :gutter="20">
        <el-col v-for="(item,index) in classrooms" :key="index" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <Class :class-info="item" class="class-card" />
        </el-col>
      </el-row>
    </el-card>
  </div>
    <!--考试信息-->
    <div>
    <el-card class="exam-table" :body-style="{padding:'0px'}" shadow="hover">
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
          fixed="left"
        >
          <template slot-scope="scope">
            <i class="el-icon-collection" />
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="参考人数"
          width="200"
        >
          <template slot-scope="scope">
            <i class="el-icon-user" />
            <span style="margin-left: 10px">{{ scope.row.many }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="日期"
          width="200"
        >
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="150"
        >
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
            >参加考试</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    </div>
    <!--成绩表格-->
    <el-card class="score-table" :body-style="{padding:'0px'}" shadow="hover">
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
          fixed="left"
        >
          <template slot-scope="scope">
            <i class="el-icon-collection" />
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="参考人数"
          width="200"
        >
          <template slot-scope="scope">
            <i class="el-icon-user" />
            <span style="margin-left: 10px">{{ scope.row.many }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="日期"
          width="200"
        >
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="150"
        >
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium" type="success">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit1(scope.$index, scope.row)"
            >查看成绩</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<style scoped>
.container{
  margin:20px
}
.header-button{
  float:right;
  padding: 2px;
}
.class-card{
  margin-bottom: 20px;
}
</style>

<style>
.el-alert{
		margin-bottom:20px;
	}
</style>
<script>
import Class from '@/views/classroom/components/Class'
import ClassInfo from '@/api/class-info'
export default {
  name: 'Index',
  components: {
    Class
  },
  data() {
    return {
      classrooms: ClassInfo.classrooms,
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

.exam-table{
  margin-top: 20px;
  margin-bottom: 10px;
  border: 0px;
}
.score-table{
  margin-top: 10px;
  border: 0px;
}
</style>
