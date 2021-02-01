<template>
    <div>
        <div v-if="!isSubmitted" class="row">
            <div class="col-lg-7 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <strong>Book Space</strong>
                    </div>
                    <div class="card-body card-block">
                        <form id="post-form">
                            <div class="form-group">
                                <label for="nf-email" class="form-control-label">Email</label>
                                <input v-model="customer.email" type="text" id="title" name="title" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="select" class=" form-control-label">Hub Plan</label>
                                <select v-model="hub_plan" name="select" id="select" class="form-control">
                                    <option v-for="plan in hubPlans" :key="plan.id">{{ plan.name }}</option>
                                </select>
                            </div>
                            <div v-if="hub_plan !== null" class="form-group">
                                <label for="select" class=" form-control-label">Sub Plan</label>
                                <select v-if="hub_plan === 'Basic'"  v-model="sub_plan" name="select" id="select" class="form-control">
                                    <option v-for="(deets, index) in basicPlan" :key="index">{{ deets.amount }} - {{ deets.description }}</option>
                                </select>
                                <!-- v-else -->
                                <select v-else-if="hub_plan === 'Executive'"  v-model="sub_plan" name="select" id="select" class="form-control">
                                    <option v-for="(exec, index) in execPlan" :key="index">{{ exec.amount }} - {{ exec.description }}</option>
                                </select>
                            </div>
                            <!-- <div class="form-group">
                <label for="nf-email" class="form-control-label">Description</label>
                <input v-model="customer.description" type="text" id="title" name="title" class="form-control" />
              </div> -->
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="form-group">
                                        <label class=" form-control-label">Start Date</label>
                                        <div class="input-group">
                                            <input v-model="customer.start_date" type="date" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label class=" form-control-label">Duration</label>
                                        <div class="input-group">
                                            <input v-model="duration" type="number" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label for="select" class=" form-control-label">Type</label>
                                        <select v-model="customer.duration_type" name="select" id="select" class="form-control">
                                            <option v-for="(type, index) in duration_types" :key="index">{{ type }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <button @click="handleSubmit" type="submit" class="btn btn-primary btn-sm">
                            <i class="fa fa-dot-circle-o"></i> Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <BookingSummary @closeSummary="setToFalse" v-else />
    </div>
</template>
<script>
import BookingSummary from "@/components/Dashboard/BookingSummary.vue";
export default {
    components: {
        BookingSummary
    },
    // middleware: ["check-auth", "auth"],
    data() {
        return {
            customer: {
                email: "",
                start_date: "",
                // description: "",
                duration_type: null
            },
            duration: 1,
            hub_plan: null,
            sub_plan: null,
            duration_types: ["day", "month", "week"],
            isSubmitted: false
        };
    },

    watch: {
        duration(value) {
            this.checkNumber(value);
        }
    },

    computed: {
        hubPlans() {
            return this.$store.getters["hub/getHubPlans"];
        },

        basicPlan() {
            return this.hubPlans[0].details;
        },

        execPlan() {
            return this.hubPlans[1].details;
        }
    },

    methods: {
        setToFalse() {
            this.isSubmitted = false;
        },

        randomId() {
            const randNum = Math.floor(Math.random() * 100) + "-" + Math.floor(Math.random() * 100);
            return randNum;
        },

        checkNumber(value) {
            console.log("called");
            if (value > 1) {
                this.duration_types = ["days", "months", "weeks"];
            } else if (value <= 1) {
                this.duration_types = ["day", "month", "week"];
            }
            this.customer.duration_type = this.duration_types[0];
        },

        handleSubmit() {
            let strArr = this.sub_plan.split("-");
            console.log("execplan: ", strArr[1]);
            // let price;

            // for (const plan of this.hubPlans) {
            //     if (plan.name === this.hub_plan) {
            //         price = plan.price
            //     }
            // }
            this.$store.dispatch("hub/book_space", {
                    ignore_wallet: true,
                    email: this.customer.email,
                    start_date: this.customer.start_date,
                    hub_plan: {
                        name: this.hub_plan,
                        price: parseInt(this.sub_plan),
                        description: strArr[1]
                    },
                    duration: {
                        type: this.customer.duration_type,
                        duration: +this.duration
                    }
                })
                .then((data) => {
                    console.log("register_customer data: ", data.data);
                    this.$store.commit("hub/BOOK_SPACE", data.data);
                    this.$store.commit("hub/SET_BOOKING_SUMMARY", data.data);
                    this.$swal({
                        position: "center",
                        icon: "success",
                        title: "Space booking successful",
                        showConfirmButton: false,
                        timer: 1500
                    })

                    setTimeout(() => {
                        this.isSubmitted = true;
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
                    })
                    console.log(err);
                });
        }
    }
};
</script>
<style scoped>
.imagepreview {
    width: 300px;
    min-height: 100px;
    border: 2px solid #dddddd;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #eeeeee;
}

.imagepreview__image {
    display: none;
    width: 100%;
}

.btn {
    background-color: #24b99a;
    border-color: #24b99a;
    text-transform: uppercase;
    font-size: small;
}

.btn:hover {
    background-color: white;
    color: #24b99a;
}

.btn-success {
    margin: 79.565px auto;
}
</style>