<template>
     <el-menu router  :default-active="$route.path" mode="horizontal" @select="handleSelect">
        <el-menu-item  :key="idx" :index="item.menuUrl" v-for="(item,idx) in menuDataList" > 
           {{item.menuName}}
        </el-menu-item>
      </el-menu>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuDataList:[],
    }
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
    getMenuData(){
      this.menuDataList =
            [{
        "menuId": "1",
        "menuName": "首页",
        "menuUrl": "/home"
      },
      {
        "menuId": "2",
        "menuName": "分类",
        "menuUrl": "/category"
      },
      {
        "menuId": "3",
        "menuName": "归档",
        "menuUrl": "/timeLine"
      },
      {
        "menuId": "4",
        "menuName": "留言",
        "menuUrl": "/message"
      },
      {
        "menuId": "5",
        "menuName": "关于",
        "menuUrl": "/about"
      }]
    }
  },
  created(){
    this.getMenuData();
  }
}
</script>
<style lang="less" scoped>

</style>