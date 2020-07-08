<template>
  <div class="columns outer__wrapper">
    <section class="sidebar column is-one-third" ref="sidebar">
      <div class="sidebar__background has-background-primary"></div>

      <div class="columns is-multiline">
        <div class="column is-full">
          <figure class="image anime__cover" ref="cover">
            <img :src="anime.image_url" />
          </figure>
        </div>
        <div class="column hero__content is-full is-hidden-mobile">
          <h1 class="title is-family-secondary">{{ anime.title }}</h1>
          <h2 class="subtitle is-family-secondary">
            {{ anime.title_english }}
          </h2>
          <div class="row">
            <div class="col" v-if="anime.favorites">
              <span class="mdi mdi-heart">{{ anime.favorites }}</span>
            </div>
            <div class="col" v-if="anime.aired">
              Air Date:
              <span class="tag is-dark">{{ anime.aired.string }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col" v-if="anime.type">
              Type:<span>{{ anime.type }}</span>
            </div>
            <div class="col" v-if="anime.premiered">
              {{ anime.premiered }}
            </div>
            <div class="col" v-if="anime.status">
              Status:<span>{{ anime.status }}</span>
            </div>
          </div>
          <div class="row" v-if="anime.episodes">
            <div class="col">
              Episodes:<span>{{ anime.episodes }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col" v-if="anime.rating">
              Rating: {{ anime.rating }}
            </div>
          </div>
          <div class="row">
            <div class="col" v-if="anime.genres">
              Genre:
              <span
                v-for="genre in anime.genres"
                :key="genre.mal_id"
                class="tag is-dark"
                >{{ genre.name }}</span
              >
            </div>
          </div>
          <div class="row">
            <div class="col" v-if="anime.url">
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
    </section>

    <div
      class="details__content inner__wrapper column scrollable"
      ref="content"
    >
      <p v-if="anime.background">{{ anime.background }}</p>
      <anime-related :related-data="anime.related" />
      <pictures-listing :id="anime.mal_id" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import AnimeRelated from "@/components/AnimeRelated";
import PicturesListing from "@/components/PicturesListing";

export default {
  name: "AnimeDetails",

  components: {
    AnimeRelated,
    PicturesListing,
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

  methods: {
    onLeaveRoute() {
      return Promise.all([
        gsap.to(this.$refs.sidebar, {
          x: "-=100%",
          duration: 0.5,
          ease: "power3.out",
        }),
        gsap.to(this.$refs.content, {
          opacity: "0",
          duration: 0.5,
          ease: "power3.out",
        }),
      ]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.outer__wrapper {
  margin: 0;

  .sidebar {
    height: 80vh;
    position: relative;
    padding: 0;

    @media screen and (max-width: 768px) {
      height: 50%;
    }

    .columns {
      margin: 0;

      .column {
        position: relative;

        &.hero__content {
          padding: 0 2rem 1rem 2rem;

          .row {
            display: flex;
            margin-bottom: 0.2rem;

            .col {
              flex: auto;
            }
          }

          .tag {
            margin-right: 0.2rem;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      .anime__cover {
        margin: 0 auto;
        width: 240px;
        height: 240px;
        overflow: hidden;
        box-shadow: 0rem 0.5rem 1rem adjust-color($color: $dark, $alpha: -0.5);
        background-image: radial-gradient(
          circle farthest-corner at 50.3% 44.5%,
          rgba(116, 147, 179, 1) 0%,
          rgba(62, 83, 104, 1) 100.2%
        );

        img {
          object-fit: cover;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .sidebar__background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      animation: slideRight 0.5s ease-out forwards;
    }
  }

  .inner__wrapper {
    margin: 2rem 2rem 2rem 0 !important;

    @media screen and (max-width: 768px) {
      margin: 0 !important;
      padding: 0;
      height: calc(42vh - 4rem) !important;
    }

    &.details__content {
      transform: translateX(100%);
      animation: slideLeft 0.5s ease-out forwards;

      .outlink {
        span {
          font-size: 4rem;
        }
      }
    }
  }
}

@keyframes slideRight {
  0%,
  100% {
    transform: none;
  }
  from {
    transform: translateX(-100%);
  }
}

@keyframes slideLeft {
  0%,
  100% {
    transform: none;
  }
  from {
    transform: translateX(100%);
  }
}
</style>
