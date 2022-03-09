<template>
  <div class="container">
    <el-row :gutter="2">
      <el-col :xs="22" :sm="22" :md="22" :lg="9" :xl="9" :offset="1" class="content">
        <UserCard />
      </el-col>
      <el-col :xs="22" :sm="22" :md="22" :lg="12" :xl="12" :offset="1" class="content">
        <user-info />
      </el-col>
    </el-row>
  </div>
</template>

<script>

import UserCard from './componments/UserCard'
import UserInfo from './componments/UserInfo'

export default {
  name: 'PersonIndex',
  components: { UserCard, UserInfo }
}
</script>

<style scoped>
.container{
  background-color: #eff1f4;

}

.content{
  margin-top: 18px;
  margin-bottom: 20px;
}

</style>
