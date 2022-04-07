<template>
  <div>
    <!--考试数据-->
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-descriptions border class="description">
          <el-descriptions-item label="考试名称">
            {{ seeName }}
          </el-descriptions-item>
          <el-descriptions-item label="考试ID">
            {{ seeId }}
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <!--考生状态-->
        <el-tabs v-model="activeName" class="tabs">
          <el-tab-pane name="first">
            <span slot="label">已完成({{ finishStudents.length }})</span>
            <!--表格-->
            <el-table :data="finishStudents" :row-class-name="tableRowClassName" height="500">
              <el-table-column #default="scope" label="学生姓名" fixed width="120">
                {{ scope.row.name }}
              </el-table-column>
              <el-table-column #default="scope" label="班级" width="120">
                {{ scope.row.classroom }}
              </el-table-column>
              <el-table-column prop="beginTime" label="开始时间" width="150" />
              <el-table-column prop="useTime" label="已用时间" width="150" />
              <el-table-column #default="scope" label="页面切换次数" width="100">
                {{ scope.row.changPage }}
              </el-table-column>
              <el-table-column #default="scope" label="异常退出" width="100">
                <span v-if="scope.row.errorExit===true">是</span>
                <span v-if="scope.row.errorExit===false">否</span>
              </el-table-column>
              <el-table-column #default="scope" label="操作" fixed="right" width="150">
                <el-button type="text" @click="handleSubmit(scope.$index,scope.row)">查看试卷</el-button>
              </el-table-column>
            </el-table>

          </el-tab-pane>
          <!--正在考试学生-->
          <el-tab-pane name="second">
            <span slot="label">正在考试({{ doingStudents.length }})</span>
            <!--表格-->
            <el-table :data="doingStudents" :row-class-name="tableRowClassName" height="500">
              <el-table-column #default="scope" label="学生姓名" fixed width="120">
                {{ scope.row.name }}
              </el-table-column>
              <el-table-column #default="scope" label="班级" width="120">
                {{ scope.row.classroom }}
              </el-table-column>
              <el-table-column prop="beginTime" label="开始时间" width="150" />
              <el-table-column prop="useTime" label="使用时间" width="150" />
              <el-table-column #default="scope" label="页面切换次数" width="100">
                {{ scope.row.changPage }}
              </el-table-column>
              <el-table-column #default="scope" label="异常退出" width="100">
                <span v-if="scope.row.errorExit===true">是</span>
                <span v-if="scope.row.errorExit===false">否</span>
              </el-table-column>
              <el-table-column #default="scope" label="操作" fixed="right" width="150">
                <el-button type="text" @click="handleSubmit(scope.$index,scope.row)">强制交卷</el-button>
                <el-button type="text" @click="handleExtend(scope.$index,scope.row)">延长</el-button>
              </el-table-column>
            </el-table>

          </el-tab-pane>
          <el-tab-pane name="third">
            <span slot="label">未参加考试({{ restStudents.length }})</span>
            <el-table :data="restStudents" :row-class-name="tableRowClassName" height="500">
              <el-table-column #default="scope" label="学生姓名">
                {{ scope.row.name }}
              </el-table-column>
              <el-table-column #default="scope" label="班级" width="250">
                {{ scope.row.classroom }}
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="6">
        <el-row class="text">
          现在的时间是
        </el-row>
        <el-row type="flex" justify="center" class="nowTime">
          {{ nowTime }}
        </el-row>
        <el-divider />
        <el-row class="text">
          考试已经进行了
        </el-row>
        <el-row type="flex" justify="center" class="restTime">
          1:42:21
        </el-row>
        <el-row type="flex" justify="center">
          <el-progress type="circle" :text-inside="false" :stroke-width="12" :percentage="percentage" />
        </el-row>
        <el-row class="button" type="flex" justify="end">
          <el-button type="primary" @click="handleNotify">发送通知</el-button>
          <el-button type="danger">提前收卷</el-button>
        </el-row>
      </el-col>
    </el-row>

    <el-dialog title="发送通知" :visible.sync="showNotify" append-to-body>
      <notify @sendMessage="getMessage" />
    </el-dialog>
  </div>
</template>

<style>
.el-table .warning-row {
  color:red
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import moment from 'moment'
import paperContent from '@/api/paper-content'
import notify from '@/views/ceshi/1//components/Notify'

export default {
  name: 'Doing',
  components: { notify },
  props: ['seeId', 'seeName'],
  data() {
    return {
      activeName: 'first',
      students: paperContent.students,
      showNotify: false,
      notifyContent: ''
    }
  },
  computed: {
    // 正在考试的学生
    doingStudents() {
      const tempStudents = this.students.filter((item, index, arr) => {
        return item.finish === false
      })
      return tempStudents.filter((item) => {
        return item.participate === true
      })
    },
    // 已经完成的学生
    finishStudents() {
      return this.students.filter((item, index, arr) => {
        return item.finish === true
      })
    },
    // 未参加
    restStudents() {
      return this.students.filter((item, index, arr) => {
        return item.participate === false
      })
    },
    nowTime() {
      const timeData = new Date()
      return moment(timeData).format('HH:mm:ss')
    },
    percentage() {
      return this.finishStudents.length / this.students.length * 100
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    // css控制
    tableRowClassName({ row, rowIndex }) {
      if (row.changPage >= 3) {
        return 'warning-row'
      } else {
        return ''
      }
    },
    handleSubmit(index, row) {
      this.$confirm('此操作将使学生答题直接结束, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        row.finish = true
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 延长学生考试时间
    handleExtend(index, row) {
      console.log(index, row)
    },
    // 控制发送消息窗口
    handleNotify() {
      this.showNotify = true
    },
    // 获取发送消息
    getMessage(successSendMessage) {
      this.showNotify = successSendMessage
    }

  }
}
</script>

<style scoped>
.description{
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.tabs{
  border-style: none solid none none;
  border-width: 1px;
  border-color: rgba(90, 94, 102, 0.15);
  margin-right: 10px;
  padding-right: 20px;
}
.nowTime{
  font-size: 30px;
  margin-top: 10px;
}
.restTime{
  margin-top: 10px;
  font-size: 50px;
  color: #36a3f7;
  margin-bottom: 10px;
}
.text{
  margin-top: 40px;
  font-size: 15px;
}
.button{
  margin-top: 30px;
}
</style>
