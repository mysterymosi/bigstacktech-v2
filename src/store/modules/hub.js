import Vue from "vue";
import axios from "axios";
import _ from "lodash";

const url = process.env.VUE_APP_URL;
const hub = {
    namespaced: true,
    state: {
        hubPlan: [{
                id: 1,
                name: "Basic",
                details: [
                    { amount: 350, description: "Workspace" },
                    { amount: 500, description: "Data + Workspace" }
                ],
                classStyle: true
            },
            {
                id: 2,
                name: "Executive",
                details: [
                    { amount: 1500, description: "Office workspace" },
                    { amount: 2500, description: "Data + Office Workspace" }
                ],
                classStyle: false
            }
        ],

        hub_spaces: [],
        booking_summary: {},
        bookings: [],
        activeBookings: []
    },
    mutations: {
        BOOK_SPACE(state, payload) {
            state.hub_spaces.push(payload);
            console.log("space booked: ", state.hub_spaces);
        },

        SET_BOOKING_SUMMARY(state, payload) {
            Vue.set(state, "booking_summary", payload);
        },

        SET_BOOKINGS(state, bookings) {
            Vue.set(state, "bookings", bookings);
            console.log("state set: ", state.bookings);
        },

        SET_ACTIVE_BOOKINGS(state, activeBookings) {
            Vue.set(state, "activeBookings", activeBookings);
            console.log("active bookings set: ", state.activeBookings);
        },
    },
    actions: {
        book_space(context, customer) {
            console.log("customer payload: ", customer);
            return axios.post(url + "/hub/book", customer);
        },

        get_all_bookings({ commit }) {
            return axios.get(url + "/hub")
                .then((data) => {
                    console.log("customer data: ", data.data);
                    commit("SET_BOOKINGS", data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        get_active_bookings({ commit }) {
            return axios.get(url + "/hub/active")
                .then((data) => {
                    console.log("active customers: ", data.data);
                    commit("SET_ACTIVE_BOOKINGS", data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

    },
    getters: {
        getHubPlans(state) {
            if (_.isEmpty(state.hubPlan) === false) return state.hubPlan;
        },

        getPackage(state) {
            return function(pkgId) {
                for (const i in state.hubPlan) {
                    if (+state.hubPlan[i].id === +pkgId) {
                        return state.hubPlan[i];
                    }
                }
            };
        },

        getHubBookings(state) {
            return state.bookings;
        },

        getActiveBookings(state) {
            return state.activeBookings;
        },

        getBookingSummary(state) {
            return state.booking_summary;
        }
    }
}

export default hub;