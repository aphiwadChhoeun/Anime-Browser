<template>
  <div class="pictures__container">
    <div class="columns is-multiline">
      <div class="column is-4" v-for="pic in pictureList" :key="pic.mal_id">
        <figure class="image">
          <img :src="pic.large" v-if="pic.large" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import jikanjs from "jikanjs";

export default {
  name: "PicturesListing",

  props: {
    id: {
      type: Number,
    },
  },

  data() {
    return {
      pictureList: [],
    };
  },

  mounted() {
    jikanjs.loadAnime(this.id, "pictures").then((resp) => {
      this.pictureList = resp.pictures;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.pictures__container {
  margin-top: 1rem;
  
  .image {
    box-shadow: 0 0.5rem 1rem adjust-color($dark, $alpha: -0.8);

    img {
      object-fit: cover;
    }
  }
}
</style>
