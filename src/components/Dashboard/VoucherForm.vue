<template>
    <div class="col-lg-10 mx-auto">
        <div v-if="!isSubmitted" class="card">
            <div class="card-header">
                <strong class="card-title">Payment Voucher</strong>
            </div>
            <div class="card-body">
                <!-- Credit Card -->
                <div id="pay-invoice">
                    <div class="card-body">
                        <form action="#" method="post" novalidate="novalidate">
                            <div class="form-group has-success">
                                <label for="cc-name" class="control-label mb-1">Pay to</label>
                                <input v-model="payTo" id="cc-name" name="cc-name" type="text" class="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name">
                                <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                            </div>
                            <div v-for="(item, index) in items" :key="index" class="row">
                                <div class="col-md-9">
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Description</label>
                                        <input v-model="item.description" id="cc-payment" name="cc-desc" type="text" class="form-control" aria-required="true" aria-invalid="false" />
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="x_card_code" class="control-label mb-1">Amount</label>
                                    <div class="input-group">
                                        <input v-model="item.amount" id="x_card_code" name="x_card_code" type="text" class="form-control cc-cvc" value="" autocomplete="off">
                                        <div @click="removeItem(index)" class="input-group-addon">
                                            <span class="fa fa-trash fa-lg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <button @click.prevent="submit" id="payment-button" type="submit" class="btn btn-lg btn-info btn-block mt-3">
                                        <span id="payment-button-amount">Done</span>
                                        <span id="payment-button-sending" style="display:none;">Sending…</span>
                                    </button>
                                </div>
                                <div class="col-md-3">
                                    <button @click.prevent="goBack" id="payment-button" type="submit" class="btn btn-lg btn-danger btn-block mt-3">
                                        <span id="payment-button-amount">Back</span>
                                        <span id="payment-button-sending" style="display:none;">Sending…</span>
                                    </button>
                                </div>
                                <div class="col-md-3">
                                    <button @click.prevent="addNewItems" id="payment-button" type="submit" class="btn btn-lg btn-primary btn-block mt-3">
                                        <span id="payment-button-amount">Add new voucher</span>
                                        <span id="payment-button-sending" style="display:none;">Sending…</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> <!-- .card -->
        <PaymentVoucher :payee="payTo" @goToVoucherHome="goHome" @setToFalse="setSubmittedFalse" v-if="isSubmitted" />
    </div>
    <!--/.col-->
</template>
<script>
import Vue from "vue";
import PaymentVoucher from "@/components/Dashboard/PaymentVoucher.vue";
export default {
    components: {
        PaymentVoucher
    },

    data() {
        return {
            payTo: "",
            item: {
                description: "",
                amount: ''
            },
            items: [],
            isSubmitted: false
        }
    },

    mounted() {
        this.items = [{ description: "", amount: "" }];
    },

    methods: {
        addNewItems() {
            this.items.push(Vue.util.extend({}, this.item))
        },
        removeItem(index) {
            Vue.delete(this.items, index);
        },
        submit() {
            console.log("items: ", this.items);
            this.$store.dispatch("finance/generateVoucher", {
                    staffId: "BST/CR/009",
                    vouchers: this.items
                })
                .then((err) => {
                    if (err) {
                        console.log(err);
                        this.$swal({
                            position: "center",
                            icon: "error",
                            title: "Voucher not generated",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        console.log("works");
                        this.isSubmitted = true;
                        this.$swal({
                            position: "center",
                            icon: "success",
                            title: "Voucher generated",
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // this.payTo = "";
                        this.items = [{ description: "", amount: "" }];
                    }
                });
        },
        setSubmittedFalse() {
            this.isSubmitted = false;
        },
        goBack() {
            this.$emit("closeVoucherForm");
        },
        goHome() {
            this.$emit("goToVoucherHome");
        }
    }
}
</script>
<style scoped>
#payment-button-amount {
    font-size: 15px !important;
}
</style>