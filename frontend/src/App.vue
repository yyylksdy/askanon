<template>

  <div id="app">
    <div>
      <div>
        <h1 class='postQuery'>AskAnon</h1>
      </div>
      <div>
        <Questions v-for='(question, i) in queries' v-bind:key="i+question+question.myid" v-bind:question="question">
          Q: {{ question.question }}
        </Questions>
      </div>
  </div>
  </div>

</template>

<script>
import Questions from './components/Questions.vue'
export default {
  name: 'App',
  data: () => ({
    newQuery: '',
    newID: ''
  }),
  computed: {
    queries () {
      return this.$store.state.queries
    }
  },
  mounted () {
    this.$store.dispatch('getAllQueries')
  },
  components: {
    Questions
  }
}
</script>

<style>
.QPbutton {
  background-color: rgb(151, 49, 49);
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
  width: 150px;
}
input[type=text] {
  width: 70%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 5px 8px 5px 20px;
}
</style>
