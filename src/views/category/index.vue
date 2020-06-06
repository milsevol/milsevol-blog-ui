<template>
    <FullMain>
      <div class="category-page">
          <el-row :gutter="20">
              <el-col v-loading="loading" class="home-banner-left" :span="3">
                  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                      <el-radio-button :label="false">展开</el-radio-button>
                      <el-radio-button :label="true">收起</el-radio-button>
                  </el-radio-group>
                  <side-bar :menuList="menuList"></side-bar>
              </el-col>
              <el-col class="category-box":span="5">
                <div class="category-list">
                   <ul>
                    <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                      <span>2020/03/05</span>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                      <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                      <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                     <li>
                      <a href="http://www.baidu.com">圣诞节福克斯的开放时间段</a>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="16">
                  <el-card class="box-card">
                     <div style="height:800px;backgroup-color:#000">

                     </div>
                  </el-card>
              </el-col>
          </el-row>        
      </div>
    </FullMain>
</template>

<style lang="less" scoped>
  .category-page{
    .home-banner-left{
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 150px;
        min-height: 400px;
        .el-menu-item{
          min-width: 0px;
        }
      }
    }
    .category-box{
      .category-list{
          border: solid;
          border-width: 1px;
          background-color: #fff;
          border-color: #e2e0e0b0;
          &::-webkit-scrollbar {
             width: 0 !important
          }
        ul{
          overflow: auto;
          height: 650px;
          li{
            color: #7dbcfc;
            height: 38px;
            line-height: 38px;
            font-size: 15px;
            a{
              margin-left: 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 66%;
              display: inline-block;
              color: #7b7878;
              font-family: "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
            }
            span{
                float: right;
                font-size: 10px;
                color: #9e9c9c;
                margin-right: 5px;
            }
          }
        }
      }
    }
  }

</style>

<script>
import { FullMain } from '@/layout/components';
import  SideBar from '@/components/SideBar';
import { getInfoLabelList } from '@/api/info/label';
export default {
    name: 'Category',
     components: {
        FullMain,
        SideBar 
     },
    data() {
      return {
        // 遮罩层
        loading: true,
        // 查询参数
        queryParams:[],
        isCollapse: true,
        menuList:[]
      };
    },
    created(){
      this.getList();
    },
    methods: {
      getList(){
        getInfoLabelList(this.queryParams).then(response => {
          console.log('--response--',response);
          this.menuList = response.menus;
          this.loading = false;
        });
      },
      handleOpen(key, keyPath) {
        this.drawer = true
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>