<template>
    <section class="service-section section-gap-full">
        <div class="container">
            <div style="margin-bottom: 50px;" class="section-title">
                <h1 class="text-center">{{ getPackage.name }} Plan</h1>
                <h2 class="text-center mt-3">Booking Form</h2>
            </div>
            <div class="single-service">
                <ValidationObserver v-slot="{ invalid }">
                    <form>
                        <div class="row">
                            <div class="col-lg-12">
                                <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                    <div class="form-group">
                                        <label for="">Select Sub Plan</label>
                                        <!-- <div :class="{ invalid, valid, untouched }"> -->
                                        <select v-model="sub_plan" name="" id="" :class="{ 'form-control': true, invalid, valid, untouched }">
                                            <option v-for="(deets, index) in getPackage.details" :key="index">{{ deets.amount }} - {{ deets.description }}</option>
                                        </select>
                                        <!-- </div> -->
                                        <span>{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="form-group">
                                    <!-- <label>Start Date</label> -->
                                    <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                        <input :class="{ invalid, valid, untouched }" type="date" v-model="customer.start_date" class="form-control" placeholder="Start date" />
                                        <span>{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <!-- <label>Number</label> -->
                                    <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                        <input :class="{ invalid, valid, untouched }" type="number" v-model="duration" class="form-control" />
                                        <span>{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                        <!-- <label>Select Period</label> -->
                                        <select v-model="customer.period" name="" id="" :class="{ 'form-control': true, invalid, valid, untouched }">
                                            <option v-for="(period, index) in duration_types" :key="index">{{ period }}</option>
                                        </select>
                                        <span>{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="form-btons">
                            <button @click.prevent="book" style="background: #24b99a; color: #fff" type="submit" :disabled="invalid" class="btn btn-success btn-flat m-b-30 m-t-30">Continue</button>
                            <button @click.prevent="$router.push('/our-hub')" style="background: #24b99a; color: #fff;" type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Back</button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </section>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    // middleware: ["check-auth", "auth"],
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            customer: {
                email: "",
                start_date: "",
                description: "",
                duration_type: null
            },
            sub_plan: null,
            duration: 1,
            hub_plan: null,
            duration_types: ["day", "month", "week"],

            // duration: 1,

            // duration_types: ["day", "month", "week"]
        };
    },

    mounted() {
        console.log("route: ", this.$route.params.id);
        this.checkNumber(this.duration);
    },

    watch: {
        duration(value) {
            this.checkNumber(value);
        }
    },

    computed: {
        getPackage() {
            return this.$store.getters["hub/getPackage"](this.$route.params.id);
        }

        // duration_types () {
        //   let arr;
        //   let currentVal;
        //   if (this.number > 1) {
        //     for (const period of this.duration_typesArr) {
        //       currentVal = period + "s";
        //       arr.push(currentVal);
        //     }
        //   } else {
        //     arr = this.duration_typesArr;
        //   }
        //   return arr;
        // }
    },

    methods: {
        checkNumber(value) {
            console.log("called");
            if (value > 1) {
                this.duration_types = ["days", "months", "weeks"];
            } else if (value <= 1) {
                this.duration_types = ["day", "month", "week"];
            }
            this.customer.duration_type = this.duration_types[0];
        },

        book() {
            console.log("it works");
            let strArr = this.sub_plan.split("-");
            const user = JSON.parse(localStorage.getItem("user"));
            const bookingInfo = {
                ignore_wallet: false,
                email: user.email,
                start_date: this.customer.start_date,
                hub_plan: {
                    name: this.getPackage.name,
                    price: parseInt(this.sub_plan),
                    description: strArr[1]
                },
                duration: {
                    type: this.customer.duration_type,
                    duration: +this.duration
                }

            };
            console.log("bookingInfo: ", bookingInfo);
            this.$store.dispatch("hub/book_space", bookingInfo)
                .then((data) => {
                    console.log("space booking data: ", data);
                    this.$store.commit("hub/BOOK_SPACE", data);
                    this.$store.commit("hub/SET_BOOKING_SUMMARY", data);
                    this.$swal({
                        position: "center",
                        icon: "success",
                        title: "Space booking successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(() => {
                        this.$router.push("/our-hub");
                    }, 2000)
                    this.customer = {
                        name: "",
                        email: "",
                        // description: "",
                        start_date: "",
                    };
                    this.hub_plan = null;
                    this.duration = 1;
                })
                .catch((err) => {
                    this.$swal({
                        position: "center",
                        icon: "info",
                        title: "No hub space available",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    console.log(err);
                });
            // window.location.href = data.data;
            // return;
            // const userInfo = {
            //   name: this.user.name,
            //   email: this.user.email,
            //   password: this.user.password,
            //   password_confirmation: this.user.confirm_password
            // };
            // this.$store.dispatch("signup", userInfo)
            //   .then((data) => {
            //     console.log("sign_up data: ", data);
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });
        }
    }
};
</script>
<style scoped>
.service-section .section-gap-full {
    margin-top: 50px;
}

div.single-service {
    max-width: 500px;
    margin: 0 auto;
    /* Added */
    float: none;
    /* Added */
    margin-bottom: 10px;
    /* Added */

}

.form-btons {
    display: flex;
    justify-content: space-between;
}
</style>