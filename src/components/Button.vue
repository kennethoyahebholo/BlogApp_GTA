<!-- reusable button compnent -->



<template>
 <button @click="makePayment()" :style="{background: color}" class="btn">{{ text }}</button>
</template>

 <!-- <template>
  <form action="#" @submit.prevent="makePayment">
   <div class="btn-wrapper">
    <input type="number" v-model.number="amount" />
    <button type="submit">Make Payment</button>
   </div>
  </form>
 </template> -->


<script>

import { useFlutterwave } from "flutterwave-vue3"


export default {
 name: 'Button',
 props: {
  text: {
   type: String,   
   default: 'JOIN US'
  },
  color: String
 },
 methods: {
  onClick(){
   // this.$emit('btn-click')
   console.log('heloooooooooo')
  },

  makePayment() {
   console.log('click')
   useFlutterwave({
    amount: 25,//amount
    callback(data){
     //  TODO: handle callbacks
    },
    country: "NG",
    currency: "USD",
    customer: { email: 'example@me.com', name: 'kenneth', phone_number: '+2347086967055' },
    customizations: { description: "Pay with myBlogApp", logo: "", title: "BlogApp" },
    meta: {
     user_id: 1,
     token: "jdjdjdjdjd"
    },
    onclose(){

    },
    payment_options: "card",
    public_key: "FLWPUBK_TEST-36fc60efb3c55e35eeae94bed9314bfb-X",
    redirect_url: undefined,
    tx_ref: "tx_ref_herer_h92hjyj3"
   })
  }
 }
}
</script>


