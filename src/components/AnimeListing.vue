<template>
  <div class="anime__listing__container">
    <section class="section wrapper">
      <div class="inner__wrapper">
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
      .loadTop("anime")
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
    padding: 1rem;
    background: adjust-color($light, $alpha: -0.7);
    border-radius: 1rem;

    .inner__wrapper {
      width: 100%;
      height: 70vh;
      padding: 1rem;
      overflow-x: hidden;
      overflow-y: scroll;

      /* The emerging W3C standard
   that is currently Firefox-only */

      scrollbar-width: thin;
      scrollbar-color: #343434 transparent;

      /* Works on Chrome/Edge/Safari */
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #343434;
        border-radius: 20px;
        border: 3px solid #343434;
      }
    }
  }
}
</style>
