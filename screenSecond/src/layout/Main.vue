<template>
  <div class="main">
    <!-- 头部 -->
    <div class="header">
      <div class="left-weather">多云转晴 21-29℃</div>
      <div class="title">{{ router.find(v => v.path === this.$route.path).name }}</div>
      <div class="right-date">
        <TimeClock></TimeClock>
      </div>
      <div class="subpage" v-for="item in router" :key="item.name">
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
    </div>
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
import TimeClock from './timeClock.vue'
import '../assets/css/fonts.css'
export default {
  components: { TimeClock },
  data() {
    return {
      totalTimeId: null,
      router: [
        {
          name: '管数专题',
          path: '/GSPart',
        },
        {
          name: '数据归集',
          path: '/DataMerger',
        },
        {
          name: '数据共享',
          path: '/DataShare',
        },
        {
          name: '数据治理',
          path: '/other',
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
.router-link-active {
  width: 100%;
  height: 100%;
  float: left;
  color: #46a3da;
  background: url('../assets/imgs/dataMerger/focusState.png') no-repeat center
    center;
  background-size: 100% 100%;
}
.main {
  height: 100%;
  background: url('../assets/imgs/GSPart/background.png') no-repeat center
    center;
  background-color: #0a1b38;
  background-size: 100% 100%;
}
.header {
  //background-color: rgb(255, 0, 0);
  position: fixed;
  top: -15px;
  height: 140px;
  width: 100%;
  background: url('../assets/imgs/dataMerger/header.png') no-repeat center
    center;
  background-size: 100% 55%;
  z-index: 1;
  .title {
    width: 220px;
    height: 46px;
    margin: 40px 0px 0px 45.5%;
    font-size: 46px;
    font-family: PangMenZhengDao;
    color: #ffffff;
    line-height: 46px;
    letter-spacing: 2px;
    background: linear-gradient(360deg, #36d4fa 0%, #d4f6ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .left-weather {
    position: fixed;
    left: 2%;
    top: 53px;
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
  }
  .right-date {
    position: fixed;
    left: 85%;
    top: 53px;
    font-size: 15px;
    font-weight: 400;
    color: #fff;
  }
  .subpage {
    position: fixed;
    top: 65px;
    width: 113px;
    height: 28px;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    vertical-align: middle;
    background: url('../assets/imgs/dataMerger/unfocusState.png') no-repeat
      center center;
    background-size: 100% 100%;
    &:nth-child(4) {
      margin: 0px 0px 0px 430px;
    }
    &:nth-child(5) {
      margin: 0px 0px 0px 561px;
    }
    &:nth-child(6) {
      margin: 0px 0px 0px 1241px;
    }
    &:nth-child(7) {
      margin: 0px 0px 0px 1371px;
    }
  }
}
.mymain {
  display: flex;
  height: 100%;
  padding: 125px 40px 40px;
}
.content {
  flex: 1;
  position: relative;
  z-index: 3;
}
</style>
