<template>
  <div class="related__container">
    <div
      v-for="(section, index) in relatedData"
      :key="index"
      class="related__section"
    >
      <div class="title is-5">{{ index }}</div>
      <ul class="list">
        <li v-for="item in section" :key="item.mal_id">
          <a :href="item.url" target="_blank" rel="noopener">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeRelated",

  props: {
    relatedData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.related__section {
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
