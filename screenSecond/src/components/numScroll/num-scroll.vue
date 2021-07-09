
<template>
  <div class="num-scroll" ref="numScroll">
    <div
      class="num-scroll-box"
      :style="styleList[index]"
      ref="numChild"
      v-for="(item, index) in numList"
      :key="index"
    >
      <span
        :class="{ bg: option.isBg }"
        v-for="(ite, ind) in numOldList"
        :style="numChildStyle"
        :key="ind"
        >{{ ite }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    setting: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      option: {
        num: this.value, // 初始化值
        speed: 2000, // 动画速度
        time: 8000, // 动画间隔时间
        isScroll: true, // 是否持续滚动滚动
        symbol: false, // 默认的分割符号，千，万，千万
        dot: 2, // 保留几位小数点
        width: '20px', // 设置宽度
        height: '40px', // 设置高度
        isBg: false, // 是都显示背景
      },
      timer: null,
      styleList: [],
      numOldList: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '.',
        ',',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '.',
        ',',
      ],
    }
  },
  computed: {
    numList() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.option = Object.assign(this.option, this.setting)
      let num = (this.value / 1).toFixed(this.option.dot)
      if (this.option.symbol) num = (num / 1).toLocaleString()
      return num.split('')
    },
    numChildStyle() {
      let asddsd = {
        width: this.option.width,
        height: this.option.height,
        'line-height': this.option.height,
      }
      return asddsd
    },
  },
  methods: {
    asd(v) {
      return parseInt(v).toLocaleString()
    },
    runAnimate() {
      this.numList.map((ite, ind) => {
        ite = ite === '.' ? 10 : ite < 5 ? ite / 1 + 12 : ite === ',' ? 11 : ite
        var thisTop = ite === ',' ? '-12%' : -(100 / 24) * ite + '%'
        this.$set(this.styleList, ind, {
          transform: 'translateY(' + thisTop + ')',
          transition: this.option.speed / 1000 + 's',
          width: this.option.width,
        })
      })
      if (this.option.isScroll) {
        this.resetData()
      }
    },
    resetData() {
      this.timer = setTimeout((ite, ind) => {
        this.numList.map((ite, ind) => {
          ite = ite === '.' ? 10 : ite < 5 ? ite / 1 + 12 : ite === ',' ? 11 : ite
          // eslint-disable-next-line no-unused-vars
          var thisTop = ite === ',' ? '-12%' : -(100 / 24) * ite + '%'
          this.$set(this.styleList, ind, {
            transform: 'translateY(0)',
            transition: 'all 0s',
            width: this.option.width,
          })
        })
        setTimeout(() => {
          this.runAnimate()
        }, 100)
      }, this.option.time + this.option.speed - 100)
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.runAnimate()
      }, 1400)
    })
  },
}
</script>
<style lang="less">
.num-scroll {
  position: relative;
  display: inline-block;
  height: 100%;
  overflow: hidden;
  .num-scroll-box {
    display: inline-block;
    span {
      display: block;
      transform: translateY(0);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: calc(100% - 15px) calc(100% - 5px);
      text-align: center;
      &.bg {
        background-image: url('../../assets/imgs/scrollnum.png');
        background-size: 100% 100%;
      }
    }
  }
}
</style>
