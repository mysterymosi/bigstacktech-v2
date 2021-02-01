<template>
  <div>
    <!-- <Preloader />
    <Header /> -->
    <section class="service-section section-gap-full">
    <div class="container">
      <div class="section-title">
        <h1 class="text-center">Our Training Programmes</h1>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-user"></i>
            <h4>Web App Development Training</h4>
            <p
              class="bottom-space"
            >This course is meant for both novice and intermediate web developers. This comprehensive, easy-to-understand course will enhance your understanding of web development tools and techniques.</p>
            <p>Topics covered include the essential tools for web development such as: HTML, CSS, JAVASCRIPT, NODE.JS, PHP (laravel and codeigniter framework) and GOLANG. It also examines the practical steps needed to build a website such as registering a domain name and choosing a hosting account.</p>
            <div class="row">
              <router-link class="primary-btn" to="/contact-us">Enroll Here</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-bar-chart"></i>
            <h4>Desktop App Development Training</h4>
            <p
              class="bottom-space"
            >This course gives you the skills required to develop applications that run on windows and linux using PYTHON, JAVA, C++ and Visual Studio.</p>
            <p>At the end of this course, you would have acquired the following skills: Object-oriented programming concepts such as classes, interfaces, inheritance and creating software re-usable components. creating a larger application, programming databases, </p>
            <div class="row">
              <router-link class="primary-btn" to="/contact-us">Enroll Here</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-announcement"></i>
            <h4>Microsoft Packages Training</h4>
            <p
              class="bottom-space"
            >Microsoft office is a set of desktop application that offer flexible and powerful ways to organize, manage, and present information. Universally used in office settings, knowledge of Microsoft office tools are a must for anyone in today’s job market.</p>
            <p>Microsoft Office training from BST will help you or your team effectively utilize all the features of Microsoft Office products, and set you or your team up for Microsoft certifications, if desired.</p>
            <div class="row">
              <router-link class="primary-btn" to="/contact-us">Enroll Here</router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6">
          <div class="single-service">
            <i class="ti-palette"></i>
            <h4>Statistical Packages Training</h4>
            <p
              class="bottom-space"
            >Learn to analyse data via the following methods: Analysis of variance (one-way anova, two-way anova, mixed anova), Regression analysis and lots more using: Advanced Microsoft Excel, SPSS, MINITAB and MATLAB.
            </p>
            <p>Most businesses use Excel, so learning how to use the application efficiently opens up more opportunities for employment and career advancement. With the basic knowledge of Microsoft Excel, you can advance into other statistical packages such as: SPSS, MINITAB, MATLAB etc.</p>
            <div class="row">
              <router-link class="primary-btn" to="/contact-us">Enroll Here</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <Footer />
  </div>
</template>

<script>
// import Preloader from "@/components/Preloader.vue";
// import Header from "@/components/TheHeader.vue";
// import Footer from "@/components/TheFooter.vue";
export default {
  components: {
    // Preloader,
    // Header,
    // Footer
  }
};
</script>

<style scoped>
p.bottom-space {
  margin-bottom: 10px;
}

.primary-btn {
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;
}
</style>