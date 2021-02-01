<template>
  <!-- Start contact section -->
  <section
    class="contact-section padding-top-120"
    id="contact-section"
  >
    <div class="container">
      <div class="section-title">
        <h2 class="text-center">Contact With Us</h2>
        <p class="text-center">Get in touch with us</p>
      </div>
      <div class="row address-wrap justify-content-center">
                <div class="col-lg-3 col-md-4 col-sm-6 single-address-col">
                    <i class="ti ti-mobile"></i>
                    <p>
                        +234 811 001 1847
                        <br> +234 817 984 2529
                    </p>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 single-address-col">
                    <i class="ti ti-map-alt"></i>
                    <p>
                        131 Goldie Street,
                        <br> Lawrence Plaza, Calabar
                    </p>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 single-address-col">
                    <i class="ti ti-email"></i>
                    <p>
                        Email Us
                        <br> info@bigstacktech.com
                    </p>
                </div>
            </div>
      <div class="row justify-content-center form-row">
        <div class="col-lg-9">
          <form id="contact-form" action="#">
            <div class="row contact-form-wrap justify-content-center">
              <div class="col-md-6 contact-name form-col">
                <input
                  name="name"
                  id="name"
                  class="form-control"
                  type="text"
                  placeholder="Name*"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Name*'"
                  v-model="customer.name"
                />
              </div>
              <div class="col-md-6 contact-email form-col">
                <input
                  name="mail"
                  id="mail"
                  class="form-control"
                  type="email"
                  placeholder="E-mail*"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Email*'"
                  v-model="customer.email"
                />
              </div>
              <div class="col-lg-12">
                <textarea
                  name="comment"
                  id="comment"
                  class="form-control"
                  rows="8"
                  placeholder="Message"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Message*'"
                  v-model="customer.message"
                ></textarea>
              </div>
              <input
                type="submit"
                class="primary-btn"
                value="Send Message"
                id="submit-message"
                @click.prevent="submitForm"
              />
              <div id="msg" class="message"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End contact section -->
</template>

<script>
// import $ from "jquery";
export default {
  data() {
    return {
      customer: {
        name: "",
        email: "",
        message: ""
      }
    };
  },

  methods: {
    submitForm() {
      this.$store.dispatch("user/addContact", {
        name: this.customer.name,
        email: this.customer.email,
        message: this.customer.message
      }).then((data) => {
        console.log(data);
        this.customer = {
          name: "",
          email: "",
          message: ""
        };
        this.$swal({
          position: "center",
          icon: "success",
          title: "Thank you for contacting us",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch((e) => {
        console.log(e)
        this.$swal({
          position: "center",
          icon: "error",
          title: "Message not sent",
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }
};
</script>
