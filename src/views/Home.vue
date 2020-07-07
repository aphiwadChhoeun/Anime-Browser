<template>
  <div id="home__page" class="page">
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