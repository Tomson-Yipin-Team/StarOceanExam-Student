<template>
  <div>
    <!--顶栏-->
    <el-card class="header-card">
      <span>2019年6月四级真题（第2套）模拟考试</span>
      <el-divider direction="vertical" />
      <span>
        考生:{{ $store.state.user.name }}
      </span>
      <span id="tips">
        考试时间 :
        <span class="time">
          <CountDown />
        </span>
        <el-divider direction="vertical" />
        <el-button type="primary" class="submit-button">交卷</el-button>
      </span>
    </el-card>

    <!--题目面板-->
    <el-col :span="18">
      <el-card class="question-container">
        <!--听力控件-->
        <transition name="el-fade-in-linear">
          <aplayer v-if="showListenAnswer" id="audio-player" :music="audioInfo" />
        </transition>
        <!--题目-->
        <transition name="el-fade-in-linear">
          <Viewer v-if="showTips" style="margin: 10px" :initial-value="viewerText" />
        </transition>
        <el-row type="flex" justify="center">
          <transition name="el-fade-in-linear">
            <el-input
              v-if="showInput"
              v-model="editorText"
              type="textarea"
              class="answer-input"
              :rows="10"
              placeholder="请输入内容"
            />
          </transition>
        </el-row>
        <!--听力题目-->
        <div v-if="showListenAnswer">
          <el-col v-for="(item,index) in answers" :key="index" :span="24">
            <el-divider />
            <div>
              <span id="answer-number">{{ item.content }} .</span>
              <el-radio-group v-model="chooseAnswer[index]">
                <el-radio class="answer-radio" :label="item.A">{{ item.A }}</el-radio>
                <br>
                <el-radio class="answer-radio" :label="item.B">{{ item.B }}</el-radio>
                <br>
                <el-radio class="answer-radio" :label="item.C">{{ item.C }}</el-radio>
                <br>
                <el-radio class="answer-radio" :label="item.D">{{ item.D }}</el-radio>
                <br>
              </el-radio-group>
            </div>
          </el-col>
        </div>
        <!--十五选十-->
        <div v-if="showBlanks" style="margin-top: 20px">
          <el-row v-for="(item,index) in answers" :key="index">
            <el-col id="blank-number" :span="1">
              {{ item }}:
            </el-col>
            <el-col id="blank-answer" :span="4">
              <el-input v-model="blankAnswer[index]" />
            </el-col>
          </el-row>
        </div>
        <!--按钮控件-->
        <div>
          <span v-if="showInput" id="count-number">当前字数：{{ number }}</span>
          <span id="footer-button">
            <transition name="el-fade-in-linear">
              <el-button-group v-if="showTips">
                <el-button @click="previousQuestion">上一题</el-button>
                <el-button type="primary" @click="nextQuestion">下一题</el-button>
              </el-button-group>
            </transition>
          </span>

        </div>
      </el-card>
    </el-col>

    <!--工具面板-->
    <el-col :span="6">
      <el-card class="question-container">
        <div>
          <!--<el-button-group>-->

          <!--</el-button-group>-->
          <el-collapse v-model="activeNames">
            <el-collapse-item title="答题卡" name="answers">
              <el-col v-for="(item, index) in paper.question" :key="index" :span="6">
                <el-button round class="answer-button">
                  {{ index }}
                </el-button>
              </el-col>
            </el-collapse-item>
            <el-collapse-item title="工具箱" name="tools">
              <el-button>铅笔</el-button>
              <br>
              <el-button>荧光笔批注</el-button>
              <br>
              <el-button>文本框</el-button>
              <br>
              <el-button>时钟计时</el-button>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import CountDown from '@/views/examination/test/components/CountDown'
import PaperContent from '@/api/paper-content'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/vue-editor'
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import APlayer from 'vue-aplayer'

export default {
  name: 'Index',
  components: {
    CountDown,
    Viewer,
    aplayer: APlayer
  },
  data() {
    return {
      activeNames: ['answers'],
      paper: PaperContent.englishExam,
      questionIndex: 14,
      viewerText: '',
      editorText: '',
      showTips: false,
      showQuestion: false,
      showInput: false,
      showListenAnswer: false,
      showBlanks: false,
      question: {},
      number: 0,
      answers: [],
      chooseAnswer: [],
      audioInfo: {},
      blankAnswer: []
    }
  },
  watch: {
    editorText: {
      immediate: true,
      handler(newString) {
        newString = newString.replace(/[\u4e00-\u9fa5]+/g, ' ')
        newString = newString.replace(/\n|\r|^\s+|\s+$/gi, '')
        newString = newString.replace(/\s+/gi, ' ')
        let length = 0
        const match = newString.match(/\s/g)
        if (match) {
          length = match.length + 1
        } else if (newString) {
          length = 1
        }
        this.number = length
        // console.log(length)
      }
    },
    questionIndex: {
      immediate: true,
      handler() {
        this.question = this.paper.question[this.questionIndex]
        this.answers = this.question.answers
        this.updateQuestion()
      }
    }
  },
  beforeCreate() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:#f7f7f7')
  },
  mounted() {
    // 首次打开页面进行更新
    this.updateQuestion()
  },
  methods: {
    // 更新题目
    updateQuestion() {
      this.showTips = false
      this.showInput = false
      this.showQuestion = false
      this.showListenAnswer = false
      this.showBlanks = false
      // this.question = this.paper.question[this.questionIndex]

      switch (this.question.category) {
        case 'writing':
          // 写作题
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showInput = true
          }, 300)
          break
        case 'tip':
          // 提示
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
          }, 300)
          break
        case 'listen':
          // 听力题
          this.viewerText = this.question.tip
          this.audioInfo = this.question.audioInfo
          // this.answers = this.question.answers
          setTimeout(() => {
            this.showTips = true
            this.showListenAnswer = true
          }, 300)
          break
        case 'blanks':
          // 十五选十
          // this.answers = this.question.answers
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showBlanks = true
          }, 300)
          break
      }
    },
    nextQuestion() {
      if (this.questionIndex < this.paper.question.length - 1) {
        this.questionIndex += 1
      } else {
        this.$notify({
          title: '警告',
          message: '已经是最后一题！',
          type: 'warning'
        })
      }
    },
    previousQuestion() {
      if (this.questionIndex > 0) {
        this.questionIndex -= 1
      } else {
        this.$notify({
          title: '警告',
          message: '已经是第一题！',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped>
/*十五选十题号*/
#blank-number{
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  top:0px;
  left: 5px;
  font-weight: bold;
  font-size: 1.2em;
}
/*十五选十输入框*/
#blank-answer{
  margin-bottom: 20px;
}
#tips{
  float: right;
  transform: translate(-00%,-25%);
  /*width: 400px;*/
}
.submit-button{
  width: 100px;
  padding: 10px;
}
.header-card{
  border-radius: 0px;
}
.time{
  font-size: 1.5em;
  font-weight: bold;
  color: #a29bfe;
}
.question-container{
  margin: 10px;
  min-height: 500px;
}
/*答题卡按钮*/
.answer-button{
  width: 80%;
  margin: 10px;
}
/*答案输入框*/
.answer-input{
  margin: 10px;
  width: 100%;
}
/*底部按钮*/
#footer-button{
  float: right;
  margin: 10px 10px 20px;
}
/*字数统计*/
#count-number{
  float: left;
  margin: 10px;
}
/*音频播放器*/
#audio-player{
  margin: 10px 10px 20px;
}
/*答案选择器*/
.answer-radio{
  margin-bottom: 20px;
}
/*题号*/
#answer-number{
  position: relative;
  top:-65px;
  margin-right: 20px;
}
</style>

<style>
/*覆盖Viewer的样式*/
.toastui-editor-contents {
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-family: '微软雅黑','Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
  z-index: 20;
}

</style>
