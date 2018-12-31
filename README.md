# v-form-layout

# 安裝

`npm i v-form-layout`

# 使用

```javascript
import VFormLayout from 'v-form-layout'

Vue.use(VFormLayout)
```

# API

| 属性          | 类型 | 描述 | 默认值 | 所有值 |
| --------------- | ----- | ---- | --------- | ------ |
| infoList        |  Array     |  内容数组    |   { title: 'xxx', content: 'xxxx'}     |  { content: String, title: String, cellRender: Vnode, attrs: Object(vue property), listeners: Object (vue $listeners)}      |
| titleAlign      |  String     | title对齐方式     |   left     |   left/center/right     |
| labelWidth      |  Number    |  title宽度    |  100      |        |
| contentOverflow |  Boolean     | 内容是否溢出省略     |   false     |    false/true    |
| perLineNum      |  Number     |  每行几个    |   2     |        |