<template>
    <FullMain>
      <div class="category-page">
          <el-row :gutter="20">
              <el-col v-loading="loading" class="home-banner-left" :span="3">
                  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                      <el-radio-button :label="false">展开</el-radio-button>
                      <el-radio-button :label="true">收起</el-radio-button>
                  </el-radio-group>
                  <side-bar @selectId="getSelectId" :menuList="menuList" :collapse="isCollapse"></side-bar>
              </el-col>
              <el-col class="category-box":span="5">
                <div class="category-list">
                   <ul>
                      <li v-for="(item,idx) in infoList" :key="item.id">
                        <!-- <a @click="showContent(item)" >{{item.infoTitle}}</a> -->
                          <el-link :underline="false"  @click="showContent(item)" type="primary">{{item.infoTitle}}</el-link>
                          <span>{{item.createTime|dateSplit(0)}}</span>
                      </li>
                  </ul>
                </div>
              </el-col>
              <el-col class="article-detail" :span="16">
                  <el-card class="box-card">
                     <div style="height:800px;backgroup-color:#000">
                       <div v-if="showItem.id" class="box-header">
                         <h2>{{showItem.infoTitle}}</h2>
                         <p>
                            作者:<span class="detail-tip">{{showItem.createUser}}</span> 
                            创建时间:<span class="detail-tip">{{showItem.createTime}}</span> 
                            最近修改时间:<span class="detail-tip">{{showItem.createTime}}</span>
                         </p>
                       </div>
                       <div class="box-body">

                       </div>
                     </div>
                  </el-card>
              </el-col>
          </el-row>        
      </div>
    </FullMain>
</template>

<script>
import { FullMain } from '@/layout/components';
import  SideBar from '@/components/SideBar';
import { getInfoLabelList } from '@/api/info/label';
import { getInfoList } from '@/api/info/info';
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
        infoList:[],
        getInfoListForm:{
          labelId:null,
        },
        isCollapse: true,
        menuList:[],
        showItem:{}
      };
    },
    created(){
      this.getList();
      this.getSelectId("12");
    },
    methods: {
      getList(){
        getInfoLabelList(this.queryParams).then(response => {
          this.menuList = response.menus;
          this.loading = false;
        });
      },
      getSelectId(id){
        this.getInfoListForm.labelId = id;
        getInfoList(this.getInfoListForm).then(response => {
          this.infoList = response;
        })
      },
      showContent(item){
        this.showItem = item;
      }
    },
    watch: {
      isCollapse(newValue,oldValue){
      }
    }
  }
</script>

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
              cursor: pointer;
            }
            span{
                width: 28%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                float: right;
                font-size: 10px;
                color: #9e9c9c;
                margin-right: 5px;
            }
          }
        }
      }
    }
    .article-detail{
      .box-card{
        .box-header{
          text-align: center;
          p{
            margin-top: 10px;
            color: #9a9898;
            font-size: 13px;
            .detail-tip{
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

</style>