<template>
  <div class="">
    <BodyContainer @btn-click="$emit('show-blog-page')" :blogList="blogList" />
    <br>
    <br>
    <br>
    <BodyContainer @btn-click="$emit('show-blog-page')" :blogList="blogList" />
    <Button></Button>
    <!-- <BodyContainer :blogList="blogList" /> -->
  </div>
</template>



<script>
import BodyContainer from './BodyContainer'
import Button from './Button'


export default {
 name: 'BodyComponent',
 props: {
  blogList: Object
 },
 components: {
  BodyContainer,
  Button,
  // BlogsCon,
 },
 // emits: ['delete-task', 'toggle-reminder']
}
</script>






<style scoped>
 /* .blog_con{
  display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   flex-wrap: wrap;
   margin-top: 4rem;
  } */
  
  .blogs {
   background-color: white;
   box-shadow: 0em 0em .2em rgba(67, 67, 67, 0.219);
   padding: 5px;
   border-radius: 6px;
   margin-bottom: 4rem;
   height: 25rem;
  }
  
  @media (min-width: 50em) {
   .blog_con {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 6rem;
    /* height: 4rem; */
    /* background-color: aqua;
       margin-top: 4rem; */
   }
  
   .blogs {
    /* margin-right: 2rem; */
   }
  }
</style>