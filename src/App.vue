<template>
  <div id="app">
    <div class="page__container">
      <section class="section wrapper">
        <router-view />
      </section>
    </div>
    <footer-site />
  </div>
</template>

<script>
import FooterSite from "@/components/FooterSite";

export default {
  name: "App",

  components: { FooterSite },
};
</script>

<style lang="scss" scoped></style>
