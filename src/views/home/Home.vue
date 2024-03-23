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

export default {
  components: { WebsiteList },
  name: 'HomeView',
  setup() {
    // -搜索模块-
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

    // -自定义网站列表-
    const customList = [
      {
        title: '常用网站',
        desc: 'Common',
        children: [
          {
            name: 'bilibili',
            desc: '哔哩哔哩干杯',
            icon: 'https://www.bilibili.com/favicon.ico?v=1',
            website: 'https://www.bilibili.com'
          }
        ]
      },
      {
        title: '官方文档',
        desc: 'Document',
        children: [
          {
            name: 'Antd',
            desc: 'Antd Vue 文档',
            icon: '//aliyuncdn.antdv.com/favicon.ico',
            website: 'https://antdv.com/components/overview-cn'
          },
          {
            name: 'Element Plus',
            desc: 'Element Plus 文档',
            icon: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
            website:
              'https://element-plus.gitee.io/zh-CN/component/overview.html'
          },
          {
            name: 'Echarts',
            desc: '可视化图表库',
            icon: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20240226',
            website: 'https://echarts.apache.org/zh/index.html'
          }
        ]
      },
      {
        title: '开发工具',
        desc: 'Development Tool',
        children: [
          {
            name: 'Lodash',
            desc: 'Lodash 中文文档',
            icon: 'https://www.lodashjs.com/img/favicon.ico',
            website: 'https://www.lodashjs.com/'
          },
          {
            name: 'Vue',
            desc: 'Vue 文档',
            icon: 'https://cn.vuejs.org/logo.svg',
            website: 'https://cn.vuejs.org/'
          },
          {
            name: 'Vuex',
            desc: 'Vue.js的状态管理模式 + 库',
            icon: 'https://cn.vuejs.org/logo.svg',
            website: 'https://vuex.vuejs.org/zh/index.html'
          },
          {
            name: 'MDN',
            desc: 'MDN 文档',
            icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
            website: 'https://developer.mozilla.org/zh-CN/'
          },
          {
            name: 'Nodejs',
            desc: 'Nodejs v16.x 文档',
            icon: 'https://nodejs.org/static/images/favicons/favicon.png',
            website: 'https://nodejs.org/docs/latest-v16.x/api/index.html'
          }
        ]
      }
    ]
    return {
      formData,
      onSearch,
      customList
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 120px;
  text-align: center;
  .search-form {
    margin: 0 auto;
    width: 600px;
  }
  .custom-list {
    margin-bottom: 32px;
  }
}
</style>
