<template>
  <div class="layout-header">
    <p class="time">{{ timeClock }}</p>
    <div class="control">
      <a-switch v-model:checked="isDark">
        <template #checkedChildren> 🌙 </template>
        <template #unCheckedChildren> ☀ </template>
      </a-switch>
      <SettingOutlined @click="openMessage" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
import { message } from 'ant-design-vue'

export default {
  name: 'LayoutHeader',
  setup() {
    const weekArr = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ]
    // 当前时间
    let timeClock = ref(
      dayjs().format('YYYY-MM-DD HH:mm:ss') + ' ' + weekArr[dayjs().format('d')]
    )
    setInterval(() => {
      timeClock.value = ` ${dayjs().format('YYYY-MM-DD HH:mm:ss')} ${
        weekArr[dayjs().format('d')]
      }`
    }, 1000)

    const store = useStore()
    const isDark = ref(store.getters['app/isDark'])
    watch(isDark, newV => {
      store.commit('app/SET_THEME', newV ? 'dark' : 'light')
    })

    const openMessage = () => {
      message.info({ key: 'info', content: '前方的区域以后再来探索吧' })
    }

    return {
      timeClock,
      isDark,
      openMessage
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/variable.less';

.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 @padding-y;
  background-color: @bg-color-header;
  color: @text-color-main;
  border-bottom: 1px solid @border-color;
  .time {
    font-size: 18px;
    font-weight: 400;
  }
  .control {
    display: flex;
    align-items: center;
    > span {
      font-size: 20px;
      margin-left: 16px;
      cursor: pointer;
    }
  }
}
</style>
