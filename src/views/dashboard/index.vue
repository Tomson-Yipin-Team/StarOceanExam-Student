<template>
  <div>
    <div class="container">
      <el-alert
        title="通知:请考生尽快完成考试。"
        type="warning"
        effect="dark"
        show-icon
        :closable="false"
      />
    </div>
    <Classmain />
    <el-card style="margin:20px">
      <examall />
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
import examall from '@/views/examination/all/index'
import Classmain from '@/views/classroom/index'
export default {
  name: 'Index',
  components: {
    Classmain,
    examall
  },
  data() {
    return {
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
