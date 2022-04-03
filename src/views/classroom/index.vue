<template>
  <div class="container">
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
</template>

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
      classrooms: ClassInfo.classrooms
    }
  }
}
</script>

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
