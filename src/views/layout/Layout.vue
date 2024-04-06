<template>
  <div class="layout">
    <a-layout class="gen-scroll">
      <a-layout-header>
        <LayoutHeader></LayoutHeader>
      </a-layout-header>
      <a-layout-content>
        <LayoutContent></LayoutContent>
      </a-layout-content>
      <a-layout-footer>
        <LayoutFooter></LayoutFooter>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutContent from '@/components/layout/LayoutContent.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'

export default {
  name: 'BaseLayout',
  components: { LayoutHeader, LayoutContent, LayoutFooter }
}
</script>

<style lang="less" scoped>
@import '../../style/variable.less';

.layout {
  height: 100vh;
  overflow-y: auto;
  background-color: @bg-color-content;
  .ant-layout {
    height: 100%;
  }
}
</style>
