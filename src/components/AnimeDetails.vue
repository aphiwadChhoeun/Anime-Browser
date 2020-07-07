<template>
  <div class="details__container">
    <section class="hero is-primary"></section>

    <div id="hero__content" class="media">
      <div class="media-left">
        <figure class="image anime__cover" ref="cover">
          <img :src="anime.image_url" />
        </figure>
      </div>
      <div class="media-content">
        <h1 class="title">{{ anime.title }}</h1>
        <h2 class="subtitle">{{ anime.title_english }}</h2>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="mdi mdi-heart">{{ anime.favorites }}</span>
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              Type:<span>{{ anime.type }}</span>
            </div>
            <div class="level-item">
              {{ anime.premiered }}
            </div>
            <div class="level-item">
              Status:<span>{{ anime.status }}</span>
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              Episodes:<span>{{ anime.episodes }}</span>
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              {{ anime.rating }}
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              Genre:
              <span
                v-for="genre in anime.genres"
                :key="genre.mal_id"
                class="tag is-dark"
                >{{ genre.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container">
        <p>{{ anime.background }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "AnimeDetails",

  props: {
    meta: {
      type: Object,
    },
    anime: {
      type: Object,
    },
  },

  mounted() {
    const bound = this.$refs.cover.getBoundingClientRect();

    gsap.from(this.$refs.cover, {
      x: this.meta.x - bound.x,
      y: this.meta.y - bound.y,
      width: this.meta.width,
      height: this.meta.height,
      duration: 0.5,
      ease: "power3.out",
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.details__container {
  .level {
    margin: 0;
  }

  .tag {
    margin-right: 0.2rem;

    &:last-child {
      margin-right: 0;
    }
  }

  .anime__cover {
    width: 240px;
    height: 240px;
    overflow: hidden;
    box-shadow: 0.5rem 0.5rem 1.4rem adjust-color($color: $dark, $alpha: -0.7);

    img {
      object-fit: cover;
    }
  }

  .hero {
    height: 350px;
    transform: translateY(-100%);
    animation: slideDown 0.5s ease-out 0.5s forwards;
  }

  #hero__content {
    position: absolute;
    left: 10%;
    top: 2rem;
    width: 80vw;
    height: auto;

    .media-content {
      transform: translateY(-150%);
      animation: slideDown 0.5s ease-out 300ms forwards;
    }
  }

  .content {
    transform: translateY(150%);
    animation: slideUp 0.5s ease-out 300ms forwards;
    min-height: 400px;

    .container {
      padding: 2rem 0;
    }
  }
}

@keyframes slideDown {
  0%,
  100% {
    transform: none;
  }
  from {
    transform: translateY(-100%);
  }
}

@keyframes slideUp {
  0%,
  100% {
    transform: none;
  }
  from {
    transform: translateY(150%);
  }
}
</style>
