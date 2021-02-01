<template>
  <div class="card">
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
            <!-- <div class="row mt-5">
              <div class="col-md-4">
                <hr>
                <p>CEO</p>
              </div>
              <div class="col-md-4">
                <hr>
                <p>Finance Officer</p>
              </div>
              <div class="col-md-4">
                <hr>
                <p>Payee</p>
              </div>
            </div> -->
            <div class="row">
              <div class="col-md-9 mx-auto">
                <button @click.prevent="submit" id="payment-button" type="submit" class="btn btn-lg btn-info btn-block mt-3">
                  <span id="payment-button-amount">Done</span>
                  <span id="payment-button-sending" style="display:none;">Sending…</span>
                </button>
              </div>
              <!-- <div class="col-md-3">
                <button @click.prevent="goBack" id="payment-button" type="submit" class="btn btn-lg btn-danger btn-block mt-3">
                  <span id="payment-button-amount">Back</span>
                  <span id="payment-button-sending" style="display:none;">Sending…</span>
                </button>
              </div> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> <!-- .card -->
</template>
<script>
export default {
  props: ["payee"],
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
    }
  },

  methods: {
    submit() {
      this.$router.push("/dashboard/finance/voucher/list");
      setTimeout(() => {
      	this.$emit("setToFalse");
      }, 2000)
    }
  },

  beforeMount() {
    this.payTo = this.payee;
    this.item.date = new Date();
    console.log("voucher details: ", this.voucher);
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

</style>
