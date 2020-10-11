<template>
  <el-menu
    class="header-nav"
    router
    :default-active="$route.path"
    mode="horizontal"
    background-color="#000"
    active-text-color="#009688"
    text-color="#fff"
    @select="handleSelect"
  >
    <el-menu-item class="header-logo"><img :src="image.headerLogo"></img></el-menu-item>
    <el-menu-item
      :key="idx"
      :index="item.menuUrl"
      v-for="(item, idx) in menuDataList"
    >
      {{ item.menuName }}
    </el-menu-item>
  </el-menu>
</template>
<script>
import headerLogo from "@/assets/header-logo.jpg";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      menuDataList: [],
      image: {
        headerLogo: headerLogo,
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // const selectMenu = this.menuDataList.filter(item=> item.menuId === key)[0];
      // console.log('selectMenu',selectMenu);
      // this.$router.push({
      //   path:selectMenu.menuUrl
      // })
      // console.log(key, keyPath);
    },
    getMenuData() {
      this.menuDataList = [
        {
          menuId: "1",
          menuName: "首页",
          menuUrl: "/introduce",
        },
        {
          menuId: "2",
          menuName: "在线演示",
          menuUrl: "/test",
        },
        {
          menuId: "3",
          menuName: "我的博客",
          menuUrl: "/home",
        },
        {
          menuId: "4",
          menuName: "分类",
          menuUrl: "/category",
        },
        {
          menuId: "5",
          menuName: "关于",
          menuUrl: "/about",
        },
      ];
    },
  },
  created() {
    this.getMenuData();
  },
};
</script>
<style lang="less" scoped>
.header-nav {
  border-bottom-style: none !important;
  .header-logo {
    width: 30%;
    text-align: center;
    img {
      height: 60px;
      border-radius: 10px;
      position: relative;
      left: 12%;
    }
  }
  .el-menu-item {
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    padding: 0 40px;
  }
}
</style>