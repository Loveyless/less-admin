# less-admin

**初步的技术选型**

vite4 吃上热乎的
vue3
pinia
unocss 使用各种 icon 很方便
element-plus 也考虑用 antt design vue

# vite 插件

```js
// 自动引入 api 插件 https://github.com/antfu/unplugin-auto-import 记得 ts.config.json 文件引入声明文件: include 中引入 auto-imports.d.ts 要不然编辑器报错
import AutoImport from 'unplugin-auto-import/vite'

// 自动引入组件插件 https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'

// element-plus 自动引入组件插件 element-plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 图标库 https://github.com/antfu/unplugin-icons 图标地址 https://icon-sets.iconify.design https://github.com/iconify/iconify
import Icons from 'unplugin-icons/vite'
// 图标库自动引入 这个结合 unplugin-vue-components 使用
import IconsResolver from 'unplugin-icons/resolver'

// 原子化 css https://github.com/unocss/unocss
import Unocss from 'unocss/vite'

// 原子化 css 第一个是工具类预设，第二个是属性化模式支持，第三个是 icon 支持 还有别的预设
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// 使 vue 脚本设置语法支持 name 属性 https://github.com/chenxch/unplugin-vue-setup-extend-plus
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

// 打包时显示进度条 https://github.com/jeddygong/vite-plugin-progress
import progress from 'vite-plugin-progress'
```

## 规范
```
分支

master
develop
feature-xxx
hotfix-xxx


提交时

wip(xxx): xxx  新功能
fix(xxx): xxx  修复bug 可以@某个issues
合并前最后一次提交
feat(xxxx): xxx
发布新版本
release


提交信息规范

`feat`: 增加新功能
`fix`: 修复问题/BUG
`style`: 代码风格相关无影响运行结果的
`perf`: 优化/性能提升
`refactor`: 重构
`revert`: 撤销修改
`test`: 测试相关
`docs`: 文档/注释
`chore`: 依赖更新/脚手架配置修改等
`workflow`: 工作流改进
`ci`: 持续集成
`mod`: 不确定分类的修改
`wip`: 开发中
`types`: 类型修改
```