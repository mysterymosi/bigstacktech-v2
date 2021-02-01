<template>
    <div>
        <div class="btn-flex mb-3">
            <button @click="print" class="btn btn-info">Print</button>
            <button v-if="approved === null" @click="approve" class="btn btn-info">Approve</button>
            <button v-else-if="approved === 1" class="btn btn-success">Approved</button>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div id="printMe" class="card">
                    <div class="card-header">
                        <strong class="card-title">Payroll</strong>
                    </div>
                    <div class="table-stats order-table ov-h">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <!-- <th class="avatar">Avatar</th> -->
                                    <!-- <th>ID</th> -->
                                    <th>Name</th>
                                    <th>Net Salary</th>
                                    <th>Salary</th>
                                    <th>Staff No</th>
                                    <!-- <th>Delete</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="staff in payroll" :key="staff.staff_id">
                                    <td class="name">{{ staff.name }}</td>
                                    <td>
                                        <span class="name">{{ staff.netSalary }}</span>
                                    </td>
                                    <!-- <td>
                    <span class="product">{{ customer.email }}</span>
                  </td> -->
                                    <td>
                                        <span class="sn">{{ staff.salary }}</span>
                                    </td>
                                    <td>
                                        <span class="sn">{{ staff.staff_id }}</span>
                                    </td>
                                    <!-- <td>
                    <span @click="deleteService()">
                      <i class="fa fa-trash"></i>
                    </span>
                  </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-stats -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
    data() {
        return {
            approved: null
        }
    },
    computed: {
        payroll() {
            return this.$store.getters["finance/getSinglePayroll"](this.$route.params.id);
        },

        payroll_approved() {
            return this.$store.getters["finance/getPayrollApproval"](this.$route.params.id);
        }
    },

    methods: {
        deleteService(serviceId) {
            this.showQuestion().then((result) => {
                if (result.value) {
                    this.$store.dispatch("deleteService", serviceId).then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Service has been deleted.",
                            "success"
                        );
                    }).catch((e) => {
                      console.log(e);
                        this.showError("Service delete unsuccessful");
                    });
                }
            });
        },
        print() {
            this.$htmlToPaper("printMe");
        },
        approve() {
            this.$store.dispatch("finance/approvePayroll", {
                    staffId: "BST/CR/001",
                    payrollId: this.$route.params.id
                })
                .then((err) => {
                    if (err) {
                        console.log(err);
                        this.$swal({
                            position: "center",
                            icon: "error",
                            title: "Error",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        this.$swal({
                            position: "center",
                            icon: "success",
                            title: "Payroll Approved",
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.approved = 1;
                        console.log("it works");
                    }
                });
        }
    },

    fetch() {
        this.$store.dispatch("finance/getPayroll")
            .then((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("payro says: ", this.payroll);
                    console.log("id says: ", this.$route.params.id);
                    this.approved = this.payroll_approved;
                }
            })
        console.log("bread");
    }
};
</script>
<style scoped>
.sn {
    font-size: 14px !important;
}

.btn-flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>