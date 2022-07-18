<!-- reusable button compnent -->
<template>
 <button @click="makePayment()" :style="{background: color}" class="btn">{{ text }}</button>
</template>



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
  },

  makePayment() {
   console.log('click')
   useFlutterwave({
    amount: 25,//amount
    callback(data){
      // TODO: handle callbacks
      if(data){
         setTimeout(()=>{
          alert("successful")          
          router.push("/")
         },10000)
      }else{
       alert("error")
      }
    },
    country: "NG",
    currency: "USD",
    customer: { email: 'testing@me.com', name: 'kenneth', phone_number: '+2347086967055' },
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


