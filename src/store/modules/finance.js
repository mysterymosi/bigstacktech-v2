import Vue from "vue";
import axios from "axios";

const url = process.env.VUE_APP_URL;
const finance = {
    namespaced: true,
    state: {
        incomes: [],
        voucherDetails: {},
        vouchers: [],
        payroll: [],
        payroll_list: []

    },
    mutations: {
        // income
        SET_INCOMES(state, payload) {
            Vue.set(state, "incomes", payload);
        },

        // voucher
        SET_VOUCHER_DETAILS(state, payload) {
            Vue.set(state, "voucherDetails", payload);
            console.log("vdetails: ", state.voucherDetails);
        },

        SET_VOUCHERS(state, payload) {
            Vue.set(state, "vouchers", payload);
        },

        // payroll
        SET_PAYROLL(state, payload) {
            Vue.set(state, "payroll", payload);
        },

        SET_PAYROLL_LIST(state, payload) {
            Vue.set(state, "payroll_list", payload);
        },

    },
    actions: {
        // income
        createIncome(context, payload) {
            return axios.post(url + "/staff/income", payload);
        },
        getIncomes(context) {
            return axios.get(url + "/staff/finance/summary/income")
                .then((data) => {
                    console.log("income data: ", data.data);
                    context.commit("SET_INCOMES", data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        searchIncomes(context, payload) {
            return axios.get(url + "/staff/finance/summary/income?start_date=" + payload.start_date + "&end_date=" + payload.end_date + "&description=" + payload.description)
                .then((data) => {
                    console.log("seachvouvher: ", data.data);
                    context.commit("SET_INCOMES", data.data);
                })
                .catch((err) => {
                    return err;
                });
        },

        // voucher
        generateVoucher(context, payload) {
            return axios.post(url + "/staff/voucher", payload)
                .then((data) => {
                    console.log("data: ", data.data);
                    context.commit("SET_VOUCHER_DETAILS", data.data);
                })
                .catch((err) => {
                    return err;
                });
        },

        getVouchers(context) {
            return axios.get(url + "/staff/finance/summary/expenditure")
                .then((data) => {
                    console.log("voucherData: ", data.data);
                    context.commit("SET_VOUCHERS", data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        getVoucher(context, payload) {
            return axios.get(url + "/staff/finance/summary/expenditure/" + payload.id)
                .then((data) => {
                    console.log("single voucher: ", data.data);
                    context.commit("SET_VOUCHER_DETAILS", data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        approveVoucher(context, payload) {
            return axios.post(url + "/staff/voucher/approve", payload)
                .then((data) => {
                    console.log("approved data: ", data.data);
                })
                .catch((err) => {
                    return err;
                });
        },

        searchVouchers(context, payload) {
            return axios.get(url + "/staff/finance/summary/expenditure?start_date=" + payload.start_date + "&end_date=" + payload.end_date + "&description=" + payload.description)
                .then((data) => {
                    console.log("seachvouvher: ", data.data);
                    context.commit("SET_VOUCHERS", data.data);
                })
                .catch((err) => {
                    return err;
                });
        },

        // payroll
        generatePayroll(context) {
            return axios.get(url + "/staff/payroll")
                .then((data) => {
                    console.log("payroll data: ", data.data);
                    context.commit("SET_PAYROLL", data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        getPayroll({ commit }) {
            return axios.get(url + "/staff/payroll/list")
                .then((data) => {
                    console.log("payroll data: ", data.data);
                    commit("SET_PAYROLL_LIST", data.data);
                })
                .catch((err) => {
                    return err;
                });
        },

        approvePayroll(context, payload) {
            return axios.post(url + "/staff/payroll/approve", payload)
                .then((data) => {
                    console.log("approve data: ", data.data);
                })
                .catch((err) => {
                    return err;
                });
        },

        // wallet
        fundUserWallet(context, payload) {
            console.log("wallet payload: ", payload);
            return axios.post(url + "/staff/fund/user/wallet", payload);
        },

    },
    getters: {
        // income
        getIncomes(state) {
            return state.incomes;
        },

        // voucher
        getVoucher(state) {
            return state.voucherDetails;
        },

        getVouchers(state) {
            return state.vouchers;
        },

        // payroll
        getPayroll(state) {
            return state.payroll;
        },

        getPayrollList(state) {
            return state.payroll_list;
        },

        getSinglePayroll(state) {
            return function(payrollId) {
                for (const payroll of state.payroll_list) {
                    if (+payroll.id === +payrollId) {
                        return JSON.parse(payroll.payroll);
                    }
                }
            }
        },

        getPayrollApproval(state) {
            return function(payrollId) {
                for (const payroll of state.payroll_list) {
                    if (+payroll.id === +payrollId) {
                        return payroll.approved;
                    }
                }
            }
        }

    }
}

export default finance;