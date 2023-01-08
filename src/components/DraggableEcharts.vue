<template>
  <Vue3DraggableResizable
    v-model:x="location.x"
    v-model:y="location.y"
    v-model:w="location.w"
    v-model:h="location.h"
    :init-w="initW"
    :init-h="initH"
    :parent="true"
  >
    <LEcharts ref="echartRef" :opsion="option" />
  </Vue3DraggableResizable>
</template>

<script lang='ts' setup>
import { throttle } from 'lodash-es'
import type { Ref } from 'vue'
// Vue3DraggableResizable文档 https://github.com/a7650/vue3-draggable-resizable/blob/main/docs/document_zh.md#props

interface Props {
  modelValue?: echarts.EChartsOption
  initW?: number
  initH?: number
  location?: {
    x: number
    y: number
    w: number
    h: number
  }
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  }),
  initW: 500,
  initH: 300,
  location: () => ({
    x: 0,
    y: 0,
    w: 500,
    h: 300,
  }),
})

// modelValue变为option
const option: Ref<echarts.EChartsOption> = computed(() => {
  return props.modelValue
})

const location: Ref<Props['location']> = computed(() => {
  return props.location
})
</script>

<style lang='less' scoped>

</style>
