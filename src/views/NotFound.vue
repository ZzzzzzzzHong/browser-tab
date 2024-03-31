<template>
  <div class="not-found">
    <a-result status="404" title="" sub-title="前方的区域以后再来探索吧">
      <template #extra>
        <div class="back" @click="router.push({ name: 'Index' })">
          <GithubOutlined />
          回到藏身处
        </div>
      </template>
    </a-result>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'NotFound',
  setup() {
    const router = useRouter()

    return { router }
  }
}
</script>

<style lang="less" scoped>
@import '../style/variable.less';

.not-found {
  color: @text-color-main;
  font-size: 16px;
  .back {
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: @text-color-secondary;
    }
  }
}
</style>
