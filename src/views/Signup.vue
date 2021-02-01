<template>
    <section class="service-section section-gap-full">
        <div class="container">
            <div style="margin-bottom: 50px;" class="section-title">
                <h1 class="text-center">Sign up</h1>
            </div>
            <div class="single-service">
                <ValidationObserver v-slot="{ invalid }">
                    <form @submit.prevent="sign_up">
                        <div class="form-group">
                            <label>Full Name</label>
                            <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                <input :class="{ invalid, valid, untouched }" type="text" v-model="user.name" class="form-control" placeholder="Full name" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <ValidationProvider rules="required|email" v-slot="{ errors, invalid, valid, untouched }">
                                <input :class="{ invalid, valid, untouched }" type="email" v-model="user.email" class="form-control" placeholder="Email" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <ValidationProvider rules="required|password:@confirm" v-slot="{ errors, invalid, valid, untouched }">
                                <input :class="{ invalid, valid, untouched }" type="password" v-model="user.password" class="form-control" placeholder="Password" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <ValidationProvider name="confirm" rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                <input :class="{ invalid, valid, untouched }" type="password" v-model="user.confirm_password" class="form-control" placeholder="Confirm Password" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <button style="background: #24b99a; color: #fff" type="submit" :disabled="invalid" class="btn btn-success btn-flat m-b-30 m-t-30">{{ button_text }}</button>
                        <div class="register-link m-t-15 text-center mt-3">
                            <p>
                                Already have an account ?
                                <router-link to="/sign-in">Sign in Here</router-link>
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
                name: "",
                email: "",
                password: "",
                confirm_password: ""
            },

            button_text: "Sign up"
        };
    },

    methods: {
        sign_up() {
            this.button_text = "Signing up..."
            const userInfo = {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                password_confirmation: this.user.confirm_password
            };
            this.$store.dispatch("user/signup", userInfo)
                .then((user) => {
                    if (user) {
                        this.$swal({
                            icon: "success",
                            title: "Signup successful",
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            onOpen: (toast) => {
                                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                            }
                        });;
                        if (+user.is_staff === 1) {
                            this.$router.push("/admin");
                        } else {
                            this.$router.push("/our-hub");
                        }
                        this.button_text = "Sign up";
                    } else {
                        this.this.$swal({
                            icon: "error",
                            title: "User already exists",
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
                        this.button_text = "Sign up";
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.button_text = "Sign up"
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