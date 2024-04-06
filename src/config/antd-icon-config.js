import {
  DownloadOutlined,
  GithubOutlined,
  SaveOutlined,
  SettingOutlined,
  SearchOutlined,
  TagsOutlined,
  UploadOutlined
} from '@ant-design/icons-vue'

const iconComponents = {
  DownloadOutlined,
  GithubOutlined,
  SaveOutlined,
  SettingOutlined,
  SearchOutlined,
  TagsOutlined,
  UploadOutlined
}

export default function (app) {
  Object.keys(iconComponents).forEach(iconName => {
    app.component(
      // 注册的名字
      iconName,
      // 组件的实现
      iconComponents[iconName]
    )
  })
}
