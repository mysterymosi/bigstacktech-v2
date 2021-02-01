<template>
  <!-- <Table /> -->
  <div class="row">
    <div class="col-lg-12">
      <div  class="card">
        <div class="card-header">
          <strong class="card-title">Staff</strong>
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
                <!-- <th>Quantity</th> -->
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(singleStaff, index) in staff" :key="index">
                <td class="serial">{{ singleStaff.id }}.</td>
                <td>
                  <router-link :to="'/dashboard/staff/' + singleStaff.id"><span class="name">{{ singleStaff.name }}</span></router-link>
                </td>
                <td>
                  <span class="product">{{ singleStaff.email }}</span>
                </td>
                <td>
                  <i @click="deleteUser(singleStaff.id)" class="fa fa-trash"></i>
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
export default {
  computed: {
    staff() {
      return this.$store.getters["admin/getStaff"];
    }
  },

  mounted() {
    this.$store.dispatch("admin/getUsers").then(() => {
      console.log("users fetched successfuly");
    });
  }
};
</script>

<style scoped>
.fa-trash {
  cursor: pointer;
}
</style>
