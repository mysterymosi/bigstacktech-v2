import Vue from "vue";
import axios from "axios";
// import _ from "lodash";

const url = process.env.VUE_APP_URL;
const admin = {
    namespaced: true,
    state: {
        services: [
            { id: 1, service: "Web Development", description: "We build websites and web applications that perform well and works according to your requirements. We have a team of skilled professionals that always fascinate the target audiences with their incredible designs and business logic." },
            { id: 2, service: "Mobile App Development", description: "Mobile Applications are effective only when they are intriguing, innovative and easy to use. We provide attractive smart mobile applications for your business to grow. We develop Andriod, iOS, Windows, and Hybrid apps." },
            { id: 3, service: "Server Configuration", description: "Our server configuration experts can set up an entire network flow, regulating work environment at the server level. Our company helps you to get the best options for collecting, accessing, managing, analyzing and processing data. Keeping in mind the security standards, we provide the best server configuration and maintenance programs to our clients." },
            { id: 4, service: "Desktop Application Development", description: "Combination of the rich technical expertise, years of experience, and deep understanding of the low-level desktop operating systems architecture help us to span the full cycle of the desktop application development programs needed to solve our customer’s most complex challenges." },
            { id: 5, service: "Search Engine Optimization", description: "There is a lot of competition in online business and everybody wishes to stay on the top. Search Engine Optimization (SEO) is the only way to climb above the competition and also to enhance the occurrence of your business online." },
            { id: 6, service: "Web Development Consultancy", description: "We conduct vast market research and apply state-of-the-art methodologies to implement your product or service and make required changes accordingly, when needed." }
        ],
        users: [],
        staff: [],
        contacts: [],
        qrDetails: [],
        enrollers: []
    },
    mutations: {
        SET_STAFF(state, users) {
            let staffval = [];
            for (const user of users) {
                if (+user.is_staff === 1) {
                    staffval.push(user);
                }
            }
            Vue.set(state, "staff", staffval);
            console.log("state.staff", state.staff);

        },
        SET_USERS(state, reg_users) {
            let users = [];
            for (const user of reg_users) {
                if (+user.is_staff === 0) {
                    users.push(user);
                }
            }
            Vue.set(state, "users", users);
            console.log("state.users", state.users);
        },
        SET_SINGLE_STAFF(state, singlestaff) {
            Vue.set(state, "singleStaff", singlestaff);
            console.log("singless: ", state.singleStaff);
        },

        SET_CONTACTS(state, contacts) {
            Vue.set(state, "contacts", contacts);
        },

        SET_QR_DETAILS(state, payload) {
            Vue.set(state, "qrDetails", payload);
        },

        SET_ENROLLERS(state, enrollers) {
        	Vue.set(state, "enrollers", enrollers);
      	},

    },
    actions: {
        getUsers(context) {
            return axios.get(url + "/user/list")
                .then((data) => {
                    console.log("user data: ", data.data);
                    context.commit("SET_USERS", data.data);
                    context.commit("SET_STAFF", data.data);
                }).catch((err) => {
                    return err;
                });
        },

        getStaff(context, staffId) {
            return axios.get(url + "/staff/profile/" + staffId)
                .then((data) => {
                    console.log("staff data: ", data.data);
                    console.log("data obj: ", data.data[0]);
                    context.commit("SET_SINGLE_STAFF", data.data[0]);
                })
                .catch((err) => {
                    return err;
                });
        },

        modifyPayslip(context, payload) {
            console.log("payload: ", payload);
            return axios.post(url + "/staff/payslip", payload)
                .then((data) => {
                    console.log("payslip data: ", data);
                    return data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        onboard(context, payload) {
            console.log("onboard payload: ", payload);
            return axios.post(url + "/staff/onboard", payload)
                .then((data) => {
                    console.log("onboard data: ", data);
                })
                .catch((err) => {
                    return err;
                });
        },

        getContacts({ commit }) {
            // get customers
            return axios.get(url + "/admin/contacts").then((data) => {
                console.log("contacts: ", data.data);
                commit("SET_CONTACTS", data.data);
            }).catch((e) => {
                console.log("Error: ", e);
                // context.error(e);
            });
        },

        generateQr(context, payload) {
            return axios.get(`${url}/staff/qrcode?start_date=${payload.start_date}&end_date=${payload.end_date}`)
                .then((data) => {
                    console.log("qr data: ", data.data);
                    context.commit("SET_QR_DETAILS", data.data);
                })
                .catch((err) => {
                    return err;
                });
        },

        getEnrollers({ commit }) {
        	return axios.get(`${url}/admin/enroll`)
        		.then((data) => {
        			console.log("enrollers: ", data.data);
        			commit("SET_ENROLLERS", data.data);
        		})
        		.catch((err) => {
        			console.log(err);
        		});
        }
    },
    getters: {
        getServices(state) {
            if (state.services) return state.services;
        },
        users(state) {
            return state.users;
        },

        getStaff(state) {
            return state.staff;
        },
        getSingleStaff(state) {
            return state.singleStaff;
        },
        getContacts(state) {
            return state.contacts;
        },
        getQrDetails(state) {
            return state.qrDetails;
        },
        getEnrollers(state) {
        	return state.enrollers;
        }

    }
}

export default admin;