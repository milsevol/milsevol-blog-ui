<template>
    <FullMain>
      <div class="category-page">
          <el-row>
              <el-col class="home-banner-left" :span="4">
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
              <el-col :span="4">
                   <ul>
                     <li>21212</li>
                   </ul>
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
import { FullMain } from '@/layout/components'
export default {
    name: 'Category',
     components: {
        FullMain  
     },
    data() {
      return {
        isCollapse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }]
      };
    },
    methods: {
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