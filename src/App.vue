<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import APICalls from './utilities/apicalls'
export default {
  name: 'App',
  mounted(){
    // let questions = APICalls.getQuestions();
    // console.log(questions);
  }
}
</script>

<style lang="scss">
@import "./node_modules/bootstrap/scss/bootstrap-reboot";
@import "./node_modules/bootstrap/scss/bootstrap-grid";
@import "./node_modules/bootstrap/scss/utilities";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
