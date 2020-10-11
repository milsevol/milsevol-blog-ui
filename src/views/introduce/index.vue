<template>
  <FullMain>
    <div class="introduce-page">
      <el-carousel v-if="imge.bannerList" height="600px">
        <el-carousel-item v-for="item in imge.bannerList" :key="item.id">
          <img
            style="width: 100%; height: 100%; display: block; cursor: pointer"
            :src="item.url"
          />
        </el-carousel-item>
      </el-carousel>
      <div class="card-row">
        <div class="card-box">
          <div class="card">
            <div class="card-header header1"><h1>功能特性</h1></div>
            <div class="card-body">
              <ul>
                <li>完善的微信公众号管理</li>
                <li>支持小程序基础开发</li>
                <li>多方式的消息推送</li>
                <li>活动运营：抽奖、竞猜、任务</li>
                <li>客户分组、人物分群</li>
                <li>分布式的任务调度系统</li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-header header2"><h1>技术选型</h1></div>
            <div class="card-body">
              <ul>
                <li>SpringCloud微服务</li>
                <li>vue,element-ui前后端分离</li>
                <li>Nacos+OpenFeign+SpringCloudGateway</li>
                <li>任务调度系统xxl-job</li>
                <li>微信开发Java SDK：WxJava</li>
                <li>mysql主从复制、读写分离</li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-header header3">
              <h1>便捷开发</h1>
            </div>
            <div class="card-body">
              <ul>
                <li>完善的微信公众号管理</li>
                <li>支持小程序基础开发</li>
                <li>多方式的消息推送</li>
                <li>活动运营，抽奖、竞猜、任务</li>
                <li>客户分组、人物分群</li>
                <li>优秀的任务调度系统</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-row scene-intorduce">
        <div class="intorduce-text">
          <p class="title-tip">应用场景</p>
          <div class="title">多重应用场景</br>高效提升您的网站运营能力</div>
          <div class="content">微信公众号 小程序 回复管理 素材管理 自定义二维码 <br> 消息推送 定时批量 活动抽奖 人物分群等</div>
        </div>
        <div class="intorduce-img">
            <img :src="imge.detail2">
        </div>
      </div>
        <div class="detail-row sys-intorduce">
        <div class="intorduce-img">
          <img :src="imge.detail1">
        </div>
         <div class="intorduce-text">
          <p class="title-tip">便捷二次开发</p>
          <div class="title">简单好用的技术栈</br>方便快捷地实现自己所需功能</div>
          <div class="content">SpringCloud微服务 vue前后端分离 SpringCloudGateway网关<br> Nacos注册中心 支持熔断和限流 xxl-job分布式调度系统
          <br> mysql主从复制、读写分离 elk日志收集
  </div>
        </div>
      </div>
      <div class="qrCode">
        <img :src="imge.qrCode" />
      </div>
    </div>
  </FullMain>
</template>

<script>
import { FullMain } from "@/layout/components";
import banner1 from "@/assets/image/introduce/banner1.jpg";
import banner2 from "@/assets/image/introduce/banner2.jpg";
import banner3 from "@/assets/image/introduce/banner3.jpg";
import banner4 from "@/assets/image/introduce/banner4.jpg";
import detail1 from "@/assets/image/introduce/detail1.png";
import detail2 from "@/assets/image/introduce/detail2.png";
import qrCodeImg from "@/assets/image/introduce/qrCode.png";
export default {
  name: "Introduce",
  components: {
    FullMain,
  },
  data() {
    return {
      imge: {
        bannerList: [
          { id: "1", url: banner1 },
          { id: "2", url: banner2 },
          { id: "3", url: banner3 },
          { id: "4", url: banner4 },
        ],
        detail1: detail1,
        detail2: detail2,
        qrCode: qrCodeImg,
      },
    };
  },
  created() {},
  methods: {},
  watch: {},
};
</script>

<style lang="less" scoped>
.introduce-page {
  .card-row {
    width: 100%;
    height: 310px;
    display: flex;
    padding: 50px 0px;
    .card-box {
      width: 85%;
      display: flex;
      margin: 0 auto;
      .card {
        background-color: #ffffff;
        .header1 {
          background-image: url("./assets/header1.png");
        }
        .header2 {
          background-image: url("./assets/header2.png");
        }
        .header3 {
          background-image: url("./assets/header3.png");
        }
        .card-header {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 200;
          }
        }
        .card-body {
          padding: 10px;

          ul {
            li {
              &:before {
                display: inline-block;
                content: "";
                width: 8px;
                height: 8px;
                background-color: #a9a9a96e;
                border-radius: 8px;
                margin-right: 8px;
                margin-bottom: 1px;
              }
              font-size: 16px;
              line-height: 28px;
            }
          }
        }
      }
      & > div {
        width: 33.3%;
        margin-left: 30px;
      }
    }
  }
  .detail-row {
    height: 380px;
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    padding-top: 80px;
    .intorduce-text {
      width: 50%;
      .title-tip {
        font-size: 16px;
        color: rgb(0, 150, 136);
        line-height: 1;
        margin-bottom: 10px;
      }
      .title {
        font-size: 36px;
        color: #0b1531;
        font-weight: 500;
        letter-spacing: 1.5px;
        position: relative;
        padding-bottom: 25px;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 6px;
          background-color: rgb(0, 150, 136);
          border-radius: 3px;
        }
      }
      .content {
        margin-top: 16px;
        width: 470px;
        font-size: 16px;
        line-height: 2;
        color: #6b7799;
      }
    }
    .intorduce-img {
      width: 50%;
    }
  }
  .scene-intorduce {
    background-color: #fff;
    .intorduce-text {
      padding-left: 150px;
    }
    .intorduce-img {
      img {
        height: 280px;
      }
    }
  }
  .sys-intorduce {
    background-color: #f5f9ff;
    .intorduce-text {
      padding-left: 0px;
    }
    .intorduce-img {
      width: 50%;
      padding-left: 150px;
      img {
        height: 250px;
      }
    }
  }
  .qrCode {
    width: 138px;
    height: 172px;
    position: fixed;
    top: 20%;
    right: 40px;
    z-index: 98;
  }
}
</style>