<template>
 <header>
  <router-link to="/">
   <section class="header_logo">

    <section class="logo_text">
     <h5>{{ title }}</h5>
    </section>


   </section>
  </router-link>
  <section class="icon_con">
   <span><img src='../assets/image/Vectortwiter.png' alt="" /></span>
   <p>.</p>
   <img src='../assets/image/Vectorbas1.png' alt="" />
   <p>.</p>
   <img src='../assets/image/Vectorfig.png' alt="" />
   <p>.</p>
   <img src='../assets/image/Vectorgithub.png' alt="" />
  </section>
 </header>
</template>

<script>
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
 align-items: center;
 margin-bottom: 20px;
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