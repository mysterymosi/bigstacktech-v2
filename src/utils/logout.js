const logout = (store, router, alertSuccess) => {
    store.commit("user/CLEAR_TOKEN");
    store.commit("user/CLEAR_USER");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alertSuccess({
        icon: "success",
        title: "User logged out",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener("mouseenter", alertSuccess.stopTimer);
            toast.addEventListener("mouseleave", alertSuccess.resumeTimer);
        }

    });
    router.push("/");
}

export default logout;