<template>
  <div class="layout-header">
    <p class="time">{{ time }} {{ week }}</p>
    <div class="control">
      <a-switch :checked="isDark">
        <template #checkedChildren> 亮 </template>
        <template #unCheckedChildren> 暗 </template>
      </a-switch>
      <SettingOutlined @click="openMessage" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
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
    const week = computed(() => weekArr[dayjs().format('d')])

    // 当前时间
    let time = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    setInterval(() => {
      time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
    }, 1000)

    // todo: 读取vuex的state值作为开关值，触发开关commit方法，修改state，存入浏览器本地缓存，注意模块划分
    const isDark = ref(false)
    const openMessage = () => {
      message.info('前面的区域，以后再来吧')
    }

    return {
      week,
      time,
      isDark,
      openMessage
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: rgb(170, 187, 204);
  .time {
    font-size: 20px;
    font-weight: 400;
  }
  .control {
    display: flex;
    align-items: center;
    > span {
      font-size: 24px;
      margin-left: 16px;
      cursor: pointer;
    }
  }
}
</style>
