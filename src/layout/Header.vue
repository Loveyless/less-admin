<template>
  <div class="wrapper" w="full" h="full" px="10" display="flex" items="center" justify="between">
    <h3 font="600">
      Less-admin
    </h3>
    <div>
      <el-button type="primary" plain @click="quit">
        退出登录
      </el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
const quit = () => {
  console.log('quit')
}
</script>

<style lang='less' scoped>
.wrapper {
  border-bottom: 1px solid #ebeef5;
}
</style>
