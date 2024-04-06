// 按需引入antd组件
import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  Layout,
  Radio,
  Result,
  Switch,
  Upload
} from 'ant-design-vue'

const components = [
  Button,
  Card,
  Drawer,
  Form,
  Input,
  Layout,
  Radio,
  Result,
  Switch,
  Upload
]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
