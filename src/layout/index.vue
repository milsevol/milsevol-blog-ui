<template>
  <el-container class="layout-page">
    <el-header class="layout-header">
        <Header/>
    </el-header>
     <router-view></router-view>
     <el-footer class="layout-footer">
       <Foot/>
     </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { Header,Slide,Foot} from './components'
export default {
  name: 'Layout',
  components: {
    Header,
    Slide,
    Foot 
  },
  data() {
    return {
      showSlide: false
    }
  },
  created(){
    console.log('---',this.$router.meta)
  }
}
</script>

<style lang="less" scoped>
.layout-page{
  .layout-header{
    padding: 0px;
    height: 80px;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .layout-footer{
    padding: 0px;
  }
}
</style>