<template>
  <!-- Start contact section -->
  <section class="contact-section contact-page-section padding-top-120" id="contact-section">
    <div class="container">
      <ContactDetails />
      <div class="row justify-content-center form-row">
        <div class="col-lg-9">
          <form @submit.prevent="submitForm" id="contact-form">
            <div class="row contact-form-wrap justify-content-center">
              <div class="col-lg-12 contact-name form-col">
                <input
                  v-model="contact.name"
                  name="name"
                  id="name"
                  class="form-control"
                  type="text"
                  placeholder="Name*"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Name*'"
                />
              </div>
              <div class="col-md-6 contact-email form-col">
                <input
                  v-model="contact.email"
                  name="mail"
                  id="mail"
                  class="form-control"
                  type="email"
                  placeholder="E-mail*"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Email*'"
                />
              </div>
              <div class="col-md-6 contact-email form-col">
                <input
                  v-model="contact.phone"
                  name="phone"
                  class="form-control"
                  type="text"
                  placeholder="Phone no*"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Phone no*'"
                />
              </div>
              <div class="col-lg-6 form-col">
                <select class="form-control" v-model="contact.program">
                  <option value="" selected disabled hidden>Select Training Program</option>
                  <option>Web App Development Training</option>
                  <option>Desktop App Development Training</option>
                  <option>Microsoft Packages Training</option>
                  <option>Statistical Packages Training</option>
                </select>
              </div>
              <div class="col-lg-6 form-col">
                <select class="form-control" v-model="contact.referral">
                  <option value="" selected disabled hidden>How did you hear about us</option>
                  <option>Facebook</option>
                  <option>Twitter</option>
                  <option>Instagram</option>
                  <option>Whatsapp</option>
                  <option>SMS</option>
                  <option>Friends/Family</option>
                </select>
              </div>
              <div class="col-lg-12">
                <textarea
                  v-model="contact.message"
                  name="comment"
                  id="comment"
                  class="form-control"
                  rows="8"
                  placeholder="Message"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Message*'"
                ></textarea>
              </div>
              <input type="submit" class="primary-btn" value="Send Message" id="submit-message" />
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
import ContactDetails from "@/components/ContactDetails.vue";
export default {
  components: {
    ContactDetails
  },

  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        program: "",
        referral: "",
        message: ""
      }
    };
  },

  methods: {
    submitForm() {
      const info = {
        name: this.contact.name,
        email: this.contact.email,
        phone_no: this.contact.phone,
        training_program: this.contact.program,
        referral: this.contact.referral,
        message: this.contact.message
      };
      this.$store.dispatch("submitEnrollmentForm", info).then((data) => {
        // this.$store.commit("addEnroller", data);
        console.log("data from enrollment: ", data);
        this.showSuccess(data);
        this.contact = {
          name: "",
          email: "",
          phone: "",
          program: "",
          referral: "",
          message: ""
        };
      }).catch((e) => {
        console.log(e);
        this.showError("Form not submitted");
      });
    }
  }
};
</script>
