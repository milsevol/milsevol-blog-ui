<template>
     <el-card class="home-card-components box-card" shadow="hover">
            <div slot="header" class="clearfix card-header">
                <span>{{infoLabel.title}}</span>
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
                                    {{firstInfo.infoTitle}}
                             </a>
                        </div>
                        <div>

                        </div>
                       
                    </el-col>
                </el-row>
                <el-row class="card-detail-box">
                  <el-col class="card-detail-box-col" :span="24">
                    <ul>
                        <li :key="item.id" v-for="(item,index) in infoList">
                            <a href="https://www.yangqq.com/jstt/web/1059.html" >
                                {{item.infoTitle}}
                            </a>
                            <span>{{item.createTime|dateSplit(0)}}</span>
                         </li>
                    </ul>
                  </el-col>
                </el-row>
               
            </div>
    </el-card>
</template>
<script>
import { getInfoLabel } from '@/api/info/label';
import { getInfoList } from '@/api/info/info';
export default {
  name:'HomeCard',
  data(){
    return {
        infoLabel:{},
        infoList:[],
        firstInfo:{},
        getInfoLabelForm:{},
        getInfoListForm:{}
    }
  },
  props:{
    labelId: {
      type: String,
      required: true
    }
  },
  created() {
     console.log('--labelId--',this.labelId);
     this.queryInfoLabel();
     this.queryInfoList();
  },
  methods: {
    queryInfoLabel(){
        getInfoLabel(this.getInfoLabelForm).then(response => {
          this.infoLabel = response;
        });
    },
    queryInfoList(){
        getInfoList(this.getInfoListForm).then(response => {
          this.infoList = response;
          this.firstInfo = this.infoList[0];
        });
    }
  }
}
</script>
<style lang="less" scoped>
        .home-card-components{
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
</style>