<template>
    <el-container class="slide-container">
        <el-main>
            <slot></slot>
        </el-main>
        <el-aside class="right-box" width="380px"> 
           <el-row class="slide-row">
             <el-col :span="24">
               <el-card class="box-card">
                  <h2 class="box-header">  <el-divider class="slide-header-divider" direction="vertical"></el-divider><span>关于</span></h2>
                  <div class="box-content">
                    <div class="indtroduce-img">
                      <img data-v-5954443c="" src="http://demopicture.moguit.cn//blog/admin/jpg/2020/4/15/1586946598174.jpg">
                    </div>
                    <div class="indtroduce-detail">
                      <div><i class="el-icon-user"><span class="icon-text">milsevol</span></i></div>
                      <div><i class="el-icon-office-building"><span class="icon-text">广东省-广州</span></i></div>
                      <div><i class="el-icon-message"><span class="icon-text">15013272917@163.com</span></i></div>
                      <div><i class="el-icon-chat-line-round"><span class="icon-text">wx1095673476</span></i></div>
                    </div>
                  </div>
                  <div class="box-footer">
                         <table style="width: 100%;text-align: center;">
                                <tbody>
                                    <tr>
                                        <td>
                                          <a href="">   <i class="el-icon-aim"><span class="icon-text">github</span></i></a>
                                        </td>
                                        <td>
                                          <a href="">   <i class="el-icon-bangzhu"><span class="icon-text">gitee</span></i></a>
                                        </td>
                                        <td>
                                          <a href="">   <i class="el-icon-sunset"><span class="icon-text">gitlab</span></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                 </table>
                  </div>
              </el-card>
             </el-col>
           </el-row>
            <el-row class="slide-row">
             <el-col :span="24">
               <el-card class="recommend-card box-card">
                  <h2 class="box-header">  <el-divider class="slide-header-divider" direction="vertical"></el-divider><span>推荐</span></h2>
                  <div class="box-content">
                        <ul>

                        <li><a href="https://www.yangqq.com/news/s/1069.html" title="兴趣支撑梦想，兴趣是支撑我自己前行的动力" target="_blank"><i><img src="https://www.yangqq.com/d/file/news/s/2020-04-02/b06f0385e0e4226794339fdd31419036.jpg"></i>
                          <p>兴趣支撑梦想，兴趣是支撑我自己前行的动力</p>
                          </a></li>



                        <li><a href="https://www.yangqq.com/news/s/1068.html" title="忙碌是自由活着的一种底气" target="_blank"><i><img src="https://www.yangqq.com/d/file/news/s/2020-03-29/8a11887bbac4c6bc07b32ebcfa77b2cc.png"></i>
                          <p>忙碌是自由活着的一种底气</p>
                          </a></li>



                        <li><a href="https://www.yangqq.com/news/s/1064.html" title="从互联网消失的那3年，都去哪儿了？" target="_blank"><i><img src="https://www.yangqq.com/d/file/news/s/2020-04-11/4e24ea022dc39d4a8ced0b0abccf2121.jpg"></i>
                          <p>从互联网消失的那3年，都去哪儿了？</p>
                          </a></li>



                        <li><a href="https://www.yangqq.com/jstt/web/1059.html" title="个人博客网站是否应该公安备案？" target="_blank"><i><img src="https://www.yangqq.com/d/file/jstt/web/2020-01-07/6b454162c988a6d55c58c3262f385356.png"></i>
                          <p>个人博客网站是否应该公安备案？</p>
                          </a></li>



                        <li><a href="https://www.yangqq.com/aliyun/1041.html" title="【全面分析】阿里云拼团2019年双十一活动——云服务器租用价格低至86元一年" target="_blank"><i><img src="https://www.yangqq.com/d/file/aliyun/2019-10-25/05f7fdbe898f09a5e042e90520c7e8cb.png"></i>
                          <p>【全面分析】阿里云拼团2019年双十一活动——云服务器租用价格低至86元一年</p>
                          </a></li>



                        <li><a href="https://www.yangqq.com/aliyun/1040.html" title="2019阿里云双11拼团活动：云服务器租用价格低至86元一年" target="_blank"><i><img src="https://www.yangqq.com/d/file/jstt/web/2019-10-24/d94790d429c093dafd755836b17c6ce2.png"></i>
                          <p>2019阿里云双11拼团活动：云服务器租用价格低至86元一年</p>
                          </a></li>



                        <li><a href="https://www.yangqq.com/aliyun/1039.html" title="2019阿里云双十一活动拼团官方最新链接_新用户1折购买服务器" target="_blank"><i><img src="https://www.yangqq.com/d/file/jstt/web/2019-10-24/f9d684f39ccdc41551796f52304930f7.png"></i>
                          <p>2019阿里云双十一活动拼团官方最新链接_新用户1折购买服务器</p>
                          </a></li>



                        <li><a href="https://www.yangqq.com/aliyun/1038.html" title="2019阿里云拼团活动应该如何找最新链接？" target="_blank"><i><img src="https://www.yangqq.com/d/file/aliyun/2019-10-24/213b8dbe593384f8aa2d9d2154b1e9b4.png"></i>
                          <p>2019阿里云拼团活动应该如何找最新链接？</p>
                          </a></li>


                      </ul>
                  </div>
              </el-card>
             </el-col>
           </el-row>
           <el-row class="slide-row">
             <el-col :span="24">
               <el-card class="rank-card box-card">
                  <h2 class="box-header">  <el-divider class="slide-header-divider" direction="vertical"></el-divider><span>点击排行</span></h2>
                  <div class="box-content">
                         <ul>
                      <li><i class="hot-bg">1</i><a href="https://www.yangqq.com/jstt/web/998.html" title="适合纯小白的个人博客搭建流程" target="_blank">适合纯小白的个人博客搭建流程</a></li>
                      <li><i class="hot-bg">2</i><a href="https://mb.yangqq.com/templates/807.html" title="html5个人博客模板《绅士》" target="_blank">html5个人博客模板《绅士》</a></li>
                      <li><i class="hot-bg">3</i><a href="https://mb.yangqq.com/templates/874.html" title="html5个人博客模板《simple》" target="_blank">html5个人博客模板《simple》</a></li>
                      <li><i>4</i><a href="https://mb.yangqq.com/templates/917.html" title="《今夕何夕》Html5响应式个人博客网站模板" target="_blank">《今夕何夕》Html5响应式个人博客网站模板</a></li>
                      <li><i>5</i><a href="https://mb.yangqq.com/templates/878.html" title="个人博客模板《show time》蓝色版" target="_blank">个人博客模板《show time》蓝色版</a></li>
                      <li><i>6</i><a href="https://mb.yangqq.com/templates/907.html" title="个人博客模板《tree》-响应式个人网站模板" target="_blank">个人博客模板《tree》-响应式个人网站模板</a></li>
                      <li><i>7</i><a href="https://www.yangqq.com/news/s/993.html" title="7年，一个80后女站长与阿里云携手创业的真实故事" target="_blank">7年，一个80后女站长与阿里云携手创业的真实故事</a></li>
                      <li><i>8</i><a href="https://www.yangqq.com/news/s/900.html" title="网易博客关闭，何不从此开始潇洒行走江湖！" target="_blank">网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
                      <li><i>9</i><a href="https://www.yangqq.com/news/s/993.html" title="7年，一个80后女站长与阿里云携手创业的真实故事" target="_blank">7年，一个80后女站长与阿里云携手创业的真实故事</a></li>
                           
                       </ul>
                  </div>
              </el-card>
             </el-col>
           </el-row>
       </el-aside>
    </el-container>
</template>
<script>
export default {
  name: 'Slide'
}
</script>

<style lang="less" scoped>
   .slide-container{
    margin-top: 80px;
    padding-left: 50px;
    padding-right: 50px;
    .right-box{
      padding: 20px;
      .slide-row{
        margin-bottom: 30px;
        .box-card{
          .box-header{
            font-size: 18px;
            margin-bottom: 12px;
            font-weight: normal;
            border-bottom-width: 1px;
            border-bottom-color: #ececec;
            border-bottom-style: solid;
            padding-bottom: 12px;
          }
          .box-content{
            margin-bottom: 20px;
            display: flex;
            flex-direction: row;
            .indtroduce-img{
                width: 110px;    
                height: 110px;  
                img{
                  width: 100%;
                  height: 100%;
                }        
            }
            .indtroduce-detail{
              margin-left: 20px;
              font-weight: normal;
              font-size: 14px;
              & div{
                margin-bottom: 5px;
              }
            }
          }
          .box-footer{
            height: 10px;
            padding-bottom:20px;
            a{
              color: #66696d;
            }
          }
        }
        .rank-card{
          .box-content{
            ul{
              width: 100%;
              li{
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    margin-bottom: 10px;
                    padding-left: 5px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    a{
                         text-decoration: none;
                          color: #333;
                       
                    }
                    &:nth-child(even) {
                        background: #f6f6f6;
                    }
                    i{
                        width: 12px;
                        display: inline-block;
                        text-align: center;
                        padding: 5px;
                        background-color: #7d7d7d;
                        line-height: 12px;
                        margin-right: 5px;
                        color: #fff;
                        border-radius: 12px;
                    }
                    .hot-bg{
                      background-color: coral;
                    }
              }

            }
          }
        }
        .recommend-card{
          ul{
            width: 100%;
            li{
              width: 100%;
              overflow: hidden;
              margin-bottom: 10px;
              height: 60px;
              a{
                  text-decoration: none;
                  color: #333;
                       
               }
              i{
                    width: 70px;
                    height: 60px;
                    line-height: 60px;
                    margin-right: 10px;
                    overflow: hidden;
                    display: block;
                    float: left;
                    img{
                          max-width: 100%;
                          vertical-align: middle;
                          display: inline-block;
                          -moz-transition: all .5s ease;
                          -webkit-transition: all .5s ease;
                          -ms-transition: all .5s ease;
                          -o-transition: all .5s ease;
                          transition: all .5s ease;
                          transition: all 0.5s;
                    }
              }
              p{
                    margin-top: 10px;
                    line-height: 20px;
                    max-height: 40px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>
