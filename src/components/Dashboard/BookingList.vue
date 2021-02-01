<template>
  <div class="row">
    <div class="col-lg-12">
      <!-- If on users route -->
      <div class="card">
        <div class="card-header">
          <strong class="card-title">All bookings</strong>
        </div>
        <div class="table-stats order-table ov-h">
          <table class="table">
            <thead>
              <tr>
                <th class="serial">#</th>
                <!-- <th class="avatar">Avatar</th> -->
                <!-- <th>ID</th> -->
                <th>Name</th>
                <th>Email</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Payment Reference</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(customer, index) in registeredCustomers" :key="index">
                <td class="serial">{{ customer.id }}</td>
                <td>
                  <span class="name">{{ customer.full_name }}</span>
                </td>
                <td>
                  <span class="product">{{ customer.email }}</span>
                </td>
                <td>
                  <span class="product">{{ customer.start_date | dateFilter }}</span>
                </td>
                <td>
                  <span class="product">{{ customer.end_date | dateFilter }}</span>
                </td>
                <td>
                  <span v-if="customer.subscription_status==='Active'" class="badge badge-complete">Active</span>
                  <span v-else class="badge badge-pending">Pending</span>
                </td>
                <td>
                  <span class="product">{{ customer.payment_reference}}</span>
                </td>
                <td>
                  <i @click="deleteCustomer(customer.id)" class="fa fa-trash"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.table-stats -->
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  // middleware: ["check-auth", "auth"],
  computed: {
    registeredCustomers() {
      return this.$store.getters.["hub/getHubBookings"];
    }
  },

  mounted() {
    this.$store.dispatch("hub/get_all_bookings");
  },

  methods: {
    deleteCustomer(customerId) {
      this.showQuestion().then((result) => {
        if (result.value) {
          this.$store.dispatch("delete_customer", customerId)
            .then((data) => {
              console.log(data);
            Swal.fire(
              "Deleted!",
              "Customer has been deleted.",
              "success"
            );
            this.$store.commit("DELETE_CUSTOMER", customerId);
          }).catch((e) => {
            console.log(e);
            this.showError("Customer delete unsuccessful");
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.fa-trash {
  cursor: pointer;
}
</style>
