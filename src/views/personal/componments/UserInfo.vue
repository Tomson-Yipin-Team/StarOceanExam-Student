<template>
  <div class="container">

    <el-form ref="basicForm" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" :disabled="edit" style="width:300px" />
      </el-form-item>
      <el-form-item label="真名">
        <el-input v-model="form.realName" style="width: 300px" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" :disabled="edit" style="width:300px" />
      </el-form-item>
      <el-form-item label="学校">
        <el-select v-model="form.school" placeholder="请选择学校">
          <el-option
            v-for="item in schoolOption"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="form.profession" placeholder="请选择学院">
          <el-option
            v-for="item in professionOptions"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <transition name="el-fade-in-linear">
        <el-form-item v-if="!edit" label="个人简介">
          <el-input v-model="form.desc" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" />
        </el-form-item>
      </transition>
    </el-form>

  </div>
</template>

<script>

export default {
  name: 'UserInfo',
  data() {
    return {
      edit: false,
      form: {
        name: 'wxjjuju0322@gmail.com',
        realName: '汪星聚',
        nickname: 'Zerolouis',
        birthday: '2022-03-22',
        password: '12345567',
        intro: '阳光大男孩',
        school: 'NTU',
        profession: ''
      },
      schoolOption: [{
        name: '南通大学',
        value: 'NTU'
      }],
      professionOptions: [{
        name: '信息科学技术学院',
        value: 'technology'
      }, {
        name: '机械工程学院',
        value: 'niuma'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    changeEdit() {
      this.edit = !this.edit
      if (this.edit === true) {
        this.$notify({
          title: '修改成功',
          message: '个人信息已修改！',
          type: 'success',
          position: 'bottom-right'
        })
      }
    }
  }
}
</script>

<style scoped>
.container{

}
</style>
