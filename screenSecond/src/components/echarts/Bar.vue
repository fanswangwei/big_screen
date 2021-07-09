<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="bar" ref="bar"></div>
</template>
<script>
// import EleResize from '@/assets/js/esresize'
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  data() {
    return {
      msg: '横向柱状图',
      echartObj: this.data,
      timeId: null,
    }
  },
  created() {},
  mounted() {
    this.drawLineCustom(this.echartObj)
  },
  destroyed() {
    clearInterval(this.timeId)
  },
  methods: {
    drawLineCustom(obj) {
      var myChart = this.$echarts.init(this.$refs.bar)
      let option = {
        grid: {
          left: '0',
          right: '0',
          bottom: '-25',
          top: '25',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            fontSize: 22,
          },
        },
        xAxis: {
          show: false,
          type: 'value',
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              margin: 20,
              textStyle: {
                color: '#fff',
                fontSize: 20,
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: obj.xData,
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#fff',
                fontSize: '20',
              },
            },
            data: obj.yData.value,
          },
        ],
        series: [
          {
            name: obj.yData.name,
            type: 'bar',
            zlevel: 1,
            showBackground: true,
            backgroundStyle: {
              color: '#0D182366',
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: obj.color ? obj.color[0] : '#178AE3',
                  },
                  {
                    offset: 1,
                    color: obj.color ? obj.color[1] : '#19FEE5',
                  },
                ]),
              },
            },
            barWidth: 14,
            data: obj.yData.value,
          },
        ],
      }
      myChart.setOption(option, true)
      // EleResize.on(this.$refs.bar, () => {
      //   myChart.resize()
      // })
    },
  },

  watch: {
    echartObj: {
      immediate: true,
      deep: true,
      handler: function (newValue, oldValue) {
        this.$nextTick(() => {
          clearInterval(this.timeId)
          this.drawLineCustom(newValue)
        })
      },
    },
  },
}
</script>

<style lang="less" scoped>
.bar {
  width: 100%;
  height: 100%;
}
</style>
