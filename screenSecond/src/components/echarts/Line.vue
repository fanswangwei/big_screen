<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="line" ref="line"></div>
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
      msg: '双折线图',
      echartObj: this.data,
      tooltipTimeId: null,
    }
  },
  created() {},
  mounted() {
    this.drawLineCustom(this.echartObj)
  },
  destroyed() {
    clearInterval(this.tooltipTimeId)
  },
  methods: {
    drawLineCustom(obj) {
      var myChart = this.$echarts.init(this.$refs.line)
      let option = {
        title: {
          text: obj.text,
          textStyle: {
            fontSize: 18,
            color: '#fff',
          },
          left: 'center',
          top: '10',
        },
        grid: {
          left: '20',
          right: '30',
          bottom: '15',
          top: '50',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 18,
          },
        },
        color: obj.color ? obj.color : ['#0BAC8B', '#E59B02'], // 加上这句话，legend的颜色和折线的自定义颜色就一致了
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(70,163,218, .3)',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: '#fff',
              fontSize: 16,
            },
            // rotate: ,
          },
          data: obj.xData ? obj.xData : [],
        },
        yAxis: {
          // minInterval: 10,
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(70,163,218, .15)',
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(70,163,218, .3)',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: '#fff',
              fontSize: 16,
            },
          },
        },
        series: [
          {
            data: obj.yData ? obj.yData : [],
            name: obj.name ? obj.name : '',
            type: 'line',
            showSymbol: false,
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 8, // 折线点的大小
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                  // 渐变色实现
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1, // 变化度
                    // 三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: 'rgba(69,210,209,.3)',
                      },
                      {
                        offset: 1,
                        color: 'rgba(69,210,209,0)',
                      },
                    ]
                  ),
                },
                lineStyle: {
                  // 线的颜色
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: obj.color ? obj.color[1] : '#E59B02', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: obj.color ? obj.color[0] : '#0BAC8B', // 100% 处的颜色
                      },
                    ],
                    global: false, // 缺省为 false
                  },

                  width: 4,
                },
                // 以及在折线图每个日期点顶端显示数字关闭
                label: {
                  show: false,
                },
              },
            },
          },
        ],
      }
      myChart.setOption(option, true)
      var index = 0 // 播放所在下标
      this.tooltipTimeId = setInterval(function () {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index,
          position: 'bottom',
        })
        index++
        if (index > obj.xData.length) {
          index = 0
        }
      }, 3000)
      // EleResize.on(this.$refs.line, () => {
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
          this.drawLineCustom(newValue)
        })
      },
    },
  },
}
</script>

<style lang="less" scoped>
.line {
  width: 100%;
  height: 100%;
}
</style>
