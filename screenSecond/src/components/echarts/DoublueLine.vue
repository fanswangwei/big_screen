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
        grid: {
          left: '0',
          right: '50',
          bottom: '0',
          top: '45',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 22,
          },
          formatter: '{b} <br/>{a0} : {c0} %<br/>{a1} : {c1} %',
        },
        color: obj.color ? obj.color : ['#FFDC00', '#40F0C8'], // 加上这句话，legend的颜色和折线的自定义颜色就一致了
        legend: {
          icon: 'rectangle',
          data: [obj.yData[0].name, obj.yData[1].name],
          right: 'center',
          top: '5',
          itemWidth: 20,
          itemHeight: 12,
          itemGap: 25,
          textStyle: {
            fontSize: 16,
            color: '#fff',
          },
          formatter: function (item) {
            return item + '(%)'
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
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
          data: obj.xData,
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
            formatter: obj.unit ? '{value}' + obj.unit : '{value}',
          },
        },
        series: [
          {
            data: obj.yData[0].value,
            name: obj.yData[0].name,
            type: 'line',
            showSymbol: true,
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 12, // 折线点的大小
            itemStyle: {
              normal: {
                areaStyle: obj.openAreaColor
                  ? {
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
                          color: obj.color ? obj.color[0] : '#FFDC00',
                        },
                        {
                          offset: 1,
                          color: 'rgba(0,0,0,0)',
                        },
                      ]
                    ),
                  }
                  : {
                    opacity: 0,
                  },
                lineStyle: {
                  // 线的颜色
                  color: obj.color ? obj.color[0] : '#FFDC00',
                  width: 4,
                },
                // 以及在折线图每个日期点顶端显示数字关闭
                label: {
                  show: false,
                },
              },
            },
          },
          {
            data: obj.yData[1].value,
            smooth: false,
            name: obj.yData[1].name,
            type: 'line',
            showSymbol: true,
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 12, // 折线点的大小
            itemStyle: {
              normal: {
                areaStyle: obj.openAreaColor
                  ? {
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
                          color: obj.color ? obj.color[1] : '#40F0C8',
                        },
                        {
                          offset: 1,
                          color: 'rgba(0,0,0,0)',
                        },
                      ]
                    ),
                  }
                  : {
                    opacity: 0,
                  },
                lineStyle: {
                  // 线的颜色
                  color: obj.color ? obj.color[1] : '#40F0C8',
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
      this.tooltipTimeId = setInterval(function() {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index,
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
  height: 85%;
}
</style>
