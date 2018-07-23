<template>
  <div id="index" class="container">
    <p>Score: {{score}}/10</p>
    <div v-for="(question, index) in questions" v-bind:key="index" class="row">
      <question :question="question" :index="index" />
    </div>
  </div>
</template>

<script>
import {get} from 'vuex-pathify'
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
  }, 
  computed: {
    score: get('Score')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
