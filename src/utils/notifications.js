import Vue from "vue";
import Swal from "sweetalert2";
import store from "../store"; 

// let store;
// if (process.browser) {
//   window.onNuxtReady(({ $store }) => {
//     store = $store
//   })
// }

function payWithPaystack(email, amount, ref) {
  let handler = PaystackPop.setup({
    key: 'pk_test_54853e4e4c031055749a1efb31f5676e233988cb', // Replace with your public key
    email: email,
    amount: amount, // the amount value is multiplied by 100 to convert to the lowest currency unit
    ref: ref, // Replace with a reference you generated
    callback: function(response) {
      //this happens after the payment is completed successfully
      // let reference = response.reference;
      console.log("response says: ", response);
      let verify_obj = {
        txId: response.trxref,
        email: email,
        amount: amount,
        description: "Wallet funded successfully"
      }
      store.dispatch("verifyWalletTransaction", verify_obj)
        .then((data) => {
          if (data) {
            console.log("verify data: ", data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: data,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
      // alert('Payment complete! Reference: ' + reference);
      // Make an AJAX call to your server with the reference to verify the transaction
    },
    onClose: function() {
      // alert('Transaction was not completed, window closed.');
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Transaction was not completed, window closed.",
        showConfirmButton: false,
        timer: 1500
      });
    },
  });
  handler.openIframe();
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

Vue.mixin({
  methods: {
    showSuccess(message) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    },

    alertSuccess(message) {
      // Swal.fire({
      //   position: "top-end",
      //   icon: "success",
      //   title: message,
      //   showConfirmButton: false,
      //   timer: 1500
      // });
      Toast.fire({
        icon: "success",
        title: message
      });
    },

    showError(message) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    },

    showInfo(message) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: message,
        showConfirmButton: false,
        timer: 2000
      });
    },

    showWalletModal(message, markup, email) {
      (async () => {
        const { value: formValues } = await Swal.fire({
          position: "bottom-end",
          title: message,
          html: markup,
          focusConfirm: false,
          // showCancelButton: true,
          preConfirm: () => {
            return {
              email: email,
              amount: Number(document.getElementById('swal-input2').value) * 100
            }
          }
        });
        if (formValues) {
          console.log("formValues: ", formValues);
          store.dispatch("initializeWalletTransaction", formValues)
            .then((data) => {
              if (data) {
                console.log("data from then: ", data);
                payWithPaystack(data.email, data.amount, data.reference);
              } else {
                console.log("wallet funded");
              }
            });
        }
      })();
    },

    alertError(message) {
      // Swal.fire({
      //   position: "top-end",
      //   icon: "error",
      //   title: message,
      //   showConfirmButton: false,
      //   timer: 1500
      // });
      Toast.fire({
        icon: "error",
        title: message
      });
    },

    showQuestion() {
      return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
    },

    showUrl(imageurl) {
      Swal.fire({
        title: "Image Url",
        input: "text",
        inputValue: imageurl,
        inputAttributes: {
          disabled: true
        },
        showConfirmButton: true,
        confirmButtonText: "Copy Url"
      }).then((result) => {
        if (result.value) {
          const copyText = Swal.getInput();
          copyText.select();
          navigator.clipboard.writeText(copyText.value);
        }
      });
    }
  }
});
