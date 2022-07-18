<template>
 <div>
  <TopComponent @toggle-reminder="toggleReminder" @delete-task="deleteTask" />
  <BodyComponent @show-blog-page="showSinglePage" :blogLists="blogLists" />
  <Footer></Footer>
 </div>
</template>

<script>
import TopComponent from '../components/TopComponent'
import BodyComponent from '../components/BodyComponent'
import Footer from '../components/Footer'

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
 },
}
</script>