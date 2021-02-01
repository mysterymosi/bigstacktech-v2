<template>
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-1">
              <i class="pe-7s-cash"></i>
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text"><span class="count"></span></div>
                <div class="stat-heading">
                  <router-link to="/dashboard/finance/income">Income</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-2">
              <i class="pe-7s-news-paper"></i>
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text"><span class="count"></span></div>
                <div class="stat-heading">
                  <router-link to="/dashboard/finance/voucher">Voucher</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-3">
              <i class="pe-7s-browser"></i>
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text"><span class="count"></span></div>
                <div class="stat-heading">
                  <router-link to="/dashboard/finance/payroll">Payroll</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-3">
              <i class="pe-7s-wallet"></i>
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text"></div>
                <div class="stat-heading">
                  <router-link to="/dashboard/finance/fund-user-wallet">Fund User Wallet</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  a {
    color: #99abb4 !important;
  }
</style>