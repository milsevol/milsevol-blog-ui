<template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
        <el-menu-item :index="item.id">
          <i v-if="item.level=='1'" class="el-icon-menu"></i>
          {{item.title}}
        </el-menu-item>
    </template>

    <el-submenu v-else :index="item.id">
      <template slot="title" >
        <i v-if="item.level=='1'" class="el-icon-menu"></i>
        {{item.title}}
      </template>

      <template v-for="child in item.children">
        <side-bar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.id"/>
        <el-menu-item v-else :key="child.id" :index="child.id">
          {{child.title}}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>