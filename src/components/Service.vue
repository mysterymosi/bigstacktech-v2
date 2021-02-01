<template>
  <!-- Start service section -->
  <section id="service-section" class="service-section section-gap-full">
    <div class="container">
      <div class="section-title">
        <h1 class="text-center">Our Services</h1>
        <p class="text-center">Discover The Services We Provide</p>
      </div>
      <!-- If on home page -->
      <div v-if="$route.path !== path" class="row">
        <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-user"></i>
            <h4>Enterprise Software Development</h4>
            <p>We build attractive and effective web, mobile and desktop apps that meet industry standards, attract end users and sales, and ultimately enable your business to grow.</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-announcement"></i>
            <h4>Server Configuration</h4>
            <p>We install, configure, manage and keep your server optimized and running 24/7 because we believe that performance and reliability are your top concern.</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-agenda"></i>
            <h4>Search Engine Optimization</h4>
            <p>
              There is a lot of competition in online business and everybody wishes to stay on the top. Search Engine Optimization (SEO) is the only way to climb above the competition and also to enhance the occurrence of your business online.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="single-service">
            <i class="ti-palette"></i>
            <h4>IT Consultancy</h4>
            <p>We conduct vast market research and apply state-of-the-art methodologies to implement your product or service and make required changes accordingly, when needed.</p>
          </div>
        </div>
      </div>

      <!-- If on the service page -->
      <div v-else class="row">
        <div class="col-lg-6 col-md-6 pb-30" v-for="(service, index) in services" :key="index">
          <div class="single-service">
            <i class="ti-user"></i>
            <h4>{{ service.service }}</h4>
            <!-- <p
              class="bottom-space"
            >We build websites and web applications that perform well and works according to your requirements. We have a team of skilled professionals that always fascinate the target audiences with their incredible designs and business logic.</p>
            <p>Since establishment, we endeavor to ensure our clients the best possible solutions, no matter their needs, either to create a new website or revamp the older one. We have a highly competent team of web developers ready to give you top notch solutions for your business.</p> -->
            <div v-html="service.html_render"></div>
            <div class="row">
              <router-link class="primary-btn" to="/#contact-section">Hire Us</router-link>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-bar-chart"></i>
            <h4>Mobile App Development</h4>
            <p
              class="bottom-space"
            >Mobile Applications are effective only when they are intriguing, innovative and easy to use. We provide attractive smart mobile applications for your business to grow. We develop Andriod, iOS, Windows, and Hybrid apps.</p>
            <p>We are here to develop your ideas into amazing and profitable mobile products. We’ll be glad to help transform your business into prosperous mobile enterprise. Our team of experts in mobile app development uses the most popular cross-platform technologies to create mobile apps that provide native user experience.</p>
            <div class="row">
              <router-link class="primary-btn" to="/#contact-section">Hire Us</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 pb-30">
          <div class="single-service">
            <i class="ti-announcement"></i>
            <h4>Server Configuration</h4>
            <p
              class="bottom-space"
            >Our server configuration experts can set up an entire network flow, regulating work environment at the server level. Our company helps you to get the best options for collecting, accessing, managing, analyzing and processing data. Keeping in mind the security standards, we provide the best server configuration and maintenance services to our clients.</p>
            <div class="row">
              <router-link class="primary-btn" to="/#contact-section">Hire Us</router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6">
          <div class="single-service">
            <i class="ti-palette"></i>
            <h4>Desktop Application Development</h4>
            <p
              class="bottom-space"
            >Combination of the rich technical expertise, years of experience, and deep understanding of the low-level desktop operating systems architecture help us to span the full cycle of the desktop application development services needed to solve our customer’s most complex challenges.</p>
            <p>Our desktop application development skills can become your ground for building the application which will delight your customers with the rich functionality, speed of work and user-friendly interface.</p>
            <div class="row">
              <router-link class="primary-btn" to="/#contact-section">Hire Us</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="single-service">
            <i class="ti-agenda"></i>
            <h4>Search Engine Optimization</h4>
            <p
              class="bottom-space"
            >There is a lot of competition in online business and everybody wishes to stay on the top. Search Engine Optimization (SEO) is the only way to climb above the competition and also to enhance the occurrence of your business online.</p>
            <p>Our SEO specialists have in-depth knowledge on how to upgrade the traffic of your website.</p>
            <div class="row">
              <router-link class="primary-btn" to="/#contact-section">Hire Us</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="single-service">
            <i class="ti-pencil-alt"></i>
            <h4>Web Development Consultancy</h4>
            <p
              class="bottom-space"
            >We conduct vast market research and apply state-of-the-art methodologies to implement your product or service and make required changes accordingly, when needed.</p>
            <div class="row">
              <router-link class="primary-btn" to="/#contact-section">Hire Us</router-link>
            </div>
          </div>
        </div> -->
      </div>

      <!-- If on the home page -->
      <div id="top-space" v-if="$route.path !== path" class="row">
        <router-link class="primary-btn" to="/services">
          Read More
          <span class="ti-arrow-right"></span>
        </router-link>
      </div>
    </div>
  </section>
  <!-- End service section -->
</template>

<script>
export default {
  data() {
    return {
      path: "/services"
    };
  },

  computed: {
    services() {
      return this.$store.getters.services;
    }
  }

  // mounted() {
  //   this.$store.dispatch("getServices");
  // }
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

#top-space {
  margin-top: 10px;
}

i {
  color: #2c3e50 !important;
}
</style>
