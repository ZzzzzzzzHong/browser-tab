<template>
  <div class="drawer" ref="drawerContainer">
    <a-drawer
      v-model:open="drawerShow"
      title="网站卡片配置"
      placement="right"
      :getContainer="() => drawerContainer"
      @close="handleClose"
    >
      <template #extra>
        <div class="button-group">
          <a-button type="link" danger @click="resetConfig">重置配置</a-button>
          <a-button type="link" @click="downloadConfig" class="download">
            <template #icon><DownloadOutlined /></template>
            下载配置
          </a-button>
        </div>
      </template>
      <div class="upload">
        <a-upload-dragger
          v-model:fileList="file.list"
          name="file"
          accept=".json"
          :maxCount="1"
          :beforeUpload="handleBeforeUpload"
        >
          <p class="ant-upload-drag-icon"><UploadOutlined /></p>
          <p class="ant-upload-text">点击上传或拖拽到此上传</p>
          <p class="ant-upload-hint">请上传Json格式文件</p>
        </a-upload-dragger>
        <div class="save">
          <a-button type="link" @click="save">
            <template #icon><SaveOutlined /></template>
            保存
          </a-button>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
import websiteConfig from '@/config/websiteConfig'

export default {
  name: 'HeaderDrawer',
  setup() {
    const store = useStore()
    let drawerContainer = ref()

    let drawerShow = ref(false)
    const init = () => {
      drawerShow.value = true
    }
    const handleClose = () => {
      file.list = []
      file.currentFileData = ''
    }

    const downloadConfig = () => {
      const config = store.state.app.websiteData
      const options = { type: 'application/json' }
      // 创建blob对象
      const blob = new Blob([JSON.stringify(config, null, 2)], options)
      // 转化为URL对象
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'config.json'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
    const resetConfig = () => {
      store.commit('app/SET_WEBSITECONFIG', JSON.stringify(websiteConfig))
    }

    const file = reactive({
      list: [], // 文件列表
      currentFileData: '' // 当前文件配置
    })
    const handleBeforeUpload = f => {
      const reader = new FileReader()
      reader.readAsText(f, 'utf-8')
      reader.onload = function (e) {
        file.currentFileData = e.target.result
      }
      // 停止上传，因为已经读取了文件
      return false
    }
    const save = () => {
      if (!file.list.length) return message.info('暂无可用配置')
      store.commit('app/SET_WEBSITECONFIG', file.currentFileData)
    }

    return {
      drawerContainer,
      drawerShow,
      init,
      handleClose,
      downloadConfig,
      resetConfig,
      file,
      handleBeforeUpload,
      save
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/variable.less';

.drawer {
  ::v-deep .ant-drawer-content-wrapper {
    .ant-drawer-wrapper-body {
      .ant-drawer-header {
        padding: 0 16px;
        line-height: @header-height;
        .button-group {
          .ant-btn {
            padding: 4px 8px;
            &.download > .anticon {
              margin-right: -4px;
            }
          }
        }
      }
      .ant-drawer-body {
        .upload {
          height: 150px;
          .save {
            display: flex;
            justify-content: flex-end;
            .ant-btn {
              padding: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
