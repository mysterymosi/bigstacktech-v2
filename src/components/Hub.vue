<template>
  <div>
    <section class="service-section section-gap-full">
      <div class="container">
        <div class="row">
          <div :class="{ 'col-md-6': true, 'mx-auto': !profileIsEmpty }">
            <div class="section-title">
              <h1 class="text-center">Bigstack Tech Hub</h1>
              <h4 class="text-center" style="margin-top: 14px; font-weight: 350">Trigger the genius in you for greatness</h4>
              <div style="margin-top: 20px;" class="btn-wrap text-center">
                <router-link v-if="!profileIsEmpty" class="primary-btn" style="border: none; text-decoration: none;" to="/signin">Get Started</router-link>
                <a v-else class="primary-btn" style="border: none; text-decoration: none;" href="#pricing-section">Get Started</a>
              </div>
            </div>
          </div>
          <div v-if="profileIsEmpty" class="col-md-6">
            <div class="card bg-success">
              <div class="card-body d-flex justify-content-around align-items-center">
                <i style="font-size: 40px; color: #fff;" class="ti-agenda"></i>
                <div class="wallet-text">
                  <h1 style="color: #fff">&#8358;{{ user.walletBalance }}</h1>
                  <p style="color: #fff">Wallet balance</p>
                </div>
              </div>
              <div class="card-footer">
                <div class="wallet-btns">
                  <button @click="logout" class="btn">logout</button>
                  <button @click="fundWallet" class="btn">Fund wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pb-30">
            <div class="single-service">
              <img class="img-fluid" src="../assets/img/hub-2.jpg" alt />
            </div>
          </div>
          <div class="col-md-6 pb-30">
            <div class="single-service">
              <h4>Features</h4>
              <ul>
                <li>A comfy workspace to birth your ideas</li>
                <li>Unlimited Access to internet data</li>
                <li>Uninterrupted Power Supply</li>
                <li>Relaxation couch, and a lot more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PricingSection id="pricing-section" />
    <section class="contact-section contact-page-section padding-top-120" id="contact-section">
      <div class="container">
        <div class="section-title">
          <h2 class="text-center">Contact With Us</h2>
          <p class="text-center">Get in touch with us</p>
        </div>
        <ContactDetails />
      </div>
    </section>
    <VueInjectJs src="https://js.paystack.co/v1/inline.js" />
  </div>
</template>
<script>
import VueInjectJs from "vue-inject-js";
import logOut from "@/utils/logout";
import PricingSection from "@/components/PricingSection.vue";
import ContactDetails from "@/components/ContactDetails.vue";
export default {
  components: {
    PricingSection,
    ContactDetails,
    VueInjectJs
  },

  computed: {
    user() {
      return this.$store.getters["user/user"];
    },

    profileIsEmpty() {
      if (this.$_.isEmpty(this.user) === true) {
        return false;
      } else {
        return true;
      }
    }
  },

  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (this.$_.isEmpty(this.user) === true) {
      this.$store.commit("user/SET_USER", user)
    }
    console.log("user: ", this.$_.isEmpty(this.user));
  },

  methods: {
    logout() {
      console.log("might work");
      logOut(this.$store, this.$router, this.$swal);
    },

    payWithPaystack(email, amount, ref) {
      /*eslint-disable */
      let handler = PaystackPop.setup({
        key: 'pk_test_54853e4e4c031055749a1efb31f5676e233988cb', // Replace with your public key
        email: email,
        amount: amount, // the amount value is multiplied by 100 to convert to the lowest currency unit
        ref: ref, // Replace with a reference you generated
        callback: function(response) {
          //this happens after the payment is completed successfully
          // let reference = response.reference;
          let verify_obj = {
            txId: response.trxref,
            email: email,
            amount: amount,
            description: "Wallet funded successfully"
          }
          this.$store.dispatch("user/verifyWalletTransaction", verify_obj)
            .then((data) => {
              if (data) {
                console.log("verify data: ", data);
                this.$swal({
                  position: "center",
                  icon: "success",
                  title: data,
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
            console.log("response says: ", response);
          // alert('Payment complete! Reference: ' + reference);
          // Make an AJAX call to your server with the reference to verify the transaction
        },
        onClose: function() {
          // alert('Transaction was not completed, window closed.');
          this.$swal({
            position: "center",
            icon: "error",
            title: "Transaction was not completed, window closed.",
            showConfirmButton: false,
            timer: 1500
          });
        },
      });
      handler.openIframe();
    },

    fundWallet() {
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
      (async () => {
        const { value: formValues } = await this.$swal({
          position: "bottom-end",
          title: "Wallet",
          html: markup,
          focusConfirm: false,
          // showCancelButton: true,
          preConfirm: () => {
            return {
              email: this.user.email,
              amount: Number(document.getElementById('swal-input2').value) * 100
            }
          }
        });
        if (formValues) {
          console.log("formValues: ", formValues);
          this.$store.dispatch("user/initializeWalletTransaction", formValues)
            .then((data) => {
              if (data) {
                console.log("data from then: ", data);
                this.payWithPaystack(data.email, data.amount, data.reference);
              } else {
                console.log("wallet funded");
              }
            });
        }
      })();
    }
  }
};
</script>
<style scoped>
.bg-success {
  background-color: #24b99a !important;
}

.contact-section {
  border-bottom: 0 !important;
}

.padding-top-120 {
  padding-top: 0 !important;
}

img {
  object-fit: cover;
  height: 300px;
  width: 100%;
}

ul {
  line-height: 60px;
  color: black !important;
  list-style-type: none;
}

ul li:before {
  content: '✓';
  /*margin-left: 10px;*/
}

@media (max-width: 500px) {
  .wallet-text {
    text-align: center;
  }

  .wallet-text h1 {
    font-size: 20px;
  }
}

.wallet-text .primary-btn {
  background-color: #fff;
  color: #24b99a;
}

.wallet-btns .btn {
  background: #ffffff;
  color: #24b99a;
}

.wallet-btns {
  display: flex;
  justify-content: space-between;
}
</style>