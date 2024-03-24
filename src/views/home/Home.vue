<template>
  <div class="home">
    <a-layout>
      <!-- todo: 后续加入导航进行锚点跳转 -->
      <!-- <a-layout-sider>Sider</a-layout-sider> -->
      <a-layout class="gen-scroll">
        <a-layout-header>
          <p class="time">{{ time }} {{ week }}</p>
          <SettingOutlined @click="openMessage" />
        </a-layout-header>
        <a-layout-content>
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
          <div
            v-for="(item, index) in customList"
            :key="index"
            class="custom-list"
          >
            <WebsiteList :WebsiteList="item"></WebsiteList>
          </div>
        </a-layout-content>
        <a-layout-footer>
          Author @Hong
          <a href="https://github.com/ZzzzzzzzHong" target="_brank"> github </a>
          |
          <a href="https://gitee.com/ZzzzHong" target="_brank">gitee</a>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import { message } from 'ant-design-vue'
import WebsiteList from './chlidren/WebsiteList.vue'
import customList from '@/config/websiteConfig'

export default {
  components: { WebsiteList },
  name: 'HomeView',
  setup() {
    // -- header --
    const weekArr = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ]
    const week = ref(weekArr[dayjs().format('d')])
    let time = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    // 更新时间
    setInterval(() => {
      time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
    }, 1000)

    const openMessage = () => {
      message.info('前面的区域，以后再来吧')
    }

    // -- content --
    // - 搜索模块 -
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
      time,
      week,
      openMessage,
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
  height: 100vh;
  overflow-y: auto;
  color: @light-text-mainColor;
  .ant-layout {
    height: 100%;
    font-size: 20px;
    .ant-layout-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(170, 187, 204);
      .time {
        font-size: 20px;
        font-weight: 400;
      }
      > span {
        cursor: pointer;
      }
    }
    .ant-layout-content {
      padding-top: 64px;
      .search-form {
        margin: 0 auto;
        width: 600px;
      }
      .custom-list {
        margin-bottom: 32px;
      }
    }
  }
}
</style>
