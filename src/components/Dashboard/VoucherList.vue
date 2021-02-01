<template>
  <div>
  	<Search />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <strong class="card-title">Vouchers</strong>
          </div>
          <div class="table-stats order-table ov-h">
            <table class="table">
              <thead>
                <tr>
                  <!-- <th class="avatar">Avatar</th> -->
                  <!-- <th>ID</th> -->
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="voucher in vouchers" :key="voucher.id">
                  <router-link :to="'/dashboard/finance/voucher/list/'+ voucher.id"><td class="name">{{ voucher.description }}</td></router-link>
                  <td>
                    <span class="name">{{ voucher.amount }}</span>
                  </td>
                  <!-- <td>
                    <span class="product">{{ customer.email }}</span>
                  </td> -->
                  <td>
                    <span class="sn">{{ voucher.voucher_date | dateFilter }}</span>
                  </td>
                  <td>
                    <span @click="deleteService()">
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.table-stats -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Search from "@/components/Dashboard/Search.vue";
export default {
  components: {
  	Search
  },
  computed: {
    vouchers() {
      return this.$store.getters["finance/getVouchers"];
    }
  },

  methods: {
    deleteService(serviceId) {
      this.showQuestion().then((result) => {
        if (result.value) {
          this.$store.dispatch("deleteService", serviceId).then(() => {
            Swal.fire(
              "Deleted!",
              "Service has been deleted.",
              "success"
            );
          }).catch((e) => {
            console.log(e);
            this.showError("Service delete unsuccessful");
          });
        }
      });
    }
  },

  mounted() {
    this.$store.dispatch("finance/getVouchers");
  }
};
</script>

<style scoped>
  .sn {
    font-size: 14px !important;
  }
</style>
