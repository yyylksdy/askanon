<template>
<div>
  <div class='QnA'>
      <div id='question' @click='toggleVisibilty'>
        <slot></slot>
      </div>
      <div v-if='visible'>
        <Answers v-for='(answer, i) in question.answers' :key="i+answer+question.myid" class="answer">
            Answer: {{ answer }}
        </Answers>
        <div class='ansBox'>
            <input type="anstext" v-model='newAnswer' placeholder="Answer...">
            <!-- <button class="button" @click="postAnswer()">Post</button> -->
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import Answers from './Answers.vue'

export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    visible: false,
    newAnswer: ''
  }),
  methods: {
    toggleVisibilty () {
      console.log('Visibility toggled')
      this.visible = !this.visible
    }
  },
  components: {
    Answers
  }
}
</script>

<style>
#question{
    padding-bottom: 20px;
    padding-top: 20px;
    padding-right: 40px;
    padding-left: 10px;
    -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    background: rgba(240, 243, 243, 0.8);
    color: #202124;
    cursor: pointer;
    font-family: arial,sans-serif;
    border-radius: 5px;
}
.answer{
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 60px;
    padding-left: 10px;
    -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    display: -webkit-box;
    display: -webkit-flex;
    display: block;
    position: relative;
    background: rgba(242,245,245,0.8);
    color: #202124;
    cursor: pointer;
    font-family: arial,sans-serif;
    border-radius: 3px;
}
.answer:hover{
    background-color: #ccced4
}
.QnA{
    margin-top: 5px;
    margin-bottom: 5px;
}
input[type=anstext] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 5px 8px 5px 20px;
  transition: width 0.4s ease-in-out;
}
input[type=anstext]:focus {
  width: 70%;
}
.button {
  background-color: rgb(55, 185, 59); /* Green */
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
  width: 120px;
}
</style>
