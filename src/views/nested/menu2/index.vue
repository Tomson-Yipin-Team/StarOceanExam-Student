<template>
<el-row style="margin:10px;" :gutter="32">
  <el-card class="box-card-component">
    <el-descriptions title="用户信息" column="2">
    <template slot="extra">
      <el-button type="primary" @click="dialogTableVisible = true">修改</el-button>
      <el-dialog title="修改资料" :visible.sync="dialogTableVisible" width="50%" :before-close="handleClose">
         <el-descriptions  title="" column="2">
        <el-descriptions-item label="用户名"><el-input size="mini" v-model="input1" placeholder="请输入内容"></el-input>
</el-descriptions-item>
      <el-descriptions-item label="学号"><el-input size="mini" v-model="input2" placeholder="请输入内容" :disabled="true"></el-input></el-descriptions-item>
      <el-descriptions-item label="姓名"><el-input size="mini" v-model="input3" placeholder="请输入内容" :disabled="true"></el-input></el-descriptions-item>
      <el-descriptions-item label="邮箱"><el-input size="mini" v-model="input4" placeholder="请输入内容"></el-input></el-descriptions-item>
      <el-descriptions-item label="性别"><el-input size="mini" v-model="input5" placeholder="请输入内容" :disabled="true"></el-input></el-descriptions-item>
      <el-descriptions-item label="状态">
        <el-tag size="small">在校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="学院"><el-input size="mini" v-model="input6" placeholder="请输入内容" :disabled="true"></el-input></el-descriptions-item>
      <el-descriptions-item label="居住地"><el-input size="mini" v-model="input7" placeholder="请输入内容"></el-input></el-descriptions-item>
    </el-descriptions>
    <span slot="footer" class="dialog-footer">
    <el-button @click="open1">取 消</el-button>
    <el-button type="primary" @click="open2">确 定</el-button>
  </span>
      </el-dialog>
    </template>
    <el-descriptions-item label="头像"><el-avatar shape="square" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"></el-avatar></el-descriptions-item>
      <el-descriptions-item label="用户名">1978804174</el-descriptions-item>
      <el-descriptions-item label="学号">2130110485</el-descriptions-item>
      <el-descriptions-item label="姓名">小明</el-descriptions-item>
      <el-descriptions-item label="邮箱">1978804174@qq.com</el-descriptions-item>
      <el-descriptions-item label="性别">男</el-descriptions-item>
      <el-descriptions-item label="状态">
        <el-tag size="small">在校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="学院">信息科学技术学院</el-descriptions-item>
      <el-descriptions-item label="居住地">贵州省遵义市正安县</el-descriptions-item>
    </el-descriptions>
  </el-card>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        input1: '1978804174',
        input2: '2130110485',
        input3: '小明',
        input4: '1978804174@qq.com',
        input5: '男',
        input6: '信息科学技术学院',
        input7: '贵州省遵义市正安县',
        dialogVisible: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      open2() {
        this.$message({
          message: '修改成功！',
          type: 'success',
        });
        this.dialogTableVisible = false
      },
      open1() {
        this.$message({
          message: '取消修改！',
          type: 'warning',
        });
        this.dialogTableVisible = false
      },
    }
  };
</script>