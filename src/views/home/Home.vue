<template>
  <div class="home">
    <a-form :model="formData" class="gen-form search-form">
      <a-form-item name="name">
        <a-input-search
          v-model:value="formData.searchKay"
          placeholder=""
          allowClear
          enter-button="嗖一下🚀"
          size="large"
          autocomplete="off"
          @search="onSearch"
        />
      </a-form-item>
      <a-form-item name="searchEngine">
        <a-radio-group v-model:value="formData.searchEngine">
          <a-radio value="Baidu">百度</a-radio>
          <a-radio value="Google">Google</a-radio>
          <a-radio value="Biying">必应</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
    <div v-for="(item, index) in customList" :key="index" class="custom-list">
      <WebsiteList :WebsiteList="item"></WebsiteList>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import WebsiteList from './chlidren/WebsiteList.vue'
import customList from '@/config/websiteConfig'

export default {
  components: { WebsiteList },
  name: 'HomeView',
  setup() {
    const formData = reactive({
      searchKay: '',
      searchEngine: 'Baidu'
    })
    const onSearch = () => {
      const { searchKay, searchEngine } = formData
      if (!searchKay) return
      switch (searchEngine) {
        case 'Baidu':
          window.open(`https://www.baidu.com/s?wd=${searchKay}`)
          break
        case 'Google':
          window.open(`https://www.google.com/search?q=${searchKay}`)
          break
        case 'Biying':
          window.open(`https://cn.bing.com/search?q=${searchKay}`)
          break
        default:
          break
      }
    }

    return {
      formData,
      onSearch,
      customList
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/variable.less';

.home {
  text-align: center;
  color: @light-text-mainColor;
  .search-form {
    margin: 0 auto;
    width: 600px;
  }
  .custom-list {
    margin-bottom: 32px;
  }
}
</style>
