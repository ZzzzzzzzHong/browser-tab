<template>
  <div class="home">
    <a-form :model="formData" class="gen-form search-form">
      <a-form-item name="name">
        <a-input
          v-model:value="formData.searchKay"
          placeholder=""
          allowClear
          size="large"
          autocomplete="off"
          @keyup.enter="onSearch"
        >
          <template #prefix><SearchOutlined @click="onSearch" /></template>
        </a-input>
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
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import WebsiteList from './chlidren/WebsiteList.vue'

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

    const store = useStore()
    const customList = computed(() => store.state.app.websiteData)

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
  color: @text-color-main;
  margin-top: 32px;
  .search-form {
    margin: 0 auto;
    width: 600px;
    .ant-input-affix-wrapper {
      border-radius: 4px;
      line-height: 1.6;
    }
  }
  .custom-list {
    margin-bottom: 32px;
  }
}
</style>
