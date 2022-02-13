<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "@/views/home/childComps/RecommendView.vue";
// 上面两个都是组件导入 放一起
import { getHomeMultidata } from "@/network/home";
import FeatureView from "@/views/home/childComps/FeatureView.vue";

// 呃呃就是方便导入一点 一行代码导入两个组件 在下面要注册一下
export default {
  components: { NavBar, HomeSwiper, RecommendView, FeatureView, FeatureView },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  name: "Home",
  created() {
    // 在组件创建好的时候调用
    getHomeMultidata()
      .then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(this.result);
    // 达咩 这样是不行的  因为promise是异步操作 啥叫异步操作 同步操作是主车道 异步操作是应急车道
    // 这个时候打印大概率是个空
  },
};
</script>

<style>
.center {
  color: #fff;
}
.nav-bar {
  background-color: var(--color-tint);
  /* 这里用的是base.css定义的CSS变量 用变量表示颜色为了方便修改 注意用法 因为路由会让首页显示在App.vue里 而base.css导入了App.vue 所以里面的变量能用 */
}
</style>
