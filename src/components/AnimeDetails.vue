<template>
  <div class="details__container" ref="container">
    <section class="hero is-primary"></section>

    <div id="hero__content" class="media">
      <div class="media-left">
        <figure class="image anime__cover" ref="cover">
          <img :src="anime.image_url" />
        </figure>
      </div>
      <div class="media-content is-hidden-mobile">
        <h1 class="title is-family-secondary">{{ anime.title }}</h1>
        <h2 class="subtitle is-family-secondary">{{ anime.title_english }}</h2>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="mdi mdi-heart">{{ anime.favorites }}</span>
            </div>
            <div class="level-item">
              Air Date:
              <span class="tag is-dark">{{ anime.aired.string }}</span>
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
        <div class="level" v-if="anime.episodes">
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
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <a
                :href="anime.url"
                target="_blank"
                rel="noopener"
                class="button is-dark is-small is-outlined outlink"
                ><span class="mdi mdi-link-box-variant"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container scrollable">
        <p>{{ anime.background }}</p>
        <anime-related :related-data="anime.related" />
      </div>
    </section>
  </div>
</template>

<script>
/* eslint 'no-unused-vars': 'off',
'no-unreachable': 'off' */
import { gsap } from "gsap";
import AnimeRelated from "@/components/AnimeRelated";

export default {
  name: "AnimeDetails",

  components: {
    AnimeRelated,
  },

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
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(
      circle farthest-corner at 50.3% 44.5%,
      rgba(116, 147, 179, 1) 0%,
      rgba(62, 83, 104, 1) 100.2%
    );

    img {
      object-fit: cover;
    }
  }

  .hero {
    height: 350px;
    transform: translateY(-100%);
    animation: slideDown 0.5s ease-out 0.5s forwards;
    box-shadow: -1rem 0.2rem 2rem adjust-color($dark, $alpha: -0.5),
      inset 0 -0.2rem 2rem adjust-color($dark, $alpha: -0.8);
  }

  #hero__content {
    position: absolute;
    left: 10%;
    top: 4rem;
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
      padding: 2rem 1rem;
      height: 50vh;
      overflow-y: scroll;

      .outlink {
        span {
          font-size: 4rem;
        }
      }
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
