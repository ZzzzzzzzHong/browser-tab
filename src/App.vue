<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('THEME') || 'light'
      )
    })
  }
}
</script>

<style lang="less">
#app {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background-color: #dfe6e9;
}
</style>
