<template>
  <div class="row">
    <div class="col-md-6">
      <aside class="profile-nav alt">
        <section class="card">
          <div class="card-header user-header alt bg-dark">
            <div class="media">
              <div class="media-body">
                <h2 class="text-light display-6">All bookings</h2>
              </div>
            </div>
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <router-link to="/dashboard/our-hub/bookings-list">
                <i class="fa fa-eye"></i> View all bookings
                <span class="badge badge-primary pull-right">{{ 3 }}</span>
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/dashboard/our-hub/book-space">
                <i class="fa fa-tasks"></i> Book hub space
              </router-link>
            </li>
          </ul>
        </section>
      </aside>
    </div>
    <div class="col-md-6">
      <aside class="profile-nav alt">
        <section class="card">
          <div class="card-header user-header alt bg-dark">
            <div class="media">
              <div class="media-body">
                <h2 class="text-light display-6">Active bookings</h2>
              </div>
            </div>
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <router-link to="/dashboard/our-hub/active-bookings">
                <i class="fa fa-eye"></i> View active bookings
                <span class="badge badge-primary pull-right">{{ 3 }}</span>
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
  // middleware: ["check-auth", "auth", "check-if-admin"],
};
</script>

<style scoped>
.badge-primary {
  background-color: #24b99a !important;
}
</style>
