<template>
  <div id="anime__page" class="page">
    <anime-details :anime="anime" v-if="anime" />
  </div>
</template>

<script>
import jikanjs from "jikanjs";
import AnimeDetails from "@/components/AnimeDetails";

export default {
  name: "AnimePage",

  components: {
    AnimeDetails,
  },

  data() {
    return {
      anime: null,
    };
  },

  created() {
    jikanjs.loadAnime(this.$route.params.id).then((resp) => {
      this.anime = resp;
    });
  },
};
</script>

<style></style>
