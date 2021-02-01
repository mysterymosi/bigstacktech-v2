<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header">
          <strong class="card-title">Customers</strong>
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
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(contact, index) in contacts" :key="index">
                <td class="serial">{{ index+1 }}</td>
                <td>
                  <span class="name">{{ contact.name }}</span>
                </td>
                <td>
                  <span class="product">{{ contact.email }}</span>
                </td>
                <td>
                  <span>{{ contact.message }}</span>
                </td>
                <td>
                  <span @click="deleteContact(contact.id)">
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
    contacts() {
      return this.$store.getters["admin/getContacts"];
    }
  },

  methods: {
    deleteContact(contactId) {
      this.$store.commit("deleteCustomer", contactId);
    }
  },

  mounted() {
    this.$store.dispatch("admin/getContacts");
  }
};
</script>
