<template>
<div>
  <el-menu
    class="header-nav"
    :default-active="activeMenu"
    mode="horizontal"
    background-color="#000"
    active-text-color="#009688"
    text-color="#fff"
    @select="handleSelect"
  >
    <el-menu-item index="logo" class="header-logo">
      <img :src="image.logo"></img>
        <span>小米林</span>
      </el-menu-item>
    <el-menu-item index="index.html">首页</el-menu-item>
    <el-submenu index="demo">
      <template slot="title"><span>在线演示</span></template>
      <el-menu-item index="admin"><a style="color:#ffffff" href="/milsevol-admin" target="_blank">后台入口</a></el-menu-item>
      <el-menu-item index="mp">公众号</el-menu-item>
    </el-submenu>
    <el-menu-item index="home">我的博客</el-menu-item>
    <el-menu-item index="about">关于</el-menu-item>
  </el-menu>
  </div>
</template>
<script>
import logo from "@/assets/logo.jpg";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      menuDataList: [],
      image: {
        logo: logo,
      },
      activeMenu: "index.html",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeMenu = key;
      if (key === "index.html" || key === "about") {
        let router = "/" + key;
        if (router !== this.$router.history.current.path) {
          this.$router.push({
            path: router,
          });
        }
      }
      if (key === "home") {
        this.$notify({
          title: "抱歉",
          message: "无权限查看",
        });
      }

      if (key === "mp") {
        this.$alert(
          "<div><img style='height:200px' src='qrCode.jpg'/> <p>扫描测试二维码可快速体验相关功能</p></div></div>",
          "测试公众号二维码",
          {
            dangerouslyUseHTMLString: true,
            center: true,
          }
        );
      }
      //console.log(key, keyPath);
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
      border-radius: 60px;
      position: relative;
      left: 12%;
    }
    span{
       position: relative;
       left: 20%;
       font-size: 28px;
    }
  }
  .el-menu-item {
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    padding: 0 40px;
  }
  .el-submenu {
    height: 80px;
    line-height: 80px;
    & > div {
      height: 80px;
      line-height: 80px;
    }
    .el-submenu__title {
      span {
        height: 80px;
        line-height: 80px;
        font-size: 16px;
      }
    }
  }
}
</style>