import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 使用setup模式定义
export const GlobalStore = defineStore(
  'GlobalStore',
  () => {
    const menuConfig = ref({
      width: 200,
      collapsed: false,
    })

    return { menuConfig }
  },
  {
    persist: true,
  },
)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
