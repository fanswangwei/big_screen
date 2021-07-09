<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\barLineChart2.vue
-->
<template>
  <div class="barLine" ref="barLine"></div>
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
      msg: '层叠柱状图+折线',
      echartObj: this.data,
      myChart: null,
      tooltipTimeId: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLineCustom(this.echartObj)
      this.startLunBo(this.echartObj)
    })
  },
  methods: {
    drawLineCustom(obj) {
      this.myChart = this.$echarts.init(this.$refs.barLine)
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
              fontSize: 22,
            },
            formatter:
              '{b} <br/>{a0} : {c0} 亿元<br/>{a1} : {c1} 亿元',
          },
          // legend: {
          //   right: 'center',
          //   top: '10',
          //   itemWidth: 20,
          //   itemHeight: 12,
          //   itemGap: 25,
          //   textStyle: {
          //     fontSize: 16,
          //     color: '#fff',
          //   },
          //   formatter: function (item) {
          //     if (item === '产值' || item === '目标产值') {
          //       return item + '(亿元)'
          //     } else {
          //       return item + '(%)'
          //     }
          //   },
          // },
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '25',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: obj.xData
                ? obj.xData
                : [
                  '2020-02',
                  '2020-03',
                  '2020-04',
                  '2020-05',
                  '2020-06',
                  '2020-07',
                  '2020-08',
                ],
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
          ],
          yAxis: [
            {
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
            {
              type: 'value',
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, .5)',
                },
              },
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                  color: 'rgba(255, 255, 255, .4)',
                },
              },
              axisLabel: {
                margin: 20,
                textStyle: {
                  color: '#fff',
                  fontSize: 18,
                },
                // formatter: '{value} °C',
              },
            },
          ],
          color: ['#04CCD4', '#036FD0'],
          series: [
            {
              name: '产值',
              type: 'bar',
              data: obj.yData
                ? obj.yData[0].value
                : [220, 182, 191, 234, 290, 330, 310],
              itemStyle: {
                color: '#039ED2',
                // shadowColor: '#039ED2',
                // shadowOffsetX: 0,
                // shadowOffsetY: 0,
                // opacity: 1,
                // shadowBlur: 10,
              },
              barWidth: '15',
            },
            {
              yAxisIndex: 1,
              name: '同比',
              type: 'line',
              smooth: true,
              symbol: 'circle', // 折线点设置为实心点
              symbolSize: 12, // 折线点的大小
              data: obj.yData
                ? obj.yData[1].value
                : [0, 0, 0, 0, 0, 0, 0],
              itemStyle: {
                // shadowColor: '#039ED2',
                // shadowBlur: 20,
              },
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#036FD0', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#04CCD4', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                // shadowColor: '#039ED2',
                // shadowOffsetX: 0,
                // shadowOffsetY: 0,
                // opacity: 1,
                // shadowBlur: 8,
                type: 'solid',
                width: 4,
              },
            },
          ],
        },
        true
      )
      // EleResize.on(this.$refs.line, () => {
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
.barLine {
  width: 100%;
  height: 92%;
}
</style>
