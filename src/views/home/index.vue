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
        <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix card-header">
                <span>spring-boot</span>
                <el-button class="more-button" style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="card-detail">
                <el-row :gutter="20" class="card-detail-top">
                    <el-col :span="12">
                        <img src="https://www.yangqq.com/d/file/news/s/2020-04-02/b06f0385e0e4226794339fdd31419036.jpg">
                    </el-col>
                    <el-col class="card-detail-top-right" :span="12">
                        <div> 
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                    33个jQuery与CSS3实现的绚丽鼠标悬停效果
                             </a>
                        </div>
                        <div>

                        </div>
                       
                    </el-col>
                </el-row>
                <el-row class="card-detail-box">
                  <el-col class="card-detail-box-col" :span="24">
                    <ul>
                        <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                为什么没有人使用CSS3的border-image 属性
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 狂拽酷炫吊炸天！ 纯CSS绘制《辛普森一家》人物头像
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 WordPress教程第4课：WordPress 基础设置
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                WordPress教程第6课：WordPress 相关资源站点推荐
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                             <span>2020-04-06</span>
                         </li>
                    </ul>
                  </el-col>
                </el-row>
               
            </div>
         </el-card>
       </el-col>
         <el-col :span="12">
        <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix card-header">
                <span>spring-cloud</span>
                <el-button class="more-button" style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="card-detail">
                <el-row :gutter="20" class="card-detail-top">
                    <el-col :span="12">
                        <img src="https://www.yangqq.com/d/file/news/s/2020-03-29/8a11887bbac4c6bc07b32ebcfa77b2cc.png">
                    </el-col>
                    <el-col class="card-detail-top-right" :span="12">
                        <div> 
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                    33个jQuery与CSS3实现的绚丽鼠标悬停效果
                             </a>
                        </div>
                        <div>

                        </div>
                       
                    </el-col>
                </el-row>
                <el-row class="card-detail-box">
                  <el-col class="card-detail-box-col" :span="24">
                    <ul>
                        <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                为什么没有人使用CSS3的border-image 属性
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 狂拽酷炫吊炸天！ 纯CSS绘制《辛普森一家》人物头像
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 WordPress教程第4课：WordPress 基础设置
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                WordPress教程第6课：WordPress 相关资源站点推荐
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                             <span>2020-04-06</span>
                         </li>
                    </ul>
                  </el-col>
                </el-row>
               
            </div>
         </el-card>
       </el-col>
     </el-row>
       <el-row :gutter="20" class="home-card">
       <el-col :span="12">
        <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix card-header">
                <span>消息队列</span>
                <el-button class="more-button" style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="card-detail">
                <el-row :gutter="20" class="card-detail-top">
                    <el-col :span="12">
                        <img src="http://demopicture.moguit.cn//blog/admin/jpg/2020/4/15/1586946618443.jpg">
                    </el-col>
                    <el-col class="card-detail-top-right" :span="12">
                        <div> 
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                    33个jQuery与CSS3实现的绚丽鼠标悬停效果
                             </a>
                        </div>
                        <div>

                        </div>
                       
                    </el-col>
                </el-row>
                <el-row class="card-detail-box">
                  <el-col class="card-detail-box-col" :span="24">
                    <ul>
                        <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                为什么没有人使用CSS3的border-image 属性
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 狂拽酷炫吊炸天！ 纯CSS绘制《辛普森一家》人物头像
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 WordPress教程第4课：WordPress 基础设置
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                WordPress教程第6课：WordPress 相关资源站点推荐
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                             <span>2020-04-06</span>
                         </li>
                    </ul>
                  </el-col>
                </el-row>
               
            </div>
         </el-card>
       </el-col>
         <el-col :span="12">
        <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix card-header">
                <span>缓存服务器</span>
                <el-button class="more-button" style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="card-detail">
                <el-row :gutter="20" class="card-detail-top">
                    <el-col :span="12">
                        <img src="https://www.yangqq.com/d/file/news/s/2020-04-11/4e24ea022dc39d4a8ced0b0abccf2121.jpg">
                    </el-col>
                    <el-col class="card-detail-top-right" :span="12">
                        <div> 
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                    33个jQuery与CSS3实现的绚丽鼠标悬停效果
                             </a>
                        </div>
                        <div>

                        </div>
                       
                    </el-col>
                </el-row>
                <el-row class="card-detail-box">
                  <el-col class="card-detail-box-col" :span="24">
                    <ul>
                        <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                为什么没有人使用CSS3的border-image 属性
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 狂拽酷炫吊炸天！ 纯CSS绘制《辛普森一家》人物头像
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 WordPress教程第4课：WordPress 基础设置
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                WordPress教程第6课：WordPress 相关资源站点推荐
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                             <span>2020-04-06</span>
                         </li>
                    </ul>
                  </el-col>
                </el-row>
               
            </div>
         </el-card>
       </el-col>
     </el-row>
       <el-row :gutter="20" class="home-card">
       <el-col :span="12">
        <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix card-header">
                <span>数据库</span>
                <el-button class="more-button" style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="card-detail">
                <el-row :gutter="20" class="card-detail-top">
                    <el-col :span="12">
                        <img src="http://demopicture.moguit.cn//blog/admin/jpg/2020/4/15/1586946598174.jpg">
                    </el-col>
                    <el-col class="card-detail-top-right" :span="12">
                        <div> 
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                    33个jQuery与CSS3实现的绚丽鼠标悬停效果
                             </a>
                        </div>
                        <div>

                        </div>
                       
                    </el-col>
                </el-row>
                <el-row class="card-detail-box">
                  <el-col class="card-detail-box-col" :span="24">
                    <ul>
                        <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                为什么没有人使用CSS3的border-image 属性
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 狂拽酷炫吊炸天！ 纯CSS绘制《辛普森一家》人物头像
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 WordPress教程第4课：WordPress 基础设置
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                WordPress教程第6课：WordPress 相关资源站点推荐
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                             <span>2020-04-06</span>
                         </li>
                    </ul>
                  </el-col>
                </el-row>
               
            </div>
         </el-card>
       </el-col>
         <el-col :span="12">
        <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix card-header">
                <span>linux</span>
                <el-button class="more-button" style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="card-detail">
                <el-row :gutter="20" class="card-detail-top">
                    <el-col :span="12">
                        <img src="http://demopicture.moguit.cn//blog/admin/jpg/2020/4/15/1586946598174.jpg">
                    </el-col>
                    <el-col class="card-detail-top-right" :span="12">
                        <div> 
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                    33个jQuery与CSS3实现的绚丽鼠标悬停效果
                             </a>
                        </div>
                        <div>

                        </div>
                       
                    </el-col>
                </el-row>
                <el-row class="card-detail-box">
                  <el-col class="card-detail-box-col" :span="24">
                    <ul>
                        <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                为什么没有人使用CSS3的border-image 属性
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 狂拽酷炫吊炸天！ 纯CSS绘制《辛普森一家》人物头像
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                 WordPress教程第4课：WordPress 基础设置
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                WordPress教程第6课：WordPress 相关资源站点推荐
                            </a>
                            <span>2020-04-06</span>
                         </li>
                           <li>
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                个人博客网站是否应该公安备案？
                            </a>
                             <span>2020-04-06</span>
                         </li>
                    </ul>
                  </el-col>
                </el-row>
               
            </div>
         </el-card>
       </el-col>
     </el-row>
  </div>
  </Slide>
</template>
<script>
import {Slide} from '@/layout/components'
export default {
     name: 'Home',
     components: {
        Slide  
     },
     data() {
        return {
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
             .card-header{
                 span{
                    font-size: 20px;
                    color: #00a67c;
                    opacity: .9;
                 }
                 .more-button{
                    color: #7b7878;
                    font-family: "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
                 }
              
             }
             .card-detail{
                .card-detail-top {
                    margin-left: 0px;
                    margin-right: 0px;
                    padding-bottom: 15px;
                    margin-bottom: 15px;
                    border-bottom-style: solid;
                    border-block-start-width: 1px;
                    border-bottom-width: 1px;
                    border-bottom-color: #e6e6e6;
                    .card-detail-top-right{
                       & a{
                           color: #333;
                           font-size: 20px;
                           height: 1.5;
                       }
                      
                    }
                  
                }
                .card-detail-box{
                    .card-detail-box-col{
                        ul{
                            li{
                                display: block;
                                height: 30px;
                                a{
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    width: 80%;
                                    display: inline-block;
                                    color: #7b7878;
                                    font-family: "Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
                                }
                                span{
                                    font-size: 12px;
                                    float: right;
                                    color: #7b7878;
                                    font-family: "Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
                                }
                            }
                        }
                    }
                }
             }
         }
     }
</style>