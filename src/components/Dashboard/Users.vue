<template>
  <div class="row">
    <div class="col-lg-12">
      <!-- If on users route -->
      <div class="card">
        <div class="card-header">
          <strong class="card-title">Users</strong>
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
              <tr v-for="(user, index) in users" :key="index">
                <td class="serial">{{ user.id }}.</td>
                <td>
                  <span class="name">{{ user.name }}</span>
                </td>
                <td>
                  <span class="product">{{ user.email }}</span>
                </td>
                <td>
                  <i @click="deleteUser(user.id)" class="fa fa-trash"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.table-stats -->
      </div>
      <!-- If on posts route -->
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  computed: {
    users() {
      return this.$store.getters["admin/users"];
    }
  },

  mounted() {
    this.$store.dispatch("admin/getUsers").then(() => {
      console.log("users fetched successfuly on table");
      console.log("users or staff: ", this.users);
    });
  },

  methods: {
    deleteUser(userId) {
      this.showQuestion().then((result) => {
        if (result.value) {
          this.$store.dispatch("deleteUser", userId).then((data) => {
            console.log(data);
            Swal.fire(
              "Deleted!",
              "User has been deleted.",
              "success"
            );
            this.$store.commit("deleteUser", userId);
          }).catch((e) => {
            console.log(e);
            this.showError("Post delete unsuccessful");
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



  

