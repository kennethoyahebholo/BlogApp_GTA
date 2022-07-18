<template>
   <main class="testimonial-grid">
      <article class="testimonial">
         <img src='../assets/image/minib1.png' alt="">
         <article>
            <h6>
               Front-end . 1 Month Ago
            </h6>
            <h3>
               Css Grid
            </h3>
            <p>
               The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to
               design web
               pages without having to use floats and positioning.
            </p>
            <section class="right_sub_section">
               <p>3 Min Read</p>
               <router-link class="arrow_icon_con" to="/singleblogpage">
                  <p>Read Full...</p>
               </router-link>
            </section>
         </article>
      </article>

      <article class="testimonial">
         <img src='../assets/image/Vectorb1.png' alt="">
         <article>
            <h6>
               Front-end . 2 Month Ago
            </h6>
            <h3>
               Colors in Css
            </h3>
            <p>
               Colors play a vital role in making a web page usable or not. In Css, we can control the foreground and
               background
               color of an element with the color and background properties.
            </p>
            <section class="right_sub_section">
               <p>8 Min Read</p>
               <router-link class="arrow_icon_con" to="/singleblogpage2">
                  <p>Read Full...</p>
               </router-link>
            </section>
         </article>
      </article>

      <article class="testimonial">
         <img src='../assets/image/Vectorb3.png' alt="">
         <article>
            <h6>
               Front-end . 2 Month Ago
            </h6>
            <h3>
               Css Variables
            </h3>
            <p>
               CSS variables are custom properties that cascade normally and even inherit. They start with a reserved
               --prefix,
               and there are no real rules about their value.
            </p>
            <section class="right_sub_section">
               <p>10 Min Read</p>
               <router-link class="arrow_icon_con" to="/singleblogpage3">
                  <p>Read Full...</p>
               </router-link>
            </section>
         </article>
      </article>
   </main>
</template>



<script>
export default {
 name: "BodyContainer",
 props: {
  blogList: Object,
 },
 methods: {
  onSubmit(e) {
   e.preventDefault()

   if (!this.text) {
    alert('Please add a task')
    return
   }

   const newTask = {
    // id: Math.floor(Math.random()* 100000),
    text: this.text,
    day: this.day,
    reminder: this.reminder
   }

   this.$emit('add-task', newTask)

   this.text = '',
    this.day = '',
    this.reminder = false
  }
 }
}
</script>



<style scoped>










.arrow_icon{
 width: .1px;
}

.arrow_icon_con {
 display: flex;
 text-decoration: none;
 color: #1473e6;
}


.testimonial span {
 display: flex;
}











.testimonial-grid{
 display: flex;
 gap: 5rem;
 flex-wrap: wrap;
}


.testimonial{
 box-shadow: 0em 0em .2em rgba(67, 67, 67, 0.219);
  padding: 5px;
  border-radius: 6px;
  width: 24rem;
  color: rgb(110, 110, 110);
}

.testimonial img {
 width: 23.4rem;
 margin-bottom: 1rem;
}

.testimonial h6 {
 font-size: 13px;
 margin-bottom: .5rem;
}

.testimonial h3 {
 font-size: 21px;
 margin-bottom: .4rem;
 color: rgb(68, 68, 68);
}

.testimonial p {
 font-size: 12px;
 margin-bottom: 1.5rem;
}

.right_sub_section{
 display: flex;
 justify-content: space-between;
}

.right_sub_section span{
 display: flex;
 justify-content: space-between;
 color: rgb(33, 155, 255);
 cursor: pointer;
}








 /* .blog_con{
   } */

.blogs_container {
 margin: 4rem 3rem;
 background-color: white;
 box-shadow: 0em 0em .2em rgba(67, 67, 67, 0.219);
 padding: 5px;
 border-radius: 6px;
 margin-bottom: 4rem;
 height: 25rem;
}
   
.blogs_container img{
 object-fit: contain;
}
   
   @media (min-width: 60em) {
   }

   @media (min-width: 80em) {
   }
</style>