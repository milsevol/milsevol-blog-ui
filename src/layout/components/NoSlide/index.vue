<template>
    <el-container class="no-slide-container">
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'NoSlide'
}
</script>

<style lang="less" scoped>
  .no-slide-container{
    padding-left: 50px;
    padding-right: 50px;
  }
</style>
