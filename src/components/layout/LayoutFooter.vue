<template>
  <div class="layout-footer">
    链接 @Hong
    <a href="https://github.com/ZzzzzzzzHong" target="_brank"> github </a>
    |
    <a href="https://gitee.com/ZzzzHong" target="_brank">gitee</a>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style lang="less" scoped>
@import '../../style/variable.less';

.layout-footer {
  height: 100%;
  text-align: center;
  background-color: @bg-color-footer;
  border-top: 1px solid @border-color;
  color: @text-color-main;
  line-height: 48px;
}
</style>
