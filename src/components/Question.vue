<template>
  <div class="hello">
    <p v-html="question.question"></p>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'Question',
  props: ['question'],
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    correctQuestion(){
      return this.question.correct_answer;
    },
    answers(){
      let answers = this.question.incorrect_answers;
      answers.push(this.correctQuestion);
      return _.shuffle(answers);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
