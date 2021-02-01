<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div id="printMe" class="card">
          <div class="card-header">
            <strong class="card-title">Payroll</strong>
          </div>
          <div class="table-stats order-table ov-h">
            <table class="table">
              <thead>
                <tr>
                  <th>Payroll ID</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="payroll in payroll_list" :key="payroll.id">
                  <router-link :to="'/dashboard/finance/payroll/list/' + payroll.id">
                    <td>
                      <span class="sn">{{ payroll.id }}</span>
                    </td>
                  </router-link>
                  <td class="name">{{ payroll.payroll_date | dateFilter}}</td>
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
export default {
  computed: {
    payroll_list() {
      return this.$store.getters["finance/getPayrollList"];
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
    this.$store.dispatch("finance/getPayroll");
    console.log("bread");
  }
};

</script>
<style scoped>
.sn {
  font-size: 14px !important;
}

.btn-flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>
