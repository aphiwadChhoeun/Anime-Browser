<template>
  <div class="anime__listing__container">
    <section class="section wrapper" ref="wrapper">
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
    let d = {
      val: 0,
    };
    gsap
      .to(d, {
        val: 2.5,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        onUpdate: () => {
          this.$refs.wrapper.style.boxShadow = `0 0 ${d.val}rem rgba(42, 54, 59, 0.2)`;
        },
      })
      .then(() => {
        jikanjs
          .loadTop("anime", 1, "upcoming")
          .then((resp) => resp.top)
          .then((data) => {
            this.animes = data;
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
    background: rgba(245, 245, 245, 0.2);
    // box-shadow: 0rem 0rem 1rem rgba(42, 54, 59, 0.2);
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
