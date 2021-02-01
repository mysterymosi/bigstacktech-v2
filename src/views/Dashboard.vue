<template>
  <div>
    <Sidebar />
    <div id="right-panel" class="right-panel">
      <Header />
      <div class="content">
        <div class="animated fadeIn">
          <router-view />
        </div>
      </div>
      <div class="clearFix"></div>
      <!-- <Footer /> -->
    </div>
    <VueInjectJs src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js" />
    <VueInjectJs src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js" />
    <VueInjectJs src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" />
    <VueInjectJs src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js" />
    <VueInjectJs src="/dashboard-js/main.js" />
    <VueInjectJs src="/dashboard-js/lib/chosen/chosen.jquery.min.js" />
    <!-- <VueInjectJs src="" /> -->
  </div>
  <!-- <Preloader /> -->
</template>

<script>
import VueInjectJs from "vue-inject-js";
import Header from "@/components/Dashboard/TheHeader.vue";
import Sidebar from "@/components/Dashboard/TheSidebar.vue";
// import Footer from "~/components/Dashboard/Footer.vue";
export default {
  // middleware: ["check-auth", "auth", "check-if-admin"],
  components: {
    Header,
    Sidebar,
    VueInjectJs
    // Footer
  },
  mounted() {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.$store.commit("user/SET_USER", user);
    }
  }
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css");
@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
@import url("https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css");
@import url("../assets/dashboard-assets/css/cs-skin-elastic.css");
@import url("../assets/dashboard-assets/css/style.css");
@import url("../assets/dashboard-assets/css/lib/chosen/chosen.min.css");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800");
</style>
