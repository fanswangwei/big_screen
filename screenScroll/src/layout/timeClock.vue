<!--
 * @Author: your name
 * @Date: 2020-07-08 17:38:25
 * @LastEditTime: 2020-07-11 22:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MH\src\components\citySigns\citySigns.vue
-->
<template>
  <div class="time-warp">
    <div id="txt1" class="c-fff">{{ date }}</div>
    <div id="txt" class="c-fff">{{ weekNow }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      oTime: '',
    }
  },
  created() {
    this.loadTime()
  },
  methods: {
    loadTime() {
      this.time()
      setInterval(() => {
        this.time()
      }, 500)
    },
    time() {
      let today = new Date()
      // let h = today.getHours()
      // let m = today.getMinutes()
      // let s = today.getSeconds()
      let weekToday = today.getDay()
      let yearn = today.getFullYear()
      let monthn = today.getMonth() + 1
      let jintian = today.getDate()
      let weekList = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      weekToday = weekList[weekToday]

      if (monthn < 10) {
        monthn = '0' + monthn
      }
      if (jintian < 10) {
        jintian = '0' + jintian
      }
      this.date = yearn + '年' + monthn + '月' + jintian + '日'
      // console.log(this.date)
      // m = this.checkTime(m)
      // s = this.checkTime(s)
      this.weekNow = weekToday
      // console.log(this.oTime)
    },
    // checkTime(i) {
    //   if (i < 10) {
    //     i = '0' + i
    //   }
    //   return i
    // },
  },
}
</script>
<style lang="less">
#txt1 {
  margin-right: 20px;
  margin-left: 60px;
}

.time-warp {
  // height: 30px;
  line-height: 22px;
  font-size: 15px;
  display: flex;
}
// .oMap{
//   ._width(1820);
//   ._height(1670);
//   background: url(./oMap.png) center no-repeat;
//   ._bgSize(3332,1670);
//   overflow: hidden;
// }
</style>
