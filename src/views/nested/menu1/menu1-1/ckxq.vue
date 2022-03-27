<template>
  <el-card class="" style="margin-left:8px;">
    <el-col :xs="22" :sm="22" :md="22" :lg="9" :xl="9" :offset="1" class="content">
      <UserCard />
    </el-col><el-col :xs="22" :sm="22" :md="22" :lg="11" :xl="10" :offset="3" class="content">
      <PaiHang />
    </el-col>
  </el-card>
</template>
<script>
import UserCard from './componments/cjfx'
import PaiHang from './componments/paihang'
export default {
  name: 'PersonIndex',
  components: { UserCard, PaiHang }
}
</script>
