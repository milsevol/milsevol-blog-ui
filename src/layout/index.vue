<template>
  <el-container class="layout-page">
    <el-header class="layout-header">
         <Header/>
    </el-header>
    <el-container class="layout-container">
      <el-main>
        <router-view></router-view>
      </el-main>
      <Slide/>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { Header, Slide } from './components'
export default {
  name: 'Layout',
  components: {
    Header,
    Slide
  }
}
</script>

<style lang="less" scoped>
.layout-page{
  .layout-container{
    padding-left: 50px;
    padding-right: 50px;
    background-color: cadetblue;
  }
}
</style>