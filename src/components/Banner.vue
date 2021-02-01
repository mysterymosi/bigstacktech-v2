<!-- <template>
  <div id="hero" class="hero-section">
    <div
      id="hero-carousel"
      class="hero-carousel carousel carousel-fade slide"
      data-ride="carousel"
      data-interval="10000"
    >
      <div class="carousel-inner">
        <div class="carousel-item item-1 active">
          <div class="item-contenut container">
            <div class="item-content-inner">
              <h2 class="heading">Bigstack Technologies</h2>
              <p
                class="intro"
              >We Build Cutting-edge Technological Solutions for Your Specific Needs</p>
              <a
                class="btn btn-primary btn-cta"
                href="#contact-section"
              >Let's Build Your Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VueInjectJs src="/banner-plugins/jquery-3.3.1.min.js" />
    <VueInjectJs src="https://code.jquery.com/jquery-migrate-3.0.0.min.js" />
    <VueInjectJs src="/banner-plugins/jquery-scrollTo/jquery.scrollTo.min.js" />
    <VueInjectJs src="/banner-js/main.js" />
  </div>
</template>

<script>
import VueInjectJs from "vue-inject-js";
export default {
  components: {
    VueInjectJs
  }
};
</script>

<style scoped>
@import url("../assets/banner-css/styles.css");

.heading {
  color: #fff;
}

.btn-primary {
  background-color: #24b99a
}

.btn-primary:hover {
  background-color: #fff;
  color: #24b99a;
}

.btn-primary:active {
  background-color: #fff;
  color: #24b99a;
}

.intro {
  color: #fff;
}

.item-content-inner {
  margin: 190px auto;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards .5s;
}

@keyframes fadeIn {
  100% {
    opacity: 1;
    margin: 60px auto;
  }
}

.item-content-inner > a {
  transform: scale(0);
  animation: scaleout 1s forwards 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scaleout {
  100% {
    transform: scale(1);
  }
}

</style>
 -->

<template>
  <section class="banner-section relative section-gap-full" id="banner-section">
        <div class="overlay overlay-bg"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9 banner-left mx-auto text-center">
                    <h1 class="text-uppercase">Bigstack Technologies</h1>
                    <h4>We Build Cutting-edge Technological Solutions for Your Specific Needs</h4>
                    <a class="video-btn primary-btn" href="about-us.html">About More</a>
                </div>
               <!--  <div class="col-md-6 banner-right text-center">
                    <img class="img-fluid" src="img/screen1.png" alt="">
                </div> -->
            </div>
        </div>
        <div class="wave">
            <svg class="nectar-shape-divider" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300"
                preserveAspectRatio="none">
                <path d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path>
                <path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path>
                <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
            </svg>
        </div>
    </section>
</template>

<style scoped>
.container {
  margin-top: 130px;
}
</style>