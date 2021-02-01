<template>
    <section class="service-section section-gap-full">
        <div class="container">
            <div style="margin-bottom: 50px;" class="section-title">
                <h1 class="text-center">Sign in</h1>
            </div>
            <div class="single-service">
                <ValidationObserver v-slot="{ invalid }">
                    <form @submit.prevent="sign_in">
                        <div class="form-group">
                            <label>Email address</label>
                            <validation-provider name="email" rules="required|email" v-slot="{ errors, invalid, valid, untouched }">
                                <input :class="{ invalid, valid, untouched }" type="email" v-model="user.email" class="form-control" placeholder="Email" />
                                <span>{{ errors[0] }}</span>
                            </validation-provider>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <validation-provider rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                <input :class="{ invalid, valid, untouched }" type="password" v-model="user.password" class="form-control" placeholder="Password" />
                                <span>{{ errors[0] }}</span>
                            </validation-provider>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <label class="pull-right">
                                <a href="#">Forgotten Password?</a>
                            </label>
                        </div>
                        <button style="background: #24b99a; color: #fff" type="submit" :disabled="invalid" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                        <div class="register-link m-t-15 text-center mt-3">
                            <p>
                                Don't have an account ?
                                <router-link to="/signup">Sign Up Here</router-link>
                            </p>
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
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            user: {
                email: "",
                password: ""
            }
        };
    },

    methods: {
        sign_in() {
            this.$store.dispatch("user/signin", {
                    email: this.user.email,
                    password: this.user.password
                })
                .then((user) => {
                    if (user) {
                        this.$swal({
                            icon: "success",
                            title: "Login successful",
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            onOpen: (toast) => {
                                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                            }
                        });
                        // console.log("swal", Swal);
                        // const userStatus = JSON.parse(localStorage.getItem("user")).is_admin;
                        // console.log("userstatus :", userStatus);
                        if (+user.is_staff === 1) {
                            this.$router.push("/dashboard");
                        } else {
                            this.$router.push("/our-hub");
                        }
                    } else {
                        this.this.$swal({
                            icon: "error",
                            title: "Invalid user details",
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            onOpen: (toast) => {
                                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                            }
                        });
                    }
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
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
</style>