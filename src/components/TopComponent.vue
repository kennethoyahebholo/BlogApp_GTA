<template>

  <main>
    <div class="top_container">
      <section class="">
        <img src='../assets/image/largeb11.png' alt="">
      </section>
      <section class="">
        <article>
          <h6>Front-end . 1 Hour Ago</h6>

          <h3>Optimizing CSS for faster page loads</h3>

          <p>Not long ago i decided to improve the loading times of my website. it already loads prettu fast, but i knew
            there was still room for improvement and one of them was CSS loading. I will walk you through the process
            and show you how you can improve your load times as well.</p>

          <p>To see how CSS affects the load tine of a webpage we furst have to know how the browser converts an HTML
            document into a functional webpage...</p>
        </article>
        <section class="right_sub_section">
          <p>3 Min Read</p>
          <span>
            <router-link class="arrow_icon_con" to="/singleblogpage">
              <p>Read Full...</p>
            </router-link>
          </span>
        </section>
      </section>
    </div>
  </main>
</template>


<script>


export default {
 name: 'TasksT',
 props: {
  blogLists: Array,
 },
 components: {
 },
//  emits: ['delete-task', 'toggle-reminder']
}

</script>


<style scoped>


.arrow_icon_con {
  display: flex;
  text-decoration: none;
  color: #1473e6;
}













.top_container{
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

.top_container > *:nth-child(1) {
  flex: 1 1 20%;
}

.top_container>*:nth-child(2) {
flex: 1 1 80%;
padding: 10px;
}

.top_container img {
  max-width: 24.1rem;
}
.testimonial{
  flex: 1 1 70%;
}

.testimonial_right{
  flex: 1 1 30%;
}

.testimonial img {
  max-width: 24rem;
}

.top_container h6 {
  font-size: 14px;
  margin-bottom: .5rem;
}

.top_container h3 {
  font-size: 21px;
  margin-bottom: .4rem;
  color: rgb(68, 68, 68);
}

.top_container p {
  font-size: 13px;
  margin-bottom: 1.5rem;
}

.right_sub_section {
  display: flex;
  justify-content: space-between;
}

.right_sub_section span {
  display: flex;
  justify-content: space-between;
  color: rgb(33, 155, 255);
}

@media (min-width: 50em){
.top_container {
    flex-direction: row;
  }
}
</style>