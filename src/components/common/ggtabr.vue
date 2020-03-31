<template>
  <div>
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o" to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/CateList" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/CateList" badge="5">食物</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/CateList" badge="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/CateList" badge="20">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "ggtabr",
  data() {
    return {
      active: ""
    };
  }
};
</script>

<style lang="less" scoped>
</style>