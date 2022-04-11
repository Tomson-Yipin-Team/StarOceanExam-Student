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
      <Examall />
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
import Examall from '@/views/examination/all/index'
import Classmain from '@/views/classroom/index'
export default {
  name: 'Index',
  components: {
    Classmain,
    Examall
  },
  data() {
    return {
    }
  },
  methods: {
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
