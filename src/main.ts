import { createApp } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import pinia from './stores'

import App from './App.vue'
import router from './router'

// 需引入默认样式
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import 'element-plus/dist/index.css'
import 'uno.css'
import './assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Vue3DraggableResizable)

app.mount('#app')
