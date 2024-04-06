<template>
  <div class="layout-header">
    <div class="header">
      <p class="time">{{ timeClock }}</p>
      <div class="control">
        <a-switch v-model:checked="isDark">
          <template #checkedChildren> 🌙 </template>
          <template #unCheckedChildren> ☀ </template>
        </a-switch>
        <SettingOutlined @click="drawer.init()" />
      </div>
    </div>
    <HeaderDrawer ref="drawer"></HeaderDrawer>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
import HeaderDrawer from './HeaderDrawer.vue'

export default {
  components: { HeaderDrawer },
  name: 'LayoutHeader',
  setup() {
    const drawer = ref()

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

    return {
      drawer,
      timeClock,
      isDark
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/variable.less';

.layout-header {
  height: @header-height;
  line-height: @header-height;
  align-items: center;
  padding: 0 @padding-y;
  background-color: @bg-color-header;
  color: @text-color-main;
  border-bottom: 1px solid @border-color;
  .header {
    display: flex;
    justify-content: space-between;
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
}
</style>
