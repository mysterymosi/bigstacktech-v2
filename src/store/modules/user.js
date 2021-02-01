import Vue from "vue";
import axios from "axios";

const Cookie = require("js-cookie");
const url = process.env.VUE_APP_URL;

const user = {
    namespaced: true,
    state: {
        user: {},
        singleStaff: {},
        token: null
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },

        CLEAR_TOKEN(state) {
            state.token = null;
        },
        SET_USER(state, user) {
            Vue.set(state, "user", user);
        },

        CLEAR_USER(state) {
            state.user = {};
            Cookie.remove("token");
            Cookie.remove("user");
        }
    },
    actions: {
        signin(context, user) {
            return axios.post(url + "/user/login", user).then((data) => {
                    console.log("login data: ", data.data);
                    context.commit("SET_TOKEN", data.data.token);
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("user", JSON.stringify(data.data));
                    context.commit("SET_USER", data.data);
                    Cookie.set("token", data.data.token);
                    Cookie.set("user", data.data);
                    return data.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        signup(context, user) {
            return axios.post(url + "/user/signup", user)
                .then((data) => {
                    console.log("signup data: ", data.data);
                    context.commit("SET_TOKEN", data.data.token);
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("user", JSON.stringify(data.data));
                    context.commit("SET_USER", data.data);
                    Cookie.set("token", data.data.token);
                    Cookie.set("user", data.data);
                    return data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        addContact(context, payload) {
            return axios.post(url + "/user/contact", payload);
            // context.commit("addCustomer", payload);
            // console.log("customer added");
        },

        initializeWalletTransaction(context, payload) {
        console.log("payload: ", payload);
        return axios.post(url + "/user/transaction/init", payload)
          .then((data) => {
            console.log("payment data: ", data.data);
            let payloadData = { ...data.data, email: payload.email, amount: payload.amount };
            // window.location.href = data.authorization_url;
            return payloadData;
          })
          .catch((err) => {
            return err;
          });
      },

      verifyWalletTransaction(context, payload) {
        return axios.post(url + "/user/transaction/verify", payload)
          .then((data) => {
            console.log("verify data: ", data.data);
            return data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },

    },
    getters: {
        user(state) {
            if (state.user) {
                return state.user;
            }
        }
    }
};

export default user;