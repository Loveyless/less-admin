<template>
  <div ref="echartsRef" min-w="500px" w="full" min-h="300px" h="full" />
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const echartsRef = ref<HTMLElement | null>(null)

let myChart: echarts.ECharts
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(echartsRef.value as HTMLElement)

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(props.modelValue)
})

setInterval(() => {
  myChart?.resize()
}, 5000)

function resize() {
  myChart?.resize()
}

defineExpose({
  resize,
})
</script>

<style scoped>

</style>
