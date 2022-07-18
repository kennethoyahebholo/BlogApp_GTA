<template>
 <footer>
  <h3>Join our Teams of Writers</h3>
  <p>On dasdas, writers earn a living doing what they love.</p>
  <p>Getting Started is easy. Just Pay a one time <span>$25 fee </span>and everything is ready to go.</p>
  <Button></Button>
 </footer>
</template>


<script>
import Button from '../components/Button.vue'
export default {
 name: 'Footer',

 components: {
  Button,
 },
}


</script>



<style scoped>
a{
 color: #333;
}

footer {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 3rem 0;
 text-align: center;
}

footer h3{
 font-size: 17px;
 margin-bottom: 10px;
}
footer p {
 font-size: 12px;
 margin-bottom: 4px;
}
footer button {
 background-color: rgb(23, 23, 23);
 padding: .4rem 2rem;
 font-size: 10px;
 color: white;
 margin-top: 20px;
}

footer span{
 color: rgb(82, 82, 82);
 font-size: 15px;
 font-weight: 700;
}
</style>