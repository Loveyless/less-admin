<template>
  <Vue3DraggableResizable
    v-model:x="zero.x"
    v-model:y="zero.y"
    v-model:w="zero.w"
    v-model:h="zero.h"
    v-model:active="active"
    :init-w="500"
    :init-h="300"
    :parent="true"
    :draggable="true"
    :resizable="true"
    @resize-end="changeResize"
  >
    <LEcharts ref="echartRef" v-model="option" resize="both" />
  </Vue3DraggableResizable>
</template>

<script lang='ts' setup>
const active = ref(false)
const zero = reactive({
  x: 100,
  y: 100,
  w: 100,
  h: 100,
})

const echartRef = ref<any>(null)

const option = ref({
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
})

function changeResize() {
  // echartRef.myChart.value.resize()
  console.log(echartRef.value.resize())

  console.log('changeResize')
}
</script>

<style lang='less' scoped>

</style>
