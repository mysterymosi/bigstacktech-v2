<template>
  <!-- Start testimonial section -->
  <section id="testimonials" class="padd-section text-center wow fadeInUp">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-md-8">

          <div class="testimonials-content">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

              <div class="carousel-inner" role="listbox">

                <div class="carousel-item  active">
                  <div class="top-top">

                    <h2>Our Users Speak volumes for us</h2>
                    <p>Bigstack are the tech magicians, their solutions are effective and efficient. Call them anytime, anyday and they will respond.</p>
                    <h4>Cpt LA Raji<span>CCITO</span></h4>

                  </div>
                </div>

                <div class="carousel-item ">
                  <div class="top-top">

                    <h2>Our Users Speak volumes for us</h2>
                    <p>For a relatively small-sized and young company, Bigstack Technologies' work on my profile package was very good. Overall, I am very satisfied with their product</p>
                    <h4>Prof. Joe Duke II<span>Dean, Faculty of Management Sciences, UNICAL</span></h4>

                  </div>
                </div>

                <div class="carousel-item ">
                  <div class="top-top">

                    <h2>Our Users Speak volumes for us</h2>
                    <p>Bigstack's solutions are easy to maintain due their simple developer friendly modules. I'll choose them anyday.</p>
                    <h4>Jalarth Ishibi<span>Software Developer</span></h4>

                  </div>
                </div>

                <div class="carousel-item ">
                  <div class="top-top">

                    <h2>Our Users Speak volumes for us</h2>
                    <p>Great job, very professional. Thank you for your service, you have demonstrated efficiency.</p>
                    <h4>Sir Martins Egot<span>Director, PadicAfrica</span></h4>

                  </div>
                </div>

              </div>

              <div class="btm-btm">

                <ul class="list-unstyled carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                </ul>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
    <VueInjectJs src="/js/jquery/jquery.min.js" />
    <VueInjectJs src="/js/jquery/jquery-migrate.min.js" />
    <VueInjectJs src="/js/bootstrap.bundle.min.js" />
    <VueInjectJs src="/js/owlcarousel/owl.carousel.min.js" />
  </section>
  <!-- End testimonial section -->
</template>
<script>
import VueInjectJs from "vue-inject-js";
export default {
  components: {
    VueInjectJs
  },
  head() {
    return {
      script: [
        {
          src:
            "js/jquery/jquery.min.js"
        },
        {
          src:
            "js/jquery/jquery-migrate.min.js"
        },
        {
          src: "js/bootstrap.bundle.min.js"
        },
        {
          src:
            "js/owlcarousel/owl.carousel.min.js"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url("../assets/owlcarousel/assets/owl.carousel.min.css");
@import url("../assets/owlcarousel/assets/owl.theme.default.min.css");
/* Testimonials Section
--------------------------------*/
#testimonials .testimonials-content {
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  padding: 49px 20px;
}

#testimonials .testimonials-content::before {
  color: #24b99a;
  content: "";
  display: inline-block;
  font: 70px/1 FontAwesome;
  position: absolute;
  right: 43px;
  text-align: left;
  top: -29px;
}

#testimonials .top-top > h2 {
  font-family: "Roboto" sans-serif;
  font-size: 45px;
  font-weight: 100;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: capitalize;
}

#testimonials .top-top > h4 {
  font: 700 12px Lato, sans-serif;
}

#testimonials .top-top span {
  font-size: 12px;
  font-weight: 300;
  margin-left: 26px;
}

#testimonials .btm-btm ul li {
  float: left;
  margin-left: 13px;
  border-radius: 50%;
  margin-right: 13px;
  background: #ddd none repeat scroll 0 0;
  border-radius: 50%;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: block;
  height: 10px;
  width: 10px;
}

#testimonials .btm-btm .active {
  background: #24b99a;
}

.carousel-indicators {
  position: relative;
  bottom: 0;
  left: 0;
  bottom: 0 !important;
  z-index: 15;
  width: auto;
  padding-left: 0;
  margin: 30px auto 0 auto;
  margin-right: auto;
  text-align: center;
  list-style: none;
  margin-bottom: 0;
  display: inline-block;
}

.carousel-indicators li {
  margin: 0;
}
</style>
