<template>
  <div>
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

  mounted() {
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

<style lang="scss" scoped></style>
