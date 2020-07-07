<template>
  <div id="app">
    <router-view />
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
