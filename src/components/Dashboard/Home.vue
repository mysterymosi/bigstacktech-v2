<template>
  <div class="row">
    <div class="col-sm-6 col-lg-3">
      <router-link to="/dashboard/finance">
        <div class="card text-white bg-flat-color-1">
          <div class="card-body">
            <div class="card-left pt-1 float-left">
              <h3 class="mb-0 fw-r">
                <!-- <span class="currency float-left mr-1">$</span> -->
                <!-- <span class="count">Finance</span> -->
              </h3>
              <p class="text-light mt-1 m-0">Finance</p>
            </div><!-- /.card-left -->
            <div class="card-right float-right text-right">
              <i class="icon fade-5 icon-lg pe-7s-cart"></i>
            </div><!-- /.card-right -->
          </div>
        </div>
      </router-link>
    </div>
    <!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <router-link to="/dashboard/our-hub">
        <div class="card text-white bg-flat-color-6">
          <div class="card-body">
            <div class="card-left pt-1 float-left">
              <h3 class="mb-0 fw-r">
                <!-- <span class="count float-left">85</span>
              <span>%</span> -->
              </h3>
              <p class="text-light mt-1 m-0">The Hub</p>
            </div><!-- /.card-left -->
            <div class="card-right float-right text-right">
              <i class="icon fade-5 icon-lg pe-7s-monitor"></i>
            </div><!-- /.card-right -->
          </div>
        </div>
      </router-link>
    </div>
    <!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <router-link to="/dashboard/staff">
        <div class="card text-white bg-flat-color-3">
          <div class="card-body">
            <div class="card-left pt-1 float-left">
              <h3 class="mb-0 fw-r">
                <!-- <span class="count">6569</span> -->
              </h3>
              <p class="text-light mt-1 m-0">Staff</p>
            </div><!-- /.card-left -->
            <div class="card-right float-right text-right">
              <i class="icon fade-5 icon-lg pe-7s-users"></i>
            </div><!-- /.card-right -->
          </div>
        </div>
      </router-link>
    </div>
    <!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <router-link to="/dashboard/users">
        <div class="card text-white bg-flat-color-2">
          <div class="card-body">
            <div class="card-left pt-1 float-left">
              <h3 class="mb-0 fw-r">
                <!-- <span class="count">1490</span> -->
              </h3>
              <p class="text-light mt-1 m-0">Users</p>
            </div><!-- /.card-left -->
            <div class="card-right float-right text-right">
              <i class="icon fade-5 icon-lg pe-7s-smile"></i>
            </div><!-- /.card-right -->
          </div>
        </div>
      </router-link>
    </div>
    <!--/.col-->
    <div class="col-lg-3 col-md-6">
      <router-link to="/dashboard/qr">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib"><i class="pe-7s-print text-success border-success"></i></div>
              <div class="stat-content dib">
                <div class="stat-text">Qr code</div>
                <!-- <div class="stat-digit"></div> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- <div class="col-lg-3 col-md-6">
      <router-link to="/dashboard/e-learning/courses">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib"><i class="pe-7s-study text-primary border-primary"></i></div>
              <div class="stat-content dib">
                <div class="stat-text">eLearning</div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div> -->
    <div class="col-lg-3 col-md-6">
      <router-link to="/dashboard/customers">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib"><i class="ti-layout-grid2 text-warning border-warning"></i></div>
              <div class="stat-content dib">
                <div class="stat-text">Contacts</div>
                <!-- <div class="stat-digit">770</div> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-3 col-md-6">
      <router-link to="/dashboard/enrollers">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib"><i class="ti-link text-danger border-danger"></i></div>
              <div class="stat-content dib">
                <div class="stat-text">Enrollers</div>
                <!-- <div class="stat-digit">2,781</div> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div><!-- .row -->
</template>
<script>
export default {
  // layout: "dashboard",
  // middleware: ["check-auth", "auth", "check-if-admin"],
  computed: {
    // count() {
    //   return this.$store.getters.postCount;
    // },

    // userCount() {
    //   return this.$store.getters.userCount;
    // },

    // customerCount() {
    //   return this.$store.getters.customerCount;
    // },

    // enrollerCount() {
    //   return this.$store.getters.enrollerCount;
    // }
  },
  // fetch(context) {
  //   console.log("async data is running");
  //   context.store.dispatch("getUsers").then((data) => {
  //     context.store.commit("setUsers", data.data);
  //     console.log("fetched users: ", data.data);
  //   }).catch((e) => {
  //     context.error(e);
  //   });
  // }

  mounted() {
    // this.$store.dispatch("getUsers");
    // this.$store.dispatch("getCustomers");
    // this.$store.dispatch("getEnrollers");
  }

};

</script>
<style scoped>

.badge-primary {
  background-color: #24b99a !important;
}

a {
  color: #f8f9fa !important;
}

</style>
