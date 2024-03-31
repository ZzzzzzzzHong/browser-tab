// state：放数据的地方
const state = {
  theme: localStorage.getItem('THEME') || 'light' // light or dark
}

// getters：理解为计算属性,用于简化仓库数据,让组件获取仓库的数据更加方便
const getters = {
  isDark: state => (state.theme === 'dark' ? true : false)
}

// mutations（同步）：修改state唯一手段
const mutations = {
  SET_THEME: (state, payload) => {
    state.theme = payload
    localStorage.setItem('THEME', payload)
    document.documentElement.setAttribute('data-theme', payload)
  }
}

// actions（异步）：书写业务逻辑跟处理异步
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
