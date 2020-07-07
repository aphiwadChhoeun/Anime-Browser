<template>
  <div class="inner__wrapper scrollable">
    <anime-listing />
  </div>
</template>

<script>
import AnimeListing from "@/components/AnimeListing";

export default {
  name: "Home",

  components: {
    AnimeListing,
  },
};
</script>

<style lang="scss" scoped></style>
