<template>
  <div class="container">
    <Header 
    @toggle-add-task="toggleAddTask" 
    title="dasdas" :showAddTask="showAddTask"
    ></Header>

    <router-view :showAddTask="showAddTask"></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
  data(){
    return {
      blogLists: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com,css2?family=Poppins:wdgt@300;400&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Poppons', sans-serif;
  margin: .5rem 3rem;
}

.container {
  min-height: 100vh;
}


.btn{

  background-color: rgb(23, 23, 23);
  padding: .4rem 2rem;
  font-size: 10px;
  color: white;
  margin-top: 20px;
  /* display: inline-block; */
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
}
@media (min-width: 50em) {
  body {
      margin: .5rem 6rem;
    }
}
</style>
