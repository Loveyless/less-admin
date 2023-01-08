<template>
  <div ref="echartsRef" min-w="150px" w="full" min-h="80px" h="full" />
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import resizeObserver from '@/utils/resizeObserver'

const props = defineProps({
  opsion: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const echartsRef = ref<HTMLElement | null>(null)

let myChart: echarts.ECharts

watchEffect(() => {
  myChart = echarts.init(echartsRef.value as HTMLElement)
  myChart.setOption(props.opsion)
}, {
  flush: 'post', // 使侦听器延迟到组件渲染之后再执行
})

// 监听元素大小变化
onMounted(() => {
  resizeObserver(echartsRef.value as HTMLElement, myChart?.resize)
})
</script>

<style scoped>

</style>
