<template>
 <div>
  <!-- <AddTask v-show="showAddTask" @add-task="addTask" /> -->

  <TopComponent @toggle-reminder="toggleReminder" @delete-task="deleteTask" />
  <BodyComponent @show-blog-page="showSinglePage" :blogLists="blogLists" />
  <Footer></Footer>
  <!-- <p>hello world</p> -->
 </div>
</template>

<script>
import TopComponent from '../components/TopComponent'
import BodyComponent from '../components/BodyComponent'
import Footer from '../components/Footer'
// import AddTask from '../components/AddTask'

export default {
 name: "Home",
 props: {
  showAddTask: Boolean,
 },
 components: {
  TopComponent,
  BodyComponent,
  Footer 
 },
 data() {
  return {
   blogLists: []
  }
 },
 methods: {

  showSinglePage(){
    console.log('hello world')
  },


  async fetchBlogLists() {
   const res = await fetch("api/blogLists")

   const data = await res.json()


   return data
  },
  async fetchBlogList(id) {
   const res = await fetch(`api/blogLists/
      ${id}`)

   const data = await res.json()


   return data
  },
 },

 async created() {
  this.blogLists = await this.fetchBlogLists()
  // [
  //   {
  //     id: 1,
  //     text: "Doctors Appointment",
  //     day: 'March 1st at 2:30pm',
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Meeting at School",
  //     day: 'March 3rd at 1:30pm',
  //     reminder: true,
  //   },
  //   {
  //     id: 3,
  //     text: "Food Shopping",
  //     day: 'March 3ed at 11:00am',
  //     reminder: false,
  //   }
  // ]
 },
}
</script>