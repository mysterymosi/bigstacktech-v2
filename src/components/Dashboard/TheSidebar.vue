<template>
  <aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">
      <div id="main-menu" class="main-menu collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/dashboard">
              <i class="menu-icon fa fa-home"></i>Home
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/users">
              <i class="menu-icon fa fa-user"></i>Users
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/staff">
              <i class="menu-icon fa fa-user"></i>Staff
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/contacts">
              <i class="menu-icon fa fa-users"></i>Contacts
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/finance">
              <i class="menu-icon fa fa-home"></i>Finance
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/our-hub">
              <i class="menu-icon fa fa-home"></i>The Hub
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/qr">
              <i class="menu-icon fa fa-home"></i>QR Code
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/enrollers">
              <i class="menu-icon fa fa-address-book"></i>Enrollers
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/services">
              <i class="menu-icon fa fa-cogs"></i>Services
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/dashboard/training_programs">
              <i class="menu-icon fa fa-tasks"></i>Training Programs
            </router-link>
          </li> -->
          <li @click.prevent="logout">
            <router-link to="#">
              <i class="menu-icon fa fa-user"></i>Logout
            </router-link>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>
  </aside>
</template>
<script>
import logOut from "@/utils/logout";
export default {
  methods: {
    logout() {
      logOut(this.$store, this.$router, this.$swal);
      // this.$store.dispatch("logout").then((data) => {
      //   if (data) {
      //     this.alertSuccess("Logout Successful");
      //     this.$router.push("/login");
      //   } else {
      //     console.log("logout unsuccessful");
      //   }
      // });
      // this.$store.commit("clearToken");
      // this.$store.commit("clearUser");
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
      // this.alertSuccess("Logout Successful");
      // this.$router.push("/login");
    }
  }
};

</script>
<style scoped>
.router-link-exact-active {
  color: #24b99a !important;
  /*border-bottom: 4px solid #24b99a;*/
}

</style>
