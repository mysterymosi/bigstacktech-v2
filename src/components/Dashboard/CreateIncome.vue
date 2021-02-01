<template>
    <div class="col-lg-10 mx-auto">
        <div class="card">
            <div class="card-header">
                <strong class="card-title">Create Income</strong>
            </div>
            <div class="card-body">
                <!-- Credit Card -->
                <div id="pay-invoice">
                    <div class="card-body">
                        <form action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Description</label>
                                        <input v-model="item.description" id="cc-payment" name="cc-desc" type="text" class="form-control" aria-required="true" aria-invalid="false" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <label for="x_card_code" class="control-label mb-1">Amount</label>
                                    <div class="input-group">
                                        <input v-model="item.amount" id="x_card_code" name="x_card_code" type="number" class="form-control cc-cvc" value="" autocomplete="off">
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
    <!--/.col-->
</template>
<script>
export default {
    data() {
        return {
            item: {
                description: "",
                amount: ""
            }
        }
    },

    methods: {
        submit() {
            console.log("items: ", this.items);
            console.log("amount: ", this.item.amount);
            console.log("desc: ", this.item.description);
            this.$store.dispatch("finance/createIncome", {
                    staffId: "BST/CR/009",
                    amount: this.item.amount,
                    description: this.item.description
                })
                .then((data) => {
                    console.log("create income data: ", data.data);
                    console.log("works");
                    this.$swal({
                        position: "center",
                        icon: "success",
                        title: data.data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.item.description = "";
                    this.item.amount = "";
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>
<style scoped>
#payment-button-amount {
    font-size: 15px !important;
}
</style>