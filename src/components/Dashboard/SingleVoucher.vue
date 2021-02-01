<template>
    <div class="col-lg-10 mx-auto">
        <div class="card">
            <div class="card-header">
                <strong class="card-title">Payment Voucher</strong>
            </div>
            <div class="card-body">
                <!-- Credit Card -->
                <div id="pay-invoice">
                    <div class="card-body">
                        <form action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="form-group has-success">
                                        <label for="cc-name" class="control-label mb-1">Pay to</label>
                                        <input v-model="payTo" id="cc-name" name="cc-name" type="text" class="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name">
                                        <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group has-success">
                                        <label for="cc-name" class="control-label mb-1">Date</label>
                                        <input v-model="item.date" id="cc-date" type="text" class="form-control cc-name valid">
                                        <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="table-stats order-table ov-h">
                                        <div class="table">
                                            <thead>
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in voucher" :key="index">
                                                    <td class="name">{{ item.description }}</td>
                                                    <td>
                                                        <span>{{ item.amount }}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-md-4">
                                    <hr>
                                    <p>CEO <span v-if="ceo_approved" :class="{ 'badge': true, 'badge-complete': ceo_approved, 'badge-pending': false }">approved</span>
                                        <span @click="approveVoucher" v-else :class="{ 'badge': true, 'badge-pending': !ceo_approved }">approve</span></p>
                                </div>
                                <div class="col-md-4">
                                    <hr>
                                    <p>Finance Officer <span v-if="finance_approved" :class="{ 'badge': true, 'badge-complete': finance_approved, 'badge-pending': false }">approved</span>
                                        <span @click="approveVoucher" v-else :class="{ 'badge': true, 'badge-pending': !finance_approved }">approve</span></p>
                                </div>
                                <div class=" col-md-4">
                                    <hr>
                                    <p>Payee <span class="badge badge-complete">approved</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mx-auto">
                                    <button @click.prevent="goBack" id="payment-button" type="submit" class="btn btn-lg btn-danger btn-block mt-3">
                                        <span id="payment-button-amount">Back</span>
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
</template>
<script>
export default {
    data() {
        return {
            payTo: "",
            item: {
                description: "",
                amount: '',
                date: ''
            },
            total: "",
            items: [],
            route: this.$route.params.id
        }
    },
    computed: {
        voucher() {
            return this.$store.getters["finance/getVoucher"];
        },
        ceo_approved() {
            console.log("comp voucher: ", this.voucher);
            let approval;
            if (this.voucher[0].ceo_approved === 0) {
                approval = false;
            } else {
                approval = true
            }
            return approval;
        },
        finance_approved() {
            let approval;
            if (this.voucher[0].finance_approved === 0) {
                approval = false;
            } else {
                approval = true
            }
            return approval;
        }
    },

    methods: {

        goBack() {
            this.$router.push("/dashboard/finance/voucher/list");
        },
        submit() {
            this.$emit("goToVoucherHome");
        },

        approveVoucher() {
            this.$store.dispatch("finance/approveVoucher", {
                    staffId: "BST/CR/001",
                    voucherId: this.voucher[0].id
                })
                .then((err) => {
                    if (err) {
                        console.log(err);
                        this.$swal({
                            position: "center",
                            icon: "error",
                            title: "Voucher not approved",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        this.$swal({
                            position: "center",
                            icon: "success",
                            title: "Voucher approved",
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log("it works");
                    }
                });
        }
    },

    mounted() {
        console.log("id: ", this.route);
        this.$store.dispatch("finance/getVoucher", this.$route.params.id)
            .then(() => {
                if (this.voucher) {
                    this.payTo = this.voucher[0].name;
                    this.item.date = this.voucher[0].voucher_date;
                    console.log("voucher details: ", this.voucher);
                } else {
                    console.log("no voucher");
                }
            });
        // this.$store.dispatch("getVoucher", { id: this.route })
        //   .then((err) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       this.payTo = this.voucher[0].name;
        //       this.item.date = this.voucher[0].voucher_date;
        //       console.log("voucher details: ", this.voucher);
        //     }
        //   });
    }
};
</script>
<style scoped>
td {
    border: 1px solid #5a5a5a !important;
    overflow: hidden;
}

tr,
td {
    width: 100%;
}

.badge {
    color: white;
    padding: 10px;
    text-transform: uppercase;
    font-weight: normal;
}

.badge-complete {
    background: #00c292;
}

.badge-pending {
    background: #fb9678;
}
</style>