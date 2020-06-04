<template>
    <FullMain>
      <div class="category-page">
          <el-row :gutter="20">
              <el-col v-loading="loading" class="home-banner-left" :span="3">
                  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                      <el-radio-button :label="false">展开</el-radio-button>
                      <el-radio-button :label="true">收起</el-radio-button>
                      </el-radio-group>
                  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                  <el-submenu index="1">
                      <template slot="title">
                      <i class="el-icon-location"></i>
                      <span slot="title">导航一</span>
                      </template>
                      <el-menu-item-group>
                      <span slot="title">分组一</span>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="1-4">
                      <span slot="title">选项4</span>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                      </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                      <i class="el-icon-document"></i>
                      <span slot="title">导航三</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                      <i class="el-icon-setting"></i>
                      <span slot="title">导航四</span>
                  </el-menu-item>
                  </el-menu>
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
import { getInfoLabelList } from '@/api/info/label';
export default {
    name: 'Category',
     components: {
        FullMain  
     },
    data() {
      return {
        // 遮罩层
        loading: true,
        // 查询参数
        queryParams:[],
        isCollapse: true,
      };
    },
    created(){
      this.getMenuList();
    },
    methods: {
      getMenuList(){
        getInfoLabelList(this.queryParams).then(response => {
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