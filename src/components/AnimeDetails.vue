<template>
  <div class="details__container">
    <section class="hero is-primary"></section>

    <div id="hero__content" class="media">
      <div class="media-left">
        <figure class="image anime__cover">
          <img :src="anime.image_url" />
        </figure>
      </div>
      <div class="media-content">
        <h1 class="title">{{ anime.title }}</h1>
        <h2 class="subtitle">{{ anime.title_english }}</h2>
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
export default {
  name: "AnimeDetails",

  props: {
    anime: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.details__container {
  .anime__cover {
    width: 240px;
    height: 373px;
  }

  .hero {
    height: 460px;
    transform: translateY(-100%);
    animation: slideDown 1s ease-out s forwards;
  }

  #hero__content {
    position: absolute;
    left: 10%;
    top: 2rem;
    width: 80vw;
    height: auto;

    .media-content {
      transform: translateY(-150%);
      animation: slideDown 1s ease-out 300ms forwards;
    }
  }

  .content {
    transform: translateY(150%);
    animation: slideUp 1s ease-out 300ms forwards;
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
