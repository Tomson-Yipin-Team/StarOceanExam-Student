<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <el-descriptions title="联系我们" column="1" style="font-size:17px">
      <el-descriptions-item label="手机"><el-tag size="small">18862985705</el-tag></el-descriptions-item>
      <el-descriptions-item label="QQ">
        <el-tag type="success" size="small">1978804174</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址"><el-tag type="warning">江苏省南通市崇川区啬园路九号南通大学</el-tag></el-descriptions-item>
      <el-descriptions-item label="微信"><img height="240px" width="240px" src="./img/wx.png"></el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      url: './img/wx.png'
    }
  }
}
</script>
