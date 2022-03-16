<template>
  <el-card class="box-card-component" style="margin:10px;">
    <el-page-header content="南通大学高等数学(一)期末考试" @back="goBack" />
    <el-row :gutter="20" style="text-align: right;">

      <el-button type="primary" @click="table2 = true">答题卡</el-button>
      <el-button icon="el-icon-s-cooperation" type="primary" @click="table1 = true"></el-button>
      <el-button type="primary" @click="open2">交卷</el-button>
    </el-row>
      <el-drawer
        title="考试工具箱"
        :visible.sync="table1"
        direction="rtl"
        size="20%"
      >
      <span>
        <el-button @click="cancelForm">铅笔</el-button>
        <br>
        <el-button @click="cancelForm">荧光笔批注</el-button>
        <br>
        <el-button @click="cancelForm">文本框</el-button>
        <br>
        <el-button @click="cancelForm">时钟计时</el-button>
        </span>
      </el-drawer>
      <el-drawer
        title="答题卡"
        :visible.sync="table2"
        direction="rtl"
        size="20%">
        <div style="margin:10px">
          <p>选择题</p>
          <el-row >
          <el-button size="mini" round :type="type1" @click="next1">1</el-button>
          <el-button size="mini" :type="type2" round>2</el-button>
          <el-button size="mini" round>3</el-button>
          <el-button size="mini" round>4</el-button>
          </el-row>
          <el-row style="margin-top:10px">
          <el-button size="mini" round>5</el-button>
          <el-button size="mini" round>6</el-button>
          <el-button size="mini" round>7</el-button>
          <el-button size="mini" round>8</el-button>
          </el-row>
          <el-row style="margin-top:10px">
          <el-button size="mini" round>09</el-button>
          <el-button size="mini" round>10</el-button>
          </el-row>
        </div>
      
      </el-drawer>

    <img height="120px" :src="src">
    <div>
      <el-radio-group v-model="radio">
        <el-radio :label="3">A:{{ A }}</el-radio>
        <el-radio :label="6">B:{{ B }}</el-radio>
        <el-radio :label="9">C:{{ C }}</el-radio>
        <el-radio :label="12">D:{{ D }}</el-radio>
      </el-radio-group>
    </div>

    <el-row :gutter="20">
      <el-col :span="12" :offset="9"><div class="grid-content bg-purple">
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left" @click="back">上一题</el-button>
          <el-button type="primary" @click="next">下一题<i class="el-icon-arrow-right el-icon--right" /></el-button>
        </el-button-group>
      </div></el-col>
    </el-row>
  </el-card>
</template>
<style scoped>

     .el-radio{
        display: block;
        line-height: 23px;
        margin-top: 20pX;
        white-space: normal;
        margin-right: 0;
    }
</style>

<script>
export default {
  data() {
    return {
      drawer: false,
      table1: false,
      table2: false,
      A: '4',
      B: '1',
      C: '3',
      D: '2',
      src: require('./img/1.png'),
      active: 0,
      radio: 0,
      textarea: '',
      type1: "",
      type2: "",
    }
  },
  methods: {
    open2() {
      this.$message({
        showClose: true,
        message: '提交成功',
        type: 'success'
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
            this.$router.push({ name: '首页' })
          }
        }, 1000)
      }
    },
    goBack() {
      this.$confirm('是否退出考试!', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '正在退出!'
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
              this.$router.push({ name: '首页' })
            }
          }, 1000)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    next() {
      this.radio = 0
      if (this.active++ > 9) {
        this.$notify({
          title: '提示',
          message: '已经是最后一题了！',
          showClose: false,
          type: 'warning'
        })
        this.active = 10
      }
      if (this.active === 0) {
        this.src = require('./img/1.png')
        this.A = '4'
        this.B = '1'
        this.C = '3'
        this.D = '2'
      }
      if (this.active === 1) {
        this.src = require('./img/2.png')
        this.A = '5'
        this.B = '2'
        this.C = '6'
        this.D = '3'
      }
      if (this.active === 2) {
        this.src = require('./img/3.png')
        this.A = '2'
        this.B = '4'
        this.C = '9'
        this.D = '6'
      }
      if (this.active === 3) {
        this.src = require('./img/4.png')
        this.A = '8'
        this.B = '4'
        this.C = '6'
        this.D = '8'
      }
      if (this.active === 4) {
        this.src = require('./img/5.png')
        this.A = '5'
        this.B = '9'
        this.C = '8'
        this.D = '2'
      }
      if (this.active === 5) {
        this.src = require('./img/5.png')
        this.A = '2'
        this.B = '4'
        this.C = '1'
        this.D = '3'
      }
      if (this.active === 6) {
        this.src = require('./img/7.png')
        this.A = '3'
        this.B = '4'
        this.C = '8'
        this.D = '1'
      }
      if (this.active === 7) {
        this.src = require('./img/8.png')
        this.A = '7'
        this.B = '5'
        this.C = '9'
        this.D = '1'
      }
      if (this.active === 8) {
        this.src = require('./img/9.png')
        this.A = '8'
        this.B = '5'
        this.C = '4'
        this.D = '6'
      }
      if (this.active === 9) {
        this.src = require('./img/10.png')
        this.A = '4'
        this.B = '6'
        this.C = '8'
        this.D = '3'
      }
    },
    back() {
      this.radio = 0
      if (this.active-- < 1) {
        this.$notify({
          title: '提示',
          message: '没有上一题了！',
          showClose: false,
          type: 'warning'
        })
        this.active = 0
      }
      if (this.active === 0) {
        this.src = require('./img/1.png')
        this.A = '4'
        this.B = '1'
        this.C = '3'
        this.D = '2'
      }
      if (this.active === 1) {
        this.src = require('./img/2.png')
        this.A = '5'
        this.B = '2'
        this.C = '6'
        this.D = '3'
      }
      if (this.active === 2) {
        this.src = require('./img/3.png')
        this.A = '2'
        this.B = '4'
        this.C = '9'
        this.D = '6'
      }
      if (this.active === 3) {
        this.src = require('./img/4.png')
        this.A = '8'
        this.B = '4'
        this.C = '6'
        this.D = '8'
      }
      if (this.active === 4) {
        this.src = require('./img/5.png')
        this.A = '5'
        this.B = '9'
        this.C = '8'
        this.D = '2'
      }
      if (this.active === 5) {
        this.src = require('./img/5.png')
        this.A = '2'
        this.B = '4'
        this.C = '1'
        this.D = '3'
      }
      if (this.active === 6) {
        this.src = require('./img/7.png')
        this.A = '3'
        this.B = '4'
        this.C = '8'
        this.D = '1'
      }
      if (this.active === 7) {
        this.src = require('./img/8.png')
        this.A = '7'
        this.B = '5'
        this.C = '9'
        this.D = '1'
      }
      if (this.active === 8) {
        this.src = require('./img/9.png')
        this.A = '8'
        this.B = '5'
        this.C = '4'
        this.D = '6'
      }
      if (this.active === 9) {
        this.src = require('./img/10.png')
        this.A = '4'
        this.B = '6'
        this.C = '8'
        this.D = '3'
      }
    }

  }
}
</script>
