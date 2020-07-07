<template>
  <div class="anime__listing__container">
    <section class="section wrapper">
      <div class="inner__wrapper scrollable">
        <div class="container">
          <div class="columns is-multiline">
            <anime-list-item
              v-for="anime in animes"
              :key="anime.mal_id"
              :anime="anime"
              v-on:anime-clicked="onAnimeClick"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import jikanjs from "jikanjs";
import AnimeListItem from "@/components/AnimeListItem";

export default {
  name: "AnimeListing",

  components: {
    AnimeListItem,
  },

  data() {
    return {
      animes: [],
    };
  },

  created() {
    jikanjs
      .loadTop("anime", 1, "upcoming")
      .then((resp) => resp.top)
      .then((data) => {
        this.animes = data;
      });
  },

  methods: {
    onAnimeClick(id, x, y, width, height) {
      this.$router.push({
        name: "Anime",
        params: { id: id, x, y, width, height },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.anime__listing__container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 80vw;
    min-height: 70vh;
    padding: 2rem;
    background: adjust-color($light, $alpha: -0.7);
    box-shadow: 0rem -0.5rem 1rem $light, -0.5rem 0rem 1rem $light,
      0rem 0.8rem 1rem adjust-color($dark, $alpha: -0.8),
      0.8rem 0rem 1rem adjust-color($dark, $alpha: -0.8);
    border-radius: 1rem;

    .inner__wrapper {
      width: 100%;
      height: 70vh;
      padding: 2rem;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
}
</style>
