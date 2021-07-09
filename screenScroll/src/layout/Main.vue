<template>
  <div class="main">
    <div class="mymain">
      <div class="content">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/css/fonts.css'
export default {
  components: { },
  data() {
    return {
      totalTimeId: null,
      router: [
        {
          name: '上海国资国企监管大屏--国资党建',
          path: '/GAWParty',
        },
      ],
    }
  },
  destroyed() {
    clearInterval(this.totalTimeId)
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  background-color: #0a1b38;
  background-size: 100% 100%;
}
.mymain {
  display: flex;
  height: 100%;
  padding: 20px;
}
.content {
  flex: 1;
  position: relative;
  z-index: 3;
}
</style>
