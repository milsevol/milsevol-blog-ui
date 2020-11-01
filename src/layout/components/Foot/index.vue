<template>
  <div class="copyright">
    copyright 2019-2020 milsevol<br /><a
      class="icp"
      target="_blank"
      href="https://beian.miit.gov.cn/"
      >粤ICP备2020106948号</a
    >
  </div>
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style lang="less" scoped>
.copyright {
  height: 120px;
  background-color: white;
  font-size: 14px;
  text-align: center;
  color: #888888;
  line-height: 28px;
  padding-top: 60px;
  .icp {
    font-size: 12px;
    color: #888888;
  }
}
</style>