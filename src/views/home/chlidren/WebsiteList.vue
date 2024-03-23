<template>
  <div class="website-list">
    <div class="header">
      <TagsOutlined :style="{ 'font-size': '20px', 'margin-right': '8px' }" />
      <span class="gen-title"> {{ WebsiteList.title }} </span>
      <span class="gen-desc"> {{ WebsiteList.desc }} </span>
    </div>
    <div class="list">
      <WebsiteCard
        v-for="(item, index) in WebsiteList.children"
        :key="index"
        :WebsiteInfo="item"
      ></WebsiteCard>
    </div>
  </div>
</template>

<script>
import { TagsOutlined } from '@ant-design/icons-vue'
import WebsiteCard from '@/components/WebsiteCard.vue'

export default {
  name: 'WebsiteList',
  components: { WebsiteCard, TagsOutlined },
  props: {
    WebsiteList: {
      type: Object,
      default() {
        return {
          title: '',
          dese: '',
          children: [
            {
              name: '',
              desc: '',
              icon: '',
              website: ''
            }
          ]
        }
      }
    }
  },
  setup(a, b) {
    console.log(a, b)
    return {}
  }
}
</script>

<style lang="less" scoped>
.website-list {
  width: 1000px;
  margin: 0 auto;
  .header {
    text-align: left;
    margin-bottom: 16px;
    .gen-title {
      padding-bottom: 16px;
      margin-right: 8px;
    }
  }
  .list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 16px;
  }
}
</style>
