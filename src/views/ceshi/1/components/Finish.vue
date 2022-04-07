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
                <el-button type="text">查看试卷</el-button>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane name="third">
            <span slot="label">未参加考试({{ restStudents.length }})</span>
            <el-table :data="restStudents" :row-class-name="tableRowClassName" height="500">
              <el-table-column #default="scope" label="学生姓名" fixed width="120">
                {{ scope.row.name }}
              </el-table-column>
              <el-table-column #default="scope" label="班级" width="120">
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
          <el-progress type="circle" :text-inside="false" :stroke-width="12" :percentage="100" status="success" />
        </el-row>
        <el-row class="button" type="flex" justify="end">
          <el-button type="primary" onclick="window.location.href='https://source.jujuh.top/doc/2021-2022-1%E6%99%AE%E6%9C%AC%E5%A4%A7%E5%AD%A6%E8%8B%B1%E8%AF%AD%E4%B8%89%E6%9C%9F%E6%9C%AB%E8%80%83%E8%AF%95%E7%9B%91%E8%80%83%E6%95%B0%E6%8D%AE%E8%A1%A8.xls'">导出本场考试信息</el-button>
        </el-row>
      </el-col>
    </el-row>

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

export default {
  name: 'Finish',
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
      return this.students.filter((item) => {
        return item.participate === false
      })
    },
    // 已经完成的学生
    finishStudents() {
      return this.students.filter((item) => {
        return item.participate === true
      })
    },
    // 未参加
    restStudents() {
      return this.students.filter((item) => {
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
