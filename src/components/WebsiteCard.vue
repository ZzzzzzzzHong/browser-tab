<template>
  <div class="website-card" @click="openWebsite(WebsiteInfo.website)">
    <img :src="iconSrc" alt="" />
    <div>
      <p class="gen-title">{{ WebsiteInfo.name || 404 }}</p>
      <p class="gen-desc">{{ WebsiteInfo.desc || '-' }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'WebsiteCard',
  props: {
    WebsiteInfo: {
      type: Object,
      default: () => {
        return {
          name: '',
          desc: '',
          icon: '',
          website: ''
        }
      }
    }
  },
  setup(props) {
    const iconSrc = computed(() => {
      return props.WebsiteInfo.icon ? props.WebsiteInfo.icon : '/favicon.ico'
    })
    const openWebsite = website => {
      window.open(website)
    }

    return { iconSrc, openWebsite }
  }
}
</script>

<style lang="less" scoped>
@import '../style/variable.less';

.website-card {
  width: 132px;
  height: 40px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  text-align: left;
  cursor: pointer;
  background: #ecf0f1;
  box-sizing: initial;
  &:hover {
    box-shadow: 0 0 6px 2px #cccccc;
  }
  img {
    width: 28px;
    margin-right: 10px;
  }
  > div {
    overflow: hidden;
    flex-grow: 1;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; /* 使用省略号表示被隐藏的内容 */
      &.gen-title {
        margin-bottom: 4px;
        font-size: 14px;
      }
    }
  }
}
</style>
