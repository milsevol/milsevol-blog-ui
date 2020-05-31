<template>
  <el-container class="layout-page">
    <el-header class="layout-header">
        <Header/>
    </el-header>
     <router-view></router-view>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { Header,Slide} from './components'
export default {
  name: 'Layout',
  components: {
    Header,
    Slide  
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
  }
}
</style>