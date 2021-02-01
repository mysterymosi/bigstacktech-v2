<template>
  <!-- Start about section -->
  <section class="about-section section-gap-full relative" id="about-section">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6 about-left">
          <img class="img-fluid" src="../assets/img/chat.png" alt />
        </div>
        <div class="col-lg-5 col-md-5 about-right">
          <h3>About Us</h3>
          <h1>All The Things You Need To Know About Us</h1>
          <p v-if="$route.path !== '/about-us'">Bigstack Technologies, is a technology company that specialize in application/software development and database management. BST strives to provide high-quality technological business solutions with a concentrated focus to enhance Nigeria's eductional, e-commerce and defence sector.</p>
          <slot name="about"></slot>
          <slot name="about2"></slot>
          <router-link v-if="$route.path == path" class="primary-btn" to="/#contact-section">Launch Project</router-link>
          <router-link v-else class="primary-btn" to="/about-us">Know More</router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- End about section -->
</template>

<script>
export default {
  data() {
    return {
      path: "/about-us"
    };
  }
};
</script>
