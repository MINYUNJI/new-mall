<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <!-- 必须要有key 否则报错 另外 v-for的顺序也是固定的 item在前 index在后 -->
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// 注意这里的写法 在home.js里没有用default导出 所以不能去掉大括号
// import Swiper from '@/components/common/swiper/Swiper'
// import SwiperItem from '@/components/common/swiper/SwiperItem'
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  props: ["banner", "recommend"],
  components: {
    Swiper,
    SwiperItem,
  },
  // {
  // banner: {
  //   type: Array,
  //   dafault: function () {
  //     return [];
  //   },
  // },
  // recommend: {
  //   type: Array,
  //   dafault: function () {
  //     return [];
  //   },
  // },
  // },
};
</script>

<style>
</style>
