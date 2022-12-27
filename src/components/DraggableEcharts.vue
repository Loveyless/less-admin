<template>
  <Vue3DraggableResizable
    v-model:x="zero.x"
    v-model:y="zero.y"
    v-model:w="zero.w"
    v-model:h="zero.h"
    v-model:active="active"
    :init-w="width"
    :init-h="height"
    :parent="true"
    :draggable="true"
    :resizable="true"
    @resizing="resizingHandle"
  >
    <LEcharts ref="echartRef" v-model="option" />
  </Vue3DraggableResizable>
</template>

<script lang='ts' setup>
import { throttle } from 'lodash-es'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {
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
      }
    },
  },
  // 默认最小长宽
  width: {
    type: Number,
    default: 500,
  },
  height: {
    type: Number,
    default: 300,
  },
  zero: {
    type: Object,
    default: () => {
      return {
        x: 100,
        y: 100,
        w: 300,
        h: 500,
      }
    },
  },
})

// modelValue变为option
let option: echarts.EChartsOption
watch(
  () => props.modelValue,
  (val) => {
    option = val
  },
  { immediate: true },
)
// 初始位置和组件长宽
let zero: { x: number; y: number; w: number; h: number }
watch(
  () => props.zero,
  (val) => {
    zero = val as { x: number; y: number; w: number; h: number }
  },
  { immediate: true },
)

// 托拽
const active = ref(false)

// echarts
const echartRef = ref<any>(null)
const resizingHandle = throttle(() => { // 节流触发resize函数
  echartRef.value?.resize()
  console.log(123)
}, 50)
</script>

<style lang='less' scoped>

</style>
