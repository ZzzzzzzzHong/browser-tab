// 按需引入antd组件
import {
  Button,
  Card,
  Form,
  Input,
  Layout,
  Radio,
  Switch
} from 'ant-design-vue'

const components = [Button, Card, Form, Input, Layout, Radio, Switch]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
