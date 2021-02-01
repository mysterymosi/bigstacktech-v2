<template>
  <div>
    <!-- <Preloader />
    <Header /> -->
    <About>
      <p
        slot="about"
      >Bigstack Technologies is one of the fastest growing technological company geared towards developing solutions that enhances professionalism, builds credibility, affects consumer perceptions, establishes relevance, and closes the bridge between you and your audience.</p>
      <p slot="about2">BST focuses her efforts in three main service areas: application/software development, database and support/training. BST strives to foster and maintain solid relationships with her clients, fine tune IT services, and continue to develop innovative business solutions that will improve the way their clients do business. As such, BST has the unique ability to act quickly, and easily meets or beats her client's deadlines.</p>
    </About>
    <div style="margin-bottom: 70px;" class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-5 col-md-5 about-left">
          <h1 style="margin-bottom: 20px;">Mission Statement</h1>
          <p>It is BST mission to improve technological advancement through Information Communication Technology (ICT), while creating an environment for learning and improving the skills of interested individuals and future generation in the vast technological world. BST strives to foster and maintain positive relationships with each and every client (both internal and external), by providing cutting edge technological services at reasonable and competitive prices</p>
        </div>
        <div class="col-lg-6 col-md-6 about-right">
          <img class="img-fluid" src="../assets/img/about.svg" alt />
        </div>
      </div>
    </div>
    <Clients />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Preloader from "@/components/Preloader.vue";
// import Header from "@/components/TheHeader.vue";
import About from "@/components/About.vue";
import Clients from "@/components/Clients.vue";
// import Footer from "@/components/TheFooter.vue";

export default {
  components: {
    // Preloader,
    // Header,
    About,
    Clients,
    // Footer
  }
};
</script>
