<template>
    <div class="col-lg-10 mx-auto">
        <div class="card">
            <div class="card-header">
                <strong class="card-title">Fund user wallet</strong>
            </div>
            <div class="card-body">
                <!-- Credit Card -->
                <div id="pay-invoice">
                    <div class="card-body">
                        <form action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Email</label>
                                        <input v-model="email" id="cc-payment" name="cc-desc" type="email" class="form-control" aria-required="true" aria-invalid="false" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <label for="x_card_code" class="control-label mb-1">Amount</label>
                                    <div class="input-group">
                                        <input v-model="amount" id="x_card_code" name="x_card_code" type="number" class="form-control cc-cvc" value="" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button @click.prevent="submit" id="payment-button" type="submit" class="btn btn-lg btn-info btn-block mt-3">
                                        <span id="payment-button-amount">Fund</span>
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
            email: null,
            amount: null
        }
    },

    methods: {
        submit() {
            this.$store.dispatch("finance/fundUserWallet", {
                    user_email: this.email,
                    amount: +this.amount,
                    staffId: "BST/CRS/001"
                })
                .then((data) => {
                    this.$swal({
                        position: "center",
                        icon: "success",
                        title: data.data,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.email = null;
                    this.amount = null;
                })
                .catch((err) => {
                  console.log(err);
                    this.$swal({
                        position: "center",
                        icon: "error",
                        title: "Error",
                        showConfirmButton: false,
                        timer: 1500
                    });;
                })
        }
    }
}
</script>