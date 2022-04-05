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
            <!--作文输入框-->
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
          <div v-for="(item,index) in answers" :key="index">
            <el-row>
              <el-divider />
            </el-row>
            <el-row>
              <el-col :span="2">
                <el-button id="listen-mark-button" size="small" :plain="!totalAnswer[item.content].mark" type="warning" icon="el-icon-star-off" circle @click="changeListenMark(item)" />
                <span id="answer-number">{{ item.content }}.</span>
              </el-col>
              <el-col :span="22">
                <el-radio-group v-model="totalAnswer[item.content].answer">
                  <el-radio class="answer-radio" :label="item.A">{{ item.A }}</el-radio>
                  <br>
                  <el-radio class="answer-radio" :label="item.B">{{ item.B }}</el-radio>
                  <br>
                  <el-radio class="answer-radio" :label="item.C">{{ item.C }}</el-radio>
                  <br>
                  <el-radio class="answer-radio" :label="item.D">{{ item.D }}</el-radio>
                  <br>
                </el-radio-group>
              </el-col>
            </el-row>

          </div>
        </div>
        <!--阅读理解-->
        <div v-if="showReading">
          <div v-for="(item,index) in answers" :key="index">
            <el-row>
              <el-divider />
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-button id="reading-mark-button" size="small" :plain="!totalAnswer[item.number].mark" type="warning" icon="el-icon-star-off" circle @click="changeReadingMark(item)" />
                <span id="reading-answer-title">{{ item.content }}</span>
              </el-col>
              <el-col :span="24">
                <div>
                  <el-radio-group v-model="totalAnswer[item.number].answer">
                    <el-radio class="reading-choice" :label="item.A">{{ item.A }}</el-radio>
                    <br>
                    <el-radio class="reading-choice" :label="item.B">{{ item.B }}</el-radio>
                    <br>
                    <el-radio class="reading-choice" :label="item.C">{{ item.C }}</el-radio>
                    <br>
                    <el-radio class="reading-choice" :label="item.D">{{ item.D }}</el-radio>
                    <br>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--十五选十-->
        <div v-if="showBlanks" style="margin-top: 10px">
          <el-divider style="margin-bottom: 20px" />
          <el-row v-for="(item,key,index) in answers" :key="index">
            <el-col id="blank-number" :span="2">
              <el-button id="blank-mark-button" size="small" :plain="!totalAnswer[item].mark" type="warning" icon="el-icon-star-off" circle @click="changeBlankMark(item)" />
              {{ item }}.
            </el-col>
            <el-col id="blank-answer" :span="4">
              <el-input v-model="totalAnswer[item].answer" />
            </el-col>
          </el-row>
        </div>
        <!--信息匹配-->
        <div v-if="showMatch" style="margin-top: 30px">
          <el-divider />
          <el-row v-for="(item,key,index) in answers" :key="index" class="match-question">
            <el-col id="match-input" :span="1">
              <el-input v-model="totalAnswer[key].answer" />
            </el-col>
            <el-col id="match-text" :span="20">
              <el-button id="match-mark-button" size="small" :plain="!totalAnswer[key].mark" type="warning" icon="el-icon-star-off" circle @click="changeMatchMark(key)" />
              {{ key }}. {{ item }}
            </el-col>
          </el-row>
        </div>
        <!--按钮控件-->
        <div>
          <span v-if="showInput" id="count-number">当前字数：{{ number }}</span>
          <span id="footer-button">
            <transition name="el-fade-in-linear">
              <el-button-group v-if="showTips">
                <el-button type="primary" plian icon="el-icon-arrow-left" @click="previousQuestion">上一题</el-button>
                <el-button type="primary" plian @click="nextQuestion">下一题<i class="el-icon-arrow-right el-icon--right" /></el-button>
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
          <el-collapse v-model="activeNames">
            <!--答题卡-->
            <el-collapse-item title="答题卡" name="answers">
              <el-col v-for="(item,key, index) in totalAnswer" :key="index" :span="4">
                <el-button :type="buttonType(item,key)" size="mini" class="answer-button" @click="jumpToQuestion(key)">
                  {{ item.name }}
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
      questionIndex: 0,
      viewerText: '',
      editorText: '',
      showTips: false,
      showQuestion: false,
      showInput: false,
      showListenAnswer: false,
      showBlanks: false,
      showMatch: false,
      showReading: false,
      question: {},
      number: 0,
      answers: [],
      // chooseAnswer: {},
      // audioInfo: {},
      // blankAnswer: {},
      // matchAnswer: {},
      totalAnswer: []
    }
  },
  watch: {
    editorText: {
      immediate: false,
      // 计算字数
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
        // console.log(this.totalAnswer[this.question.name])
        this.totalAnswer[this.question.name].answer = this.editorText
        this.number = length
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
    this.createAnswer()
    console.log(this.totalAnswer[1].answer)
    this.updateQuestion()
  },
  methods: {
    createAnswer() {
      const answer = []
      for (let i = 0; i <= 56; i++) {
        answer[i] = {
          name: i,
          answer: '',
          mark: false
        }
      }
      answer[0].name = '写作'
      answer[56].name = '翻译'
      this.totalAnswer = answer
    },
    // 更新题目
    updateQuestion() {
      this.showTips = false
      this.showInput = false
      this.showQuestion = false
      this.showListenAnswer = false
      this.showBlanks = false
      this.showMatch = false
      this.showReading = false
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
        case 'match':
          // 信息匹配
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showMatch = true
          }, 300)
          break
        case 'reading':
          // 阅读理解
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.showTips = true
            this.showReading = true
          }, 300)
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
    },
    jumpToQuestion(key) {
      if (key === 0) {
        this.questionIndex = 0
      } else if (key >= 1 && key <= 2) {
        this.questionIndex = 2
      } else if (key >= 3 && key <= 4) {
        this.questionIndex = 3
      } else if (key >= 5 && key <= 7) {
        this.questionIndex = 4
      } else if (key >= 8 && key <= 11) {
        this.questionIndex = 6
      } else if (key >= 12 && key <= 15) {
        this.questionIndex = 7
      } else if (key >= 16 && key <= 18) {
        this.questionIndex = 9
      } else if (key >= 19 && key <= 21) {
        this.questionIndex = 10
      } else if (key >= 22 && key <= 25) {
        this.questionIndex = 11
      } else if (key >= 26 && key <= 35) {
        this.questionIndex = 13
      } else if (key >= 36 && key <= 45) {
        this.questionIndex = 15
      } else if (key >= 46 && key <= 50) {
        this.questionIndex = 17
      } else if (key >= 51 && key <= 55) {
        this.questionIndex = 18
      } else if (key === 56) {
        this.questionIndex = 19
      }
    },
    buttonType(item, index) {
      console.log('@', item)
      if (item.mark) {
        return 'warning'
      } else if (item.answer !== '') {
        return 'primary'
      } else {
        return ''
      }
    },
    changeListenMark(item) {
      this.totalAnswer[item.content].mark = !this.totalAnswer[item.content].mark
    },
    changeReadingMark(item) {
      this.totalAnswer[item.number].mark = !this.totalAnswer[item.number].mark
    },
    changeBlankMark(item) {
      this.totalAnswer[item].mark = !this.totalAnswer[item].mark
    },
    changeMatchMark(key) {
      this.totalAnswer[key].mark = !this.totalAnswer[key].mark
    }
  }
}
</script>

<style scoped>
#match-text{
  font-size: 18px;
  position: relative;
  top: -5px;
}
#match-mark-button{
position: relative;
  top: -2px;
  margin-right: 10px;
}
#blank-mark-button{
  margin-right: 10px;
  position: relative;
  top: -2px;
}
#reading-mark-button{
  margin-left: 10px;
  position: relative;
  top: -3px;
}
/*阅读理解题干*/
#reading-answer-title{
  font-size: 18px;
  margin-left: 20px;
}

.reading-choice{
  font-size: 25px;
  margin: 10px 10px 10px 80px;
}
/*信息匹配输入框*/
#match-input{
  position: relative;
  top: -10px;
  margin-right: 20px;
}
/*信息匹配题文字*/
.match-question{
  margin: 10px;
}

/*十五选十题号*/
#blank-number{
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  top:-5px;
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
  border-radius: 0;
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
  position: relative;
  top:6px;
  left: -10px;
  margin-bottom: 20px;
}
/*题号*/
#answer-number{
  font-size: 20px;
}
#listen-mark-button{
  position: relative;
  top: -3px;
  margin-left: 10px;
  margin-right: 10px;
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
