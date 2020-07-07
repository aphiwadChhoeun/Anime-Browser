<template>
  <div class="column is-2">
    <div class="list__item" @click="onClick">
      <figure class="image is-square">
        <img :src="anime.image_url" :alt="anime.title" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeListItem",

  props: {
    anime: {
      type: Object,
    },
  },

  methods: {
    onClick() {
      this.$emit("anime-clicked", this.anime.mal_id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.list__item {
  box-shadow: 0.5rem 0.5rem 1.4rem adjust-color($color: $dark, $alpha: -0.7);
  cursor: pointer;

  &:hover {
    .image {
      filter: brightness(1.2);
    }
  }

  .image {
    transition: all 300ms ease-out;
    img {
      object-fit: cover;
    }
  }
}
</style>
