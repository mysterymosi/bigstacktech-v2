<template>
  <div>
    <!-- <TheHeader /> -->
    <Banner />
    <About />
    <Feature />
    <Service />
    <Stat />
    <Portfolio />
    <Testimonial />
    <Contact />
    <!-- <TheFooter /> -->
    <ScrollTop />
    <!-- <VueInjectJs src="/js/main.js" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import TheHeader from "@/components/TheHeader.vue";
// import TheFooter from "@/components/TheFooter.vue";
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Feature from "@/components/Feature.vue";
import Service from "@/components/Service.vue";
import Stat from "@/components/Stat.vue";
import Portfolio from "@/components/Portfolio.vue";
import Testimonial from "@/components/Testimonial.vue";
import Contact from "@/components/Contact.vue";
import ScrollTop from "@/components/ScrollTop.vue";
// import VueInjectJs from "vue-inject-js";
export default {
  name: "Home",
  components: {
    // TheHeader,
    // TheFooter,
    // VueInjectJs,
    Banner,
    About,
    Feature,
    Service,
    Stat,
    Portfolio,
    Testimonial,
    Contact,
    ScrollTop
  }
};
</script>
