<template>
  <div class="parent" ref="parent">
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
import { gsap } from "gsap";

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
      .loadTop("anime", 1, "favorite")
      .then((resp) => resp.top)
      .then((data) => {
        this.animes = data;
        gsap.to(this.$refs.parent, {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
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
.parent {
  opacity: 0;
}
</style>
