<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header">
          <strong class="card-title">Enrollers</strong>
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
                <th>Phone No</th>
                <th>Training Program</th>
                <th>Referral</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(enroller, index) in enrollers" :key="index">
                <td class="serial">{{ index+1 }}</td>
                <td>
                  <span class="name">{{ enroller.name }}</span>
                </td>
                <td>
                  <span class="product">{{ enroller.email }}</span>
                </td>
                <td>
                  <span>{{ enroller.phone }}</span>
                </td>
                <td>
                  <span>{{ enroller.training_program }}</span>
                </td>
                <td>
                  <span>{{ enroller.referral }}</span>
                </td>
                <td>
                  <span>{{ enroller.message }}</span>
                </td>
                <td>
                  <span @click="deleteEnroller(enroller.id)">
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
</template>

<script>
export default {
  layout: "dashboard",
  computed: {
    enrollers() {
      return this.$store.getters["admin/getEnrollers"];
    }
  },

  methods: {
    deleteEnroller(enrollerId) {
      this.$store.commit("deleteEnroller", enrollerId);
    }
  },

  mounted() {
    this.$store.dispatch("admin/getEnrollers");

  }
};
</script>
