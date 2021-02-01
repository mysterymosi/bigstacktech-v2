<template>
  <div>
    <div class="row mb-3">
      <div class="col-lg-4 col-md-4 col-sm-4">
        <button @click="print" class="btn btn-info">Print</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div id="printMe" class="card">
          <div class="table-stats order-table ov-h">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sign in</th>
                  <th>Sign out</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(qr, index) in qrDetails" :key="index">
                  <td>{{ qr.date }}</td>
                  <td>
                    <img :src="qr.qrcode.sign_in" class="img-fluid">
                  </td>
                  <td>
                    <img :src="qr.qrcode.sign_out" class="img-fluid">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    qrDetails() {
      return this.$store.getters["admin/getQrDetails"];
    }
  },

  methods: {
    print() {
      this.$htmlToPaper("printMe");
    }
  }
};

</script>
<style scoped>
tr,
td {
  width: 100%;
}

img {
  object-fit: cover;
  height: 200px;
  max-width: 200px !important;
}

th {
  text-align: center !important;
}

</style>
