<template>
  <div id="app">
  	<Preloader />
  	<TheHeader  />
    <router-view />
    <TheFooter />
    <!-- <VueInjectJs src="/js/owl.carousel.min.js" />
    <VueInjectJs src="/js/jquery.stellar.min.js" />
    <VueInjectJs src="/js/jquery.counterup.min.js" />
    <VueInjectJs src="/js/waypoints.min.js" /> -->
    <VueInjectJs src="/js/main.js" />
    <VueInjectJs src="https://js.paystack.co/v1/inline.js" />
  </div>
</template>
<script>
import VueInjectJs from "vue-inject-js";
import TheHeader from "@/components/TheHeader.vue"
import Preloader from "@/components/Preloader.vue"
import TheFooter from "@/components/TheFooter.vue"
export default {
  components: {
    VueInjectJs,
    TheHeader,
    TheFooter,
    Preloader
  }
}
</script>
<style>
@import url("./assets/css/font-awesome.min.css");
@import url("./assets/css/bootstrap.min.css");
@import url("./assets/css/themify-icons.css");
@import url("./assets/css/owl.carousel.min.css");
@import url("./assets/css/animate.css");
@import url("./assets/css/style.css");
@import url("./assets/css/responsive.css");
</style>