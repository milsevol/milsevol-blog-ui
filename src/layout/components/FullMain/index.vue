<template>
    <el-container class="full-main">
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'FullMain'
}
</script>

<style lang="less" scoped>
  .full-main{
    margin-top: 80px;
    .el-main{
      padding: 0px;
    }
  }
</style>
