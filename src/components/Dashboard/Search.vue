<template>
  <div>
    <div v-if="!showQr" class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-header">
            <strong class="card-title">Search By Date</strong>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group has-success">
                <label for="cc-name" class="control-label mb-1">Start Date</label>
                <input v-model="start_date" id="cc-name" type="date" class="form-control cc-name valid">
              </div>
              <div class="form-group has-success">
                <label for="cc-name" class="control-label mb-1">End Date</label>
                <input v-model="end_date" id="cc-name" type="date" class="form-control cc-name valid">
              </div>
              <div v-if="search_location !== '/dashboard/qr'" class="form-group has-success">
                <label for="cc-name" class="control-label mb-1">Description</label>
                <textarea v-model="description" class="form-control"></textarea>
              </div>
              <button @click.prevent="search" id="payment-button" type="submit" class="btn btn-lg btn-block btn-info mt-3">
                <span v-if="search_location === '/dashboard/qr'" id="payment-button-amount">Generate QR</span>
                <span v-else id="payment-button-amount">Search</span>
                <span id="payment-button-sending" style="display:none;">Sending…</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <QrDetails v-else-if="showQr" />
  </div>
</template>
<script>
import QrDetails from "@/components/Dashboard/QrDetails.vue";
export default {
  components: {
    QrDetails
  },
  data() {
    return {
      start_date: "",
      end_date: "",
      description: "",
      search_location: this.$route.path,
      showQr: false
    };
  },

  mounted() {
    console.log("path: ", this.$route.path);
  },

  methods: {
    search() {
      let action;
      if (this.search_location === "/dashboard/finance/voucher/list") {
        action = "finance/searchVouchers";
      } else if (this.search_location === "/dashboard/finance/income/income-list") {
        action = "finance/searchIncomes";
      } else if (this.search_location === "/dashboard/qr") {
        action = "admin/generateQr";
      }
      this.$store.dispatch(action, {
          start_date: this.start_date,
          end_date: this.end_date,
          description: this.description
        })
        .then((err) => {
          if (err) {
            console.log(err);
          } else {
            this.start_date = "";
            this.end_date = "";
            this.description = "";
            console.log("it works");
            if (action === "admin/generateQr") {
              this.showQr = true;
              console.log("beans")
            }
          }
        })
    }
  }
};

</script>
