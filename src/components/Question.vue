<template>
  <div class="hello">
    <p v-html="question.question"></p>
    <label v-for="(answer, num) in answers" v-bind:key="num" :for="getInputId(num)">
      <input type="radio" :name="index" :id="getInputId(num)" :value="answer" v-on:change="checkAnswer(answer)" /> {{answer}}
    </label>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'Question',
  props: ['question', 'index'],
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    correctAnswer(){
      return this.question.correct_answer;
    },
    answers(){
      let answers = this.question.incorrect_answers;
      answers.push(this.correctAnswer);
      return _.shuffle(answers);
    }
  },
  methods: {
    getInputId(index){
      return `question_${this.index}_${index}`;
    },
    checkAnswer(answer){
      console.log(answer == this.correctAnswer);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
