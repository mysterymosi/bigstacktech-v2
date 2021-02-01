<template>
  <div @click="handleScroll" class="scroll-top">
    <i class="ti-angle-up"></i>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    // scroll to the top
    handleScroll() {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        500
      );
      return false;
    }
  }
};
</script>
