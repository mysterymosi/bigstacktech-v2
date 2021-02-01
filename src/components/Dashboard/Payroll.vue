<template>
  <div class="row">
    <div class="col-md-6 mx-auto">
      <aside class="profile-nav alt">
        <section class="card">
          <div class="card-header user-header alt bg-dark">
            <div class="media">
              <div class="media-body">
                <h2 class="text-light display-6">Payroll</h2>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <router-link to="/dashboard/finance/payroll/generated-payroll">
                <i class="fa fa-tasks"></i> Generate Payroll
                <span class="badge badge-primary pull-right">3</span>
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/dashboard/finance/payroll/list">
                <i class="fa fa-eye"></i> View Payrolls
                <span class="badge badge-primary pull-right">3</span>
              </router-link>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
	layout: "dashboard"
}
</script>
