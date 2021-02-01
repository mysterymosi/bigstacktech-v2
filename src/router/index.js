import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/modules/user";
import Home from "../views/Home.vue";
import _ from "lodash";
import DashboardHome from "../components/Dashboard/Home.vue";
import Users from "../components/Dashboard/Users.vue";
import Staff from "../components/Dashboard/Staff.vue";
import SingleStaff from "../components/Dashboard/SingleStaff.vue";
import Contacts from "../components/Dashboard/Contacts.vue";
import Finance from "../components/Dashboard/Finance.vue";
import Income from "../components/Dashboard/Income.vue";
import IncomeList from "../components/Dashboard/IncomeList.vue";
import CreateIncome from "../components/Dashboard/CreateIncome.vue";
import Voucher from "../components/Dashboard/Voucher.vue";
import VoucherList from "../components/Dashboard/VoucherList.vue";
import SingleVoucher from "../components/Dashboard/SingleVoucher.vue";
import Payroll from "../components/Dashboard/Payroll.vue";
import GeneratedPayroll from "../components/Dashboard/GeneratedPayroll.vue";
import PayrollList from "../components/Dashboard/PayrollList.vue";
import SinglePayroll from "../components/Dashboard/SinglePayroll.vue";
import FundWallet from "../components/Dashboard/FundWallet.vue";
import Hub from "../components/Dashboard/Hub.vue";
import BookingList from "../components/Dashboard/BookingList.vue";
import ActiveBookings from "../components/Dashboard/ActiveBookings.vue";
import BookingForm from "../components/Dashboard/BookingForm.vue";
import Qr from "../components/Dashboard/Qr.vue";
import Enrollers from "../components/Dashboard/Enrollers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/training",
    name: "Training",
    component: () =>
      import(/* webpackChunkName: "training" */ "../views/Training.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/ContactUs.vue")
  },
  {
    path: "/our-hub",
    name: "Hub",
    component: () =>
      import(/* webpackChunkName: "our-hub" */ "../views/Hub.vue")
  },
  {
    path: "/our-hub/:id",
    name: "HubForm",
    component: () =>
      import(/* webpackChunkName: "single-hub" */ "../views/HubForm.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Signin.vue"),
    meta: { isLoggedIn: true}
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "/",
        component: DashboardHome
      },
      {
        path: "users",
        component: Users
      },
      {
        path: "staff",
        component: Staff
      },
      {
        path: "staff/:id",
        component: SingleStaff
      },
      {
        path: "contacts",
        component: Contacts
      },
      {
        path: "finance",
        component: Finance
      },
      {
        path: "finance/income",
        component: Income
      },
      {
        path: "finance/income/income-list",
        component: IncomeList
      },
      {
        path: "finance/income/create-income",
        component: CreateIncome
      },
      {
        path: "finance/voucher",
        component: Voucher
      },
      {
        path: "finance/voucher/list",
        component: VoucherList
      },
      {
        path: "finance/voucher/list/:id",
        component: SingleVoucher
      },
      {
        path: "finance/payroll",
        component: Payroll
      },
      {
        path: "finance/payroll/generated-payroll",
        component: GeneratedPayroll
      },
      {
        path: "finance/payroll/list",
        component: PayrollList
      },
      {
        path: "finance/payroll/list/:id",
        component: SinglePayroll
      },
      {
        path: "finance/fund-user-wallet",
        component: FundWallet
      },
      {
        path: "our-hub",
        component: Hub
      },
      {
        path: "our-hub/bookings-list",
        component: BookingList
      },
      {
        path: "our-hub/active-bookings",
        component: ActiveBookings
      },
      {
        path: "our-hub/book-space",
        component: BookingForm
      },
      {
        path: "qr",
        component: Qr
      },
      {
        path: "enrollers",
        component: Enrollers
      }
    ],
    meta: { requiresAuth: true }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("profile: ", _.isEmpty(store.state.profile));
    if(_.isEmpty(JSON.parse(localStorage.getItem("user")))) {
      next({
        name: "Signin"
      })
    } else {
      next();
    }
  } else {
    next();
  }

  if (to.matched.some(record => record.meta.isLoggedIn)) {
    if (_.isEmpty(JSON.parse(localStorage.getItem("user")))===false) {
      next({
        name: "Home"
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
