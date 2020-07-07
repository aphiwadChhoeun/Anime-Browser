<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div>
        Made with <span class="mdi mdi-heart"> </span> by
        <a
          href="https://twitter.com/aphiwadchhoeun"
          class="link"
          target="_blank"
          rel="nofollow"
          >Aphiwad Chhoeun</a
        >
        2020
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSite",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;

  .mdi-heart {
    color: $heart;
  }
}
</style>
