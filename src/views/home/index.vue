<template>
  <Slide>
    <div class="home-page">
     <el-row class="home-banner" :gutter="20">
        <el-col class="home-banner-left" :span="16">
            <el-carousel  height="400px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="http://demopicture.moguit.cn//blog/admin/jfif/2020/4/16/1587008142362.jfif" alt="测试博客" style="width: 100%; height: 100%; display: block; cursor: pointer;">
                </el-carousel-item>
            </el-carousel>
        </el-col>
        <el-col class="home-banner-right":span="8">
            <div style="height: 400px;">
              <ul>
                <li><img src="http://demopicture.moguit.cn//blog/admin/jpg/2020/4/15/1586946598174.jpg"></li>
                 <li><img src="http://demopicture.moguit.cn//blog/admin/jpg/2020/4/15/1586946598174.jpg"></li>
              </ul>
            </div>
        </el-col>
     </el-row>
    <el-row :gutter="20" class="home-card">
       <el-col :span="12">
            <home-card :labelId="id"></home-card>
       </el-col>
       <el-col :span="12">
             <home-card :labelId="id"></home-card>
       </el-col>
     </el-row>
      <el-row :gutter="20" class="home-card">
       <el-col :span="12">
             <home-card :labelId="id"></home-card>
       </el-col>
       <el-col :span="12">
             <home-card :labelId="id"></home-card>
       </el-col>
     </el-row>
      <el-row :gutter="20" class="home-card">
       <el-col :span="12">
             <home-card :labelId="id"></home-card>
       </el-col>
       <el-col :span="12">
             <home-card :labelId="id"></home-card>
       </el-col>
     </el-row>
  </div>
  </Slide>
</template>
<script>
import {Slide} from '@/layout/components'
import  HomeCard from '@/components/HomeCard';
export default {
     name: 'Home',
     components: {
        Slide,
        HomeCard  
     },
     data() {
        return {
            id:"12"
        }
     }
}
</script>
<style lang="less" scoped>
     .home-page{
         .home-banner{
             .home-banner-right{
                 & ul{
                     li:first-child{
                         margin-bottom: 20px;
                     }
                     & li {
                         height: 190px;
                         & img{
                             height: 100%;
                             border-radius: 3px;
                         }
                     }
                 }
             }
         }
         .home-card{
             margin-top: 30px;
         }
     }
</style>