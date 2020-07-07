<template>
  <div id="home__page" class="page">
    <h1 class="title is-1 is-family-secondary	">Top Upcoming Anime</h1>
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

<style lang="scss" scoped>
h1.title {
  position: fixed;
  left: 4rem;
  top: 1rem;
}
</style>
