<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="考试名称" width="360">
        <template slot-scope="scope">
          <i class="el-icon-collection"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="参考人数" width="120">
        <template slot-scope="scope">
          <i class="el-icon-user"></i>
          <span style="margin-left: 10px">{{ scope.row.many }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分数" width="80">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" type="success">{{
              scope.row.fraction
            }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{}">
          <el-button
            size="mini"
            type="primary"
            @click="dialogTableVisible = true"
            >成绩分析</el-button
          >
          <!-- Table -->
          <el-dialog title="成绩分析" :visible.sync="dialogTableVisible">
              <el-card class="box-card-component" style="margin-left:8px;">
    <div style="position:relative;">
      <pan-thumb :image="avatar" class="panThumb" />
      <div style="padding-top:10px;" class="progress-item">
        <span>选择题：</span>
        <el-progress :percentage="70" />
      </div>
      <div class="progress-item">
        <span>JavaScript</span>
        <el-progress :percentage="18" />
      </div>
      <div class="progress-item">
        <span>CSS</span>
        <el-progress :percentage="12" />
      </div>
      <div class="progress-item">
        <span>ESLint</span>
        <el-progress :percentage="100" status="success" />
      </div>
    </div>
  </el-card>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
    };
  },
};
</script>
<style>
.el-progress__text {
  white-space: pre;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2021-07-02-08:00",
          name: "已结束",
          many: "126",
          address: "南通大学高等数学(一)期末考试",
          fraction: "95",
        },
        {
          date: "2021-07-02-10:30",
          name: "已结束",
          many: "67",
          address: "南通大学大学英语(一)期末考试",
          fraction: "86",
        },
        {
          date: "2021-07-03-14:00",
          name: "已结束",
          many: "128",
          address: "南通大学大学物理(一)期末考试",
          fraction: "92",
        },
        {
          date: "2021-07-03-18:30",
          name: "已结束",
          many: "65",
          address: "南通大学程序设计基础期末考试",
          fraction: "85",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      this.$alert("该学科分数为:" + row.fraction, "", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
  },
};
</script>
