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
      msg: '普通柱状图',
      echartObj: this.data,
      tooltipTimeId: null,
      myChart: null,
    }
  },
  created() {},
  mounted() {
    this.drawLineCustom(this.echartObj)
    this.startLunBo(this.echartObj)
  },
  destroyed() {
    clearInterval(this.tooltipTimeId)
  },
  methods: {
    drawLineCustom(obj) {
      this.myChart = this.$echarts.init(this.$refs.bar)
      let option = {
        grid: {
          left: obj.gridLeft ? obj.gridLeft : '0',
          right: obj.gridRight ? obj.gridRight : '10',
          bottom: obj.gridBottom ? obj.gridBottom : '10',
          top: obj.gridTop ? obj.gridTop : '35',
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
          formatter: '{b} <br/>{a0} : {c0} 万千瓦时<br/>{a1} : {c1} 万千瓦时<br/>{a2} : {c2} 万千瓦时<br/>{a3} : {c3} 万千瓦时',
        },
        legend: {
          itemWidth: 20,
          itemHeight: 12,
          itemGap: 25,
          textStyle: {
            fontSize: 16,
            color: '#fff',
          },
          formatter: function (item) {
            return item + '(万千瓦时)'
          },
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, .5)',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 20,
            rotate: obj.rotate ? obj.rotate : 0,
            textStyle: {
              color: '#fff',
              fontSize: 18,
            },
          },
          data: obj.xData ? obj.xData : [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
          ],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(255, 255, 255, .4)',
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, .5)',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#fff',
              fontSize: 18,
            },
          },
        },
        series: [
          {
            name: obj.yData ? obj.yData[0].name : '-',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              color: '#8B64DF',
            },
            symbolRepeat: true,
            symbolSize: [26, 16],
            symbolMargin: 5,
            z: -10,
            data: obj.yData ? obj.yData[0].value : [
              1750,
              1750,
              2000,
              1750,
              1500,
              2000,
              1500,
              1750,
              1750,
              2000,
              1750,
              1750,
            ],
          },
          {
            name: obj.yData ? obj.yData[1].name : '-',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              color: '#5F78F6',
            },
            symbolRepeat: true,
            symbolSize: [26, 16],
            symbolMargin: 5,
            z: -9,
            data: obj.yData ? obj.yData[1].value : [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          },
          {
            name: obj.yData ? obj.yData[2].name : '-',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              color: '#ABB5FA',
            },
            symbolRepeat: true,
            symbolSize: [26, 16],
            symbolMargin: 5,
            z: -8,
            data: obj.yData ? obj.yData[2].value : [600, 600, 600, 600, 600, 600, 400, 600, 600, 600, 600, 600],
          },
          {
            name: obj.yData ? obj.yData[3].name : '-',
            type: 'line',
            smooth: false,
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 12, // 折线点的大小
            itemStyle: {
              color: '#FA8B4F',
            },
            lineStyle: {
              color: '#FA8B4F',
              type: 'solid',
              width: 4,
            },
            z: -7,
            data: obj.yData ? obj.yData[3].value : [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          },
        ],
      }
      this.myChart.setOption(option, true)
      // EleResize.on(this.$refs.bar, () => {
      //   this.myChart.resize()
      // })
    },
    startLunBo(obj) {
      var index = 0 // 播放所在下标
      this.tooltipTimeId = setInterval(() => {
        this.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index,
        })
        index++
        if (index > obj.xData.length) {
          index = 0
        }
      }, 3000)
    },
  },

  watch: {
    echartObj: {
      immediate: true,
      deep: true,
      handler: function (newValue, oldValue) {
        this.$nextTick(() => {
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
