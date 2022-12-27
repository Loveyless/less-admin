<template>
  <!-- 布局容器 -->
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>

      <el-container>
        <el-aside>
          <el-scrollbar>
            <el-menu default-active="/home" router>
              <el-menu-item index="/home">
                <el-icon><i-carbon-home /></el-icon>
                <span>home</span>
              </el-menu-item>
              <el-sub-menu index="2">
                <template #title>
                  <el-icon><i-carbon-3d-cursor-alt /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item index="/echarts_custom">
                  echarts_custom
                </el-menu-item>
                <el-menu-item index="2-2">
                  item two
                </el-menu-item>
                <el-menu-item index="2-3">
                  item three
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import Header from './Header.vue'
const globalStore = GlobalStore()

const is = ref(true)

setInterval(() => {
  is.value ? (is.value = false) : (is.value = true)
}, 1000)
</script>

<style lang='less' scoped>
.el-container {
  width: 100%;
  height: 100%;

  .el-header {
    padding: 0;
    margin: 0;
  }

  .el-aside {
    width: auto;
    height: calc(100vh - 60px); // 60px is the height of the header
    overflow-x: hidden;
  }

  .el-menu {
    height: calc(100vh - 60px); // 60px is the height of the header
  }

  .el-main {
    padding: 0;
    margin: 0;
  }
}
</style>
