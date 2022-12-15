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

## git钩子

git常用的两个钩子

```
pre-commit 它用于检查即将提交的快照
commit-msg 在提交通过前验证项目状态或提交信息
```



git

husky还是yorkie？

yorkie居然是尤雨溪的 但是我看了看好久不维护了

### husky

https://github.com/typicode/husky

https://typicode.github.io/husky/

```
安装
pnpm install husky -D

pnpm pkg set scripts.prepare="husky install"

pnpm run prepare

添加钩子
npx husky add .husky/pre-commit "lint:fix" 这里可以添加lint-staged(需要装好eslint stylelint)

git add .husky/pre-commit

添加commitlint 我安装到了全局 直接配置就行
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

安装 commitizen，如此一来可以快速使用 cz 或 git cz 命令进行启动。
npm install commitizen -D

```

### stylelint

less的默认配置

```
首先安装Stylelint和标准配置和stylelint-less包
npm install stylelint stylelint-config-standard stylelint-less --save-dev
然后安装此配置
npm install stylelint stylelint-config-recommended-less --save-dev

.stylelintrc中
{
  "extends": "stylelint-config-standard",
  "extends": "stylelint-config-recommended-less"
}
```

添加vue支持

```
npm install --save-dev postcss-html stylelint-config-recommended-vue
.stylelintrc中
{
    "extends": "stylelint-config-recommended-vue"
}
```

### vue3与eslint

https://my.oschina.net/u/3407699/blog/5517388

