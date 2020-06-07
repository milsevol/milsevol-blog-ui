<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :collapse="collapse"
        @open="handleOpen"
        @select="handleSelect">
      <side-bar-item v-for="menu in menuList" :key="menu.id" :item="menu" />
    </el-menu>
  </el-scrollbar>
  </div>
</template>
<script>
import SideBarItem from '@/components/SideBar/SideBarItem';
export default {
  name:'SideBar',
  data(){
    return {

    }
  },
  components: { SideBarItem },
  props:{
    menuList: {
      type: Array,
      required: true
    },
    collapse: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleOpen(key,keyPath){
      console.log(key);
    },
    handleSelect(key){
      this.$emit('selectId',key)
    }
  }
}
</script>
<style lang="less">
  .sidebar-container {
    transition: width 0.28s;
    height: 100%;
    font-size: 0px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
 
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }
    .el-scrollbar {
      height: 100%;
    }
    .scrollbar-wrapper {
      overflow-x: hidden!important;
      .el-scrollbar__view {
        height: 100%;
      }
    }
    .el-scrollbar__bar.is-vertical{
      right: 0px;
    }
    .is-horizontal {
      display: none;
    }
    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }
    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }
  }
</style>