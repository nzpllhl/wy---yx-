<template>
  <div>
    <h1>分类</h1>
    <footerTable></footerTable>
  </div>
</template>

<script>
import footerTable from "../common/ggtabr.vue";
export default {
  name: "footer-bar",
  data() {
    return {
      active: ""
    };
  },
  components: {
    footerTable
  }
};
</script>

<style lang="less" scoped>
</style>