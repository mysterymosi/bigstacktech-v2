<template>
  <div class="row">
    <div v-if="!showVoucherForm" class="col-md-6 mx-auto">
      <aside class="profile-nav alt">
        <section class="card">
          <div class="card-header user-header alt bg-dark">
            <div class="media">
              <div class="media-body">
                <h2 class="text-light display-6">Voucher</h2>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <router-link to="/dashboard/finance/voucher/list">
                <i class="fa fa-eye"></i> View Vouchers
                <span class="badge badge-primary pull-right">3</span>
              </router-link>
            </li>
            <li class="list-group-item">
              <a @click.prevent="showVoucherForm = true" href="#">
                <i class="fa fa-tasks"></i> Generate Voucher
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
    <VoucherForm @goToVoucherHome="closeForm" @closeVoucherForm="closeForm" v-if="showVoucherForm" />
  </div>
</template>

<script>
import VoucherForm from "@/components/Dashboard/VoucherForm.vue";
export default {
  components: {
    VoucherForm
  },
  data() {
    return {
      showVoucherForm: false
    };
  },

  methods: {
    closeForm() {
      this.showVoucherForm = false;
    }
  }
};
</script>
