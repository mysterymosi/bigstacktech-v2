<template>
    <div>
        <div v-if="!single_staff.staff_id" class="row">
            <div class="col-md-12 mb-4">
                <button @click="goToOnboard" class="btn btn-primary btn-lg">Onboard</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-user text-primary border-primary"></i></div>
                            <div v-if="single_staff !== undefined" class="stat-content dib">
                                <div class="stat-digit">{{ single_staff.name }}</div>
                                <div class="stat-digit">{{ single_staff.staff_id }}</div>
                                <div class="stat-text text-primary">{{ single_staff.designation }}</div>
                                <div class="stat-text text-primary">&#8358;{{ single_staff.salary }}</div>
                                <div class="stat-text text-primary">{{ single_staff.phone }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="pe-7s-browser text-primary border-primary"></i></div>
                            <div v-if="single_staff !== undefined" class="stat-content dib">
                                <div class="stat-digit">Addresses</div>
                                <div class="stat-text">{{ single_staff.house_address }}</div>
                                <div class="stat-text text-primary">{{ single_staff.email }}</div>
                                <!-- <div class="stat-text text-primary">{{ single_staff.designation }}</div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="single_staff && JSON.parse(single_staff.salary_details).deductions.length > 0" class="row">
            <div class="col-lg-10 mx-auto">
                <div id="printMe" class="card">
                    <div class="card-header">
                        <strong class="card-title">Deductions</strong>
                    </div>
                    <div class="table-stats order-table ov-h">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <!-- <th class="avatar">Avatar</th> -->
                                    <!-- <th>ID</th> -->
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <!-- <th>Staff No</th> -->
                                    <!-- <th>Delete</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(deduction, index) in JSON.parse(single_staff.salary_details).deductions" :key="index">
                                    <td class="name">{{ deduction.amount }}</td>
                                    <td>
                                        <span class="name">{{ deduction.description }}</span>
                                    </td>
                                    <!-- <td>
                    <span class="product">{{ customer.email }}</span>
                  </td> -->
                                    <td>
                                        <span class="sn">{{ deduction.date | dateFilter }}</span>
                                    </td>
                                    <!-- <td>
                    <span @click="deleteService()">
                      <i class="fa fa-trash"></i>
                    </span>
                  </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-stats -->
                </div>
            </div>
        </div>
        <div v-if="single_staff && JSON.parse(single_staff.salary_details).additions.length > 0" class="row">
            <div class="col-lg-10 mx-auto">
                <div id="printMe" class="card">
                    <div class="card-header">
                        <strong class="card-title">Additions</strong>
                    </div>
                    <div class="table-stats order-table ov-h">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <!-- <th class="avatar">Avatar</th> -->
                                    <!-- <th>ID</th> -->
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <!-- <th>Staff No</th> -->
                                    <!-- <th>Delete</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(addition, index) in JSON.parse(single_staff.salary_details).additions" :key="index">
                                    <td class="name">{{ addition.amount }}</td>
                                    <td>
                                        <span class="name">{{ addition.description }}</span>
                                    </td>
                                    <!-- <td>
                    <span class="product">{{ customer.email }}</span>
                  </td> -->
                                    <td>
                                        <span class="sn">{{ addition.date | dateFilter }}</span>
                                    </td>
                                    <!-- <td>
                    <span @click="deleteService()">
                      <i class="fa fa-trash"></i>
                    </span>
                  </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-stats -->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <strong class="card-title">Deduct from or increment to pay</strong>
                    </div>
                    <div class="card-body">
                        <!-- Credit Card -->
                        <div id="pay-invoice">
                            <div class="card-body">
                                <form action="#" method="post" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="x_card_code" class="control-label mb-1">Amount</label>
                                            <div class="input-group">
                                                <input v-model="amount" id="x_card_code" name="x_card_code" type="number" class="form-control cc-cvc" value="" autocomplete="off">
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="form-check-inline form-check">
                                                <label for="inline-radio1" class="form-check-label ">
                                                    <input v-model="deduct" type="radio" id="inline-radio1" name="inline-radios" value="deduct" class="form-check-input">Deduct
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="form-check-inline form-check">
                                                <label for="inline-radio2" class="form-check-label">
                                                    <input v-model="increment" type="radio" id="inline-radio2" name="inline-radios" value="increment" class="form-check-input">Increment
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="cc-payment" class="control-label mb-1">Description</label>
                                                <textarea v-model="description" id="cc-payment" name="cc-desc" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button @click.prevent="submit" id="payment-button" type="submit" class="btn btn-lg btn-info btn-block mt-3">
                                                <span id="payment-button-amount">Done</span>
                                                <span id="payment-button-sending" style="display:none;">Sending…</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> <!-- .card -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            amount: null,
            deduct: null,
            increment: null,
            description: null
        }
    },
    computed: {
        single_staff() {
            return this.$store.getters. ["user/getSingleStaff"];
        }
        // salary_details() {
        //   return JSON.parse(this.single_staff.salary_details);
        // }
    },

    methods: {
        submit() {
            console.log("amount deducted or incremented: ", { amount: this.amount, deduct: this.deduct, increment: this.increment });
            let payslipDeets = {
                staffId: this.single_staff.staff_id,
                isDeduction: this.deduct === null ? false : true,
                detail: {
                    amount: +this.amount,
                    description: this.description,
                    date: new Date()
                }
            }
            this.$store.dispatch("user/modifyPayslip", payslipDeets)
                .then((data) => {
                    if (data) {
                        this.$swal.fire({
                            position: "center",
                            icon: "success",
                            title: data.data,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.resetValues();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.resetValues();
                    this.$swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Error",
                            showConfirmButton: false,
                            timer: 1500
                        });;
                })
        },

        resetValues() {
            this.amount = null;
            this.description = null;
            this.increment = null;
            this.deduct = null;
        },

        goToOnboard() {
            this.$router.push('/admin/staff/' + this.$route.params.id + '/onboard')
        }
    },


    created() {
        this.$store.dispatch("admin/getStaff", this.$route.params.id)
            .then((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("staff gotten");

                }
            });
    }
};
</script>
<style scoped>
.form-check {
    margin-top: 1.6rem !important;
}
</style>