<template>
  <div id="index">
    <div v-for="question in questions" v-bind:key="question.question">
      <question :question="question" />
    </div>
  </div>
</template>

<script>
import APICalls from '../../utilities/apicalls'
import Question from '../Question'
export default {
  name: 'Index',
  components: {
    Question
  },
  data () {
    return {
      questions: ''
    }
  },
  mounted(){
    let questionsPromise = APICalls.getQuestions();
    questionsPromise.then(x=>{
      this.questions = x.data.results;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
