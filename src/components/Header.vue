<template>
 <header>
  <router-link to="/">
   <div class="header_logo">

    <section class="logo_text">
     <h5>{{ title }}</h5>
    </section>


   </div>
  </router-link>
  <div class="icon_con">
   <span><img src='../assets/image/Vectortwiter.png' alt="" /></span>
   <p>.</p>
   <img src='../assets/image/Vectorbas1.png' alt="" />
   <p>.</p>
   <img src='../assets/image/Vectorfig.png' alt="" />
   <p>.</p>
   <img src='../assets/image/Vectorgithub.png' alt="" />
  </div>
  <!-- <Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask? 'Close' :  'Add Task'"
   :color="showAddTask? 'red' :  'green'">
  </Button> -->
 </header>
</template>

<script>
// import twitterIcon from '../assets/Vectortwiter.png'
import Button from './Button'

export default {
 name: 'Header',

 props: {
  title: {
   type: String,
   default: 'Hello World',
  },
  showAddTask: Boolean
 },

 computed: {
  homePage() {
   if (this.$route.path === '/') {
    return true
   } else {
    return false
   }
   // if(this.$router.push()){

   // }
  }
 },

 components: {
  Button,
 },
}
</script>

<style scoped>
header {
 display: flex;
 justify-content: space-between;
 /* background-color: rgb(228, 228, 228); */
 align-items: center;
 margin-bottom: 20px;
 /* padding: .5rem 3rem; */
}

.header_logo {
 height: 70px;
 width: 70px;
 background-color: black;
 color: white;
 position: relative;
 text-decoration: none;
}

.logo_text {
 position: absolute;
 bottom: 4px;
 left: 2px;
}

.icon_con {
 display: flex;
 align-items: center;
 border-radius: 10px;
}

.icon_con img {
 margin-right: .6rem;
}

.icon_con span {
 color: purple;
}

.icon_con img:hover {
 /* background: purple; */
}

.icon_con p {
 margin-right: .6rem;
}

@media (min-width: 50em) {
 header {
  /* padding: 0.5rem 9rem; */
 }
}
</style>