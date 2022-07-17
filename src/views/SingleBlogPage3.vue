<template>
 <section>
  <main>
   <p>By Ryan Jackson 2 Months Ago</p>

   <h3>Optimizing CSS for fater page loads</h3>

   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi nemo harum amet esse deserunt obcaecati
    dolorem
    asperiores vel dignissimos adipisci saepe voluptatem quidem, voluptates, veritatis possimus? Quidem doloribus
    laborum
    maiores animi temporibus vitae voluptatibus a, deserunt, quam incidunt modi magni sit harum, accusantium
    aspernatur.
    Laboriosam omnis cupiditate deserunt totam voluptas dicta hic ipsa debitis voluptates, id, accusantium ad, odio
    architecto eius aperiam aspernatur maiores quod dolore doloribus praesentium est! Animi voluptatibus maiores
    quis
    autem provident tenetur. Cupiditate esse nisi repellendus nihil inventore sapiente, dolores reprehenderit,
    distinctio, sunt modi a non minus aspernatur error quis in nostrum dicta quia? Dolor?</p>
   <div class="img">
    <img src="../assets/image/Vectorb3.png" alt="">
   </div>



   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi possimus tenetur quisquam sed ipsa, eveniet fuga
    similique praesentium inventore deserunt labore, ab itaque qui natus harum molestiae ea esse nihil officiis. Ea
    sed
    ut fugit. Fugit magnam sunt, ipsum velit assumenda quam labore animi sit delectus explicabo ab rem minima
    nostrum
    ullam quasi reprehenderit quae quibusdam? Architecto illo eum obcaecati doloribus quod ad similique aperiam
    incidunt,
    perferendis non eaque fugiat labore rerum voluptatum deleniti tempora corporis! Eum est asperiores officia?</p>

   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis ex placeat dolores cupiditate,
    corrupti repellendus. Obcaecati, perspiciatis? Natus excepturi maxime numquam necessitatibus ipsum cumque?</p>
  </main>
  <section>
   <MoreArticles />
  </section>
 </section>
</template>


<script>
import MoreArticles from './MoreArticles'
import BodyContainer from '../components/BodyContainer'

export default {
 name: "SingleBlogPage3",
 props: {
  // showAddTask: Boolean,
 },
 components: {
  MoreArticles,
  BodyContainer
 },
}
</script>




<style scoped>
main {
 /* background-color: aqua; */
 margin: 4rem .1rem;
 color: rgb(66, 66, 66);
}

main h3 {
 font-size: 19px;
 font-weight: 800;
 letter-spacing: -1px;
 margin-bottom: 1rem;
 color: rgb(43, 43, 43);
}

main p {
 font-size: 14px;
 margin-bottom: .5rem;
}

.img {
 display: flex;
 align-items: center;
 justify-content: center;
 /* background-color: aqua; */
 margin: 2rem 0;
}

main img {
 width: 24rem;
 object-fit: contain;
 display: flex;
 align-self: center;

 /* padding: 0 10rem; */
}

@media (min-width: 50em) {
 main {
  margin: 4rem 7rem;
 }
}

@media (min-width: 60em) {
 /* .testimonial-grid {
         grid-template-columns: repeat(2, 1fr);
        } */
}

@media (min-width: 80em) {
 main {
  margin: 4rem 15rem;
 }
}
</style>