<template>
  <div>
    <transition>
      <!--    绑定style中top和left-->
      <div v-show="show" class="moveBox" :style="position">
        <div
          class="moveHead"
          @mousedown="mousedown"
          @mousemove="mousemove"
          @mouseup="mouseup"
          @mouseleave="mousemove"
        />
        <!--      关闭按钮-->
        <div class="title">人脸识别</div>
        <div class="close" @click="toggleShow">×</div>
        <div class="content">
          <!--插槽-->
          <slot />
        </div>
      </div>
    </transition>
    <el-button @click="toggleShow">aa</el-button>
  </div>
</template>

<script>
export default {
  name: 'MoveBox',
  data() {
    return {
      show: true, // 是否显示
      x: 1800, // left:x
      y: 700, // top:y
      leftOffset: 0, // 鼠标距离移动窗口左侧偏移量
      topOffset: 0, // 鼠标距离移动窗口顶部偏移量
      isMove: false// 是否移动标识
    }
  },
  computed: {
    // top与left加上px
    position() {
      return `top:${this.y}px;left:${this.x}px;`
    }
  },
  methods: {
    // 控制打开关闭
    toggleShow() {
      this.x = 1800
      this.y = 700
      this.show = !this.show
    },
    mousedown(event) {
      // 鼠标按下事件
      this.leftOffset = event.offsetX
      this.topOffset = event.offsetY
      this.isMove = true
    },
    // 鼠标移动
    mousemove(event) {
      if (!this.isMove) {
        return
      }
      this.x = event.clientX - this.leftOffset
      this.y = event.clientY - this.topOffset
    },
    // 鼠标抬起
    mouseup() {
      this.isMove = false
    }
  }
}
</script>

<style lang="less" scoped>
.moveBox {
  width: 300px;
  height: 300px;
  position: fixed;
  box-shadow: 0 0 5px 3px #95a5a6;
  .moveHead {
    height: 30px;
    background-color: #bdc3c7;
    cursor: move;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 30px;
    font-size: 24px;
    cursor: pointer;
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  .title {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 30px;
    font-size: 20px;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.content {
  padding: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
