<template>
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LayoutContent'
}
</script>

<style lang="less" scoped>
.layout-content {
  box-sizing: border-box;
  padding: 32px;
}
</style>
