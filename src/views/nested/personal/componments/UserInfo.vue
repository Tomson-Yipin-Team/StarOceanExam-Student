<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" :disabled="edit" style="width:200px" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" :disabled="edit" style="width:200px" />
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="选择日期"
            :disabled="edit"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" :disabled="edit" show-password style="width:200px" />
        </el-form-item>
        <transition name="el-fade-in-linear">
          <el-form-item v-if="!edit" label="确认密码">
            <el-input v-model="form.password" :disabled="edit" show-password style="width:200px" />
          </el-form-item>
        </transition>
        <transition name="el-fade-in-linear">
          <el-form-item v-if="!edit" label="个人简介">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
        </transition>
      </el-form>
      <el-row class="user-info-button">
        <el-button v-if="edit" type="primary" @click="changeEdit">修改信息</el-button>
        <el-button v-if="!edit" type="primary" @click="changeEdit">保存信息</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'UserInfo',
  data() {
    return {
      edit: true,
      form: {
        name: 'wangxingju',
        nickname: 'Zerolouis',
        birthday: '2022-03-22',
        password: '12345567',
        intro: '阳光大男孩'
      }
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

.user-info-button{
  float:right;
  margin-bottom: 20px;
  margin-right: 10px;
}

</style>
