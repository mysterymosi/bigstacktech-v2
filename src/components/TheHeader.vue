<template>
  <header class="header-area" id="header-area">
    <div class="dope-nav-container breakpoint-off dope-sticky">
      <div class="container">
        <div class="row">
          <!-- dope Menu -->
          <nav class="dope-navbar justify-content-between" id="dopeNav">
            <!-- Logo -->
            <a class="nav-brand" href="index.html">
              <img src="img/logo.png" alt="">
            </a>
            <!-- Navbar Toggler -->
            <div class="dope-navbar-toggler">
              <span class="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <!-- Menu -->
            <div class="dope-menu">
              <!-- close btn -->
              <div class="dopecloseIcon">
                <div class="cross-wrap">
                  <span class="top"></span>
                  <span class="bottom"></span>
                </div>
              </div>
              <!-- Nav Start -->
              <div class="dopenav">
                <ul id="nav">
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/about">About</router-link>
                  </li>
                  <li>
                    <a href="https://blog.bigstacktech.com">Blog</a>
                  </li>
                  <li>
                    <router-link to="/training">Training Programmes</router-link>
                  </li>
                  <li>
                    <router-link to="/our-hub">Our Hub</router-link>
                  </li>
                  <li v-if="$route.path == newpath">
                    <a href="#contact-section">Contact</a>
                  </li>
                  <li v-else>
                    <router-link to="/#contact-section">Contact</router-link>
                  </li>
                </ul>
              </div>
              <!-- Nav End -->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- <header id="header" :class="{'header': isActive}">
    <div class="container">
      <h1 class="logo">
        <a class="scrollto" href="#hero">
          <span v-if="$route.path == newpath">
            <img id="brand-image" :src="imgUrl" alt="icon" />
          </span>
          <span v-else>
            <img src="~assets/img/brand-logo.png" alt="icon" />
          </span>
        </a>
      </h1>
      <nav class="main-nav navbar-expand-md float-right navbar-inverse" role="navigation">
        <button @click="toggleBtn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div id="navbar-collapse" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="nav-item" v-if="$route.path == newpath">
              <a class="nav-link" href="#hero">Home</a>
            </li>
            <li class="nav-item" v-else>
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item" v-if="$route.path == newpath">
              <a class="nav-link" href="#about-section">About</a>
            </li>
            <li class="nav-item" v-else>
              <nuxt-link class="nav-link" to="/about-us">About</nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://blog.bigstacktech.com">Blog</a>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/training">Programmes</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/our-hub">Our Hub</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/e-learning/courses">e-Learning</nuxt-link>
            </li>
            <li class="nav-item" v-if="$route.path == newpath">
              <a class="nav-link" href="#contact-section">Contact</a>
            </li>
            <li class="nav-item" v-else>
              <nuxt-link class="nav-link" to="/#contact-section">Contact</nuxt-link>
            </li>
            <li v-if="profileIsEmpty" class="nav-item">
              <a @click.prevent="showWallet" class="nav-link" href="#">My Wallet</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
 -->
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      newpath: "/",
      defaultOpt: {
        stickyNav: true
      }
    }
  },

  // beforeMount() {
  //   window.addEventListener("scroll", this.onScroll);
  // },
  mounted() {
    // sticky
    const var_window = $(window);
    const navContainer = $('.dope-nav-container');
    if (this.defaultOpt.stickyNav === true) {
      var_window.on('scroll', function() {
        if (var_window.scrollTop() > 0) {
          navContainer.addClass('dope-sticky');
        } 
      });
    }
    console.log("route path: ", this.$route.path);
    if (this.$route.path !== this.newpath) {
      const theHeader = $('.dope-nav-container');
      theHeader.classList.add("dope-sticky");
    }
  },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.onScroll);
  // },

  methods: {
    onScroll() {
      console.log("scrolled")
      if (this.$route.path !== "/") {
        const theHeader = $('.dope-nav-container');
        const sticky = theHeader.offsetTop;
        // this.windowTop = e.target.documentElement.scrollTop;

        if (window.pageYOffset > sticky) {
          theHeader.classList.add("dope-sticky");
          // theHeader.classList.remove("header-scrolled");
        }
      }
      // if (this.$route.path === "/") {
      //   const theHeader = document.getElementById("header");
      //   const sticky = theHeader.offsetTop;
      //   if (window.pageYOffset > sticky) {
      //     this.imgUrl = "_nuxt/img/14ca28f.png";
      //   } else {
      //     this.imgUrl = "_nuxt/img/b415457.png";
      //   }
      // }
    }
  }
}
</script>
<!-- <script>
import $ from "jquery";
export default {
  data() {
    return {
      newpath: "/",
      isActive: true,
      windowTop: 0,
      imgUrl: "_nuxt/img/b415457.png"
    };
  },

  head() {
    return {
      script: [
        { src: "/banner-plugins/jquery-3.3.1.min.js" },
        { src: "https://code.jquery.com/jquery-migrate-3.0.0.min.js" },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
        },
        { src: "/banner-plugins/bootstrap/js/bootstrap.min.js" },
        { src: "/banner-plugins/jquery-scrollTo/jquery.scrollTo.min.js" },
        { src: "/banner-js/main.js" },
        { src: "https://js.paystack.co/v1/inline.js" }
      ]
    };
  },

  beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  },

  mounted() {
    if (this.$route.path !== this.newpath) {
      const theHeader = document.getElementById("header");
      theHeader.classList.add("sticky");
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    profileIsEmpty() {
      if (_.isEmpty(this.user) === true) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    onScroll(e) {
      if (this.$route.path !== "/") {
        const theHeader = document.getElementById("header");
        const sticky = theHeader.offsetTop;

        if (window.pageYOffset > sticky) {
          theHeader.classList.add("sticky");
        }
      }
      if (this.$route.path === "/") {
        const theHeader = document.getElementById("header");
        const sticky = theHeader.offsetTop;
        if (window.pageYOffset > sticky) {
          this.imgUrl = "_nuxt/img/14ca28f.png";
        } else {
          this.imgUrl = "_nuxt/img/b415457.png";
        }
      }
    },

    toggleBtn() {
      $("#navbar-collapse").fadeToggle();
    },

    showWallet() {
      const markup = `
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body d-flex justify-content-around align-items-center">
                  <i style="font-size: 30px; color: #24b99a;" class="ti-agenda"></i>
                  <div>
                    <h1>$${this.user.walletBalance}</h1>
                    <p>Balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 class="swal2-title">Fund Wallet</h2>
          <div class="form-group">
            <input type="text" id="swal-input2" class="swal2-input" placeholder="Amount"/>
          </div>
        `;
      this.showWalletModal("Wallet", markup, this.user.email);
    }

  }
};

</script>
<style scoped>
@import url("~assets/banner-bootstrap-css/bootstrap.min.css");
@import url("~assets/banner-css/styles.css");

.nuxt-link-exact-active {
  color: #494d55;
  border-bottom: 4px solid #24b99a;
}

a.active {
  color: #494d55;
  border-bottom: 4px solid #24b99a;
}

.header.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

</style> -->