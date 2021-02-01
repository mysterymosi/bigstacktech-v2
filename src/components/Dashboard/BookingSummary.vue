<template>
  <div class="row">
    <div class="col-sm-12 mb-4">
      <div>

        <p @click="close" style="margin-top: 50px; font-size: 35px;">&#10005;</p>
        <h1>Booking Summary for {{ booking_summary.email }}</h1>
      </div>
      <div class="card-group">
        <div class="card col-md-6 no-padding ">
          <div class="card-body">
            <div class="h1 text-muted text-right mb-4">
              <i class="fa fa-users"></i>
            </div>
            <div class="h4 mb-0">
              <span class="count">{{ booking_summary.hub_package }}</span>
            </div>
            <small class="text-muted text-uppercase font-weight-bold">Hub plan</small>
            <div class="progress progress-xs mt-3 mb-0 bg-flat-color-1" style="width: 40%; height: 5px;"></div>
          </div>
        </div>
        <div class="card col-md-6 no-padding ">
          <div class="card-body">
            <div class="h1 text-muted text-right mb-4">
              <i class="fa fa-user-plus"></i>
            </div>
            <div class="h4 mb-0">
              <span class="count">{{ booking_summary.subscription_status }}</span>
            </div>
            <small class="text-muted text-uppercase font-weight-bold">Status</small>
            <div class="progress progress-xs mt-3 mb-0 bg-flat-color-2" style="width: 40%; height: 5px;"></div>
          </div>
        </div>
        <div class="card col-md-6 no-padding ">
          <div class="card-body">
            <div class="h1 text-muted text-right mb-4">
              <i class="fa fa-clock-o"></i>
            </div>
            <div class="h4 mb-0">{{ booking_summary.start_date | dateFilter }}</div>
            <small class="text-muted text-uppercase font-weight-bold">Start date</small>
            <div class="progress progress-xs mt-3 mb-0 bg-flat-color-5" style="width: 40%; height: 5px;"></div>
          </div>
        </div>
        <div class="card col-md-6 no-padding ">
          <div class="card-body">
            <div class="h1 text-muted text-right mb-4">
              <i class="fa fa-clock-o"></i>
            </div>
            <div class="h4 mb-0">{{ booking_summary.end_date | dateFilter }}</div>
            <small class="text-muted text-uppercase font-weight-bold">End date</small>
            <div class="progress progress-xs mt-3 mb-0 bg-flat-color-5" style="width: 40%; height: 5px;"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="booking_summary.failedBookings.length > 0" class="col-sm-12">
      <div>
        <h1>Failed Booking(s)</h1>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="table-stats order-table ov-h">
            <table class="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(failedBooking, index) in booking_summary.failedBookings" :key="index">
                  <td>
                    <span class="sn">{{ failedBooking.day | dateFilter }}</span>
                  </td>
                  <td class="name">{{ failedBooking.description }}</td>
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
    booking_summary() {
      return this.$store.getters["hub/getBookingSummary"];
    }
  },

  methods: {
    close() {
      this.$emit("closeSummary");
    }
  }
};

</script>
<style scoped>
h1 {
  font-size: 15px !important;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;

}
p {
  cursor: pointer;
}

</style>
