<template>
  <div>
    <Search />
  </div>
</template>
<script>
import Search from "@/components/Dashboard/Search.vue";
export default {
  components: {
    Search
  },
  methods: {
    generateQr() {
      this.$store.dispatch("admin/generateQr")
        .then((err) => {
          if (!err) console.log("code generated");
          console.log(err);
        });
    }
  }
}

</script>
