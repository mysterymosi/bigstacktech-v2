<template>
  <!-- Start price section -->
  <section class="price-section section-gap-full" id="price-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 price-left">
          <h4>
            Our Pricing Plan <br /> and Options
          </h4>
          <p>
            We provide the best services for the cheapest prices.
          </p>
        </div>
        <div class="col-lg-7 d-flex price-right">
          <div v-for="pkg in hubPlans" :key="pkg.id" :class="{ 'single-price': true, 'main': pkg.classStyle }">
            <div class="top-wrap">
              <i class="ti ti-medall"></i>
              <h4>{{ pkg.name }}</h4>
              <!-- <p>For Large Size Team</p> -->
              <!-- <h2><span>&#x20A6;</span>{{ pkg.price }}</h2> -->
            </div>
            <div class="bottom-wrap">
              <ul>
                <li  v-for="(desc, index) in pkg.details" :key="index" class="d-flex justify-content-between align-items-center">
                  <span class="f-w">&#8358;{{ desc.amount }} - {{ desc.description }}</span>
                  <i class="ti ti-check"></i>
                </li>
                <!-- <li class="d-flex justify-content-between align-items-center">
                  <span>Uninterrupted Power Supply</span>
               s   <i class="ti ti-check"></i>
                </li> -->
                <!-- <li class="d-flex justify-content-between align-items-center">
                  <span>Additional Option</span>
                  <i class="ti ti-check"></i>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <span>Lifetime Support</span>
                  <i class="ti ti-check"></i>
                </li> -->
              </ul>
              <router-link v-if="$_.isEmpty(user)===false" :to="'/our-hub/' + pkg.id" class="primary-btn primary-btn-w d-block mx-auto">Book a space</router-link>
              <router-link v-else to="signin" class="primary-btn primary-btn-w d-block mx-auto">Book a space</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End price section -->
</template>

<script>
export default {
  computed: {
    hubPlans() {
      return this.$store.getters["hub/getHubPlans"];
    },

    user() {
      return this.$store.getters["user/getUser"];
    }
  }
};
</script>

<style scoped>
.section-gap-full {
  padding-top: 0;
}

.f-w {
  font-weight: 500;
}
</style>
