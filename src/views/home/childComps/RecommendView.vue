<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  border-bottom: 12px solid #f6f6f6;
}
.recommend > div {
  flex: 1;
  text-align: center;
}
.recommend > div img {
  width: 80%;
  padding-top: 10px;
}
</style>
