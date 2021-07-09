<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div
    class="bar"
    ref="bar"
  ></div>
</template>
<script>
// import EleResize from '@/assets/js/esresize'
// echarts内文字大小自适应函数
// function fontSize(res) {
//   let clientWidth =
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth
//   if (!clientWidth) return
//   let fontSize = clientWidth / 1650 // 设计图大小为1650
//   return res * fontSize
// }
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
      msg: '象形柱状图+折线',
      echartObj: this.data,
      tooltipTimeId: null,
      myChart: null,
      // zoomStart: 0,
      // zoomEnd: 5,
      // startTimeId: null,
      // endTimeId: null,
    }
  },
  mounted() {
    // this.startZoom()
    // this.endZoom()
    this.$nextTick(() => {
      this.drawLineCustom(this.echartObj)
      this.startLunBo(this.echartObj)
    })
  },
  destroyed() {
    // this.clearTimeId()
  },
  methods: {
    drawLineCustom(obj) {
      this.myChart = this.$echarts.init(this.$refs.bar)
      this.myChart.setOption(
        {
          // dataZoom: [
          //   {
          //     type: 'inside',
          //     xAxisIndex: 0,
          //     startValue: this.zoomStart,
          //     endValue: this.zoomEnd,
          //     minValueSpan: 0,
          //     maxValueSpan: 5,
          //     zoomLock: true,
          //     filterMode: 'empty',
          //   },
          // ],
          grid: {
            left: '15',
            right: '15',
            bottom: '0',
            top: '55',
            containLabel: true,
          },
          tooltip: {
            trigger: 'axis',
            textStyle: {
              fontSize: 22,
            },
            axisPointer: {
              type: 'line',
            },
            formatter: '{b} <br/>{a0} : {c0} 亿元<br/>{a1} : {c1} %',
          },
          legend: {
            right: 'center',
            top: '12',
            itemWidth: 20,
            itemHeight: 12,
            itemGap: 25,
            textStyle: {
              fontSize: 16,
              color: '#fff',
            },
            show: true,
            formatter: function (item) {
              if (item === '产值') {
                return item + '(亿元)'
              } else {
                return item + '(%)'
              }
            },
          },
          xAxis: {
            data: obj.xData
              ? obj.xData
              : [
                '朱泾',
                '枫泾',
                '张堰',
                '工业区',
                '亭林',
                '吕巷',
                '廊下',
                '漕泾',
                '山阳',
                '二工区',
                '金山卫',
              ],
            axisTick: { show: false },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 255, 255, .5)',
              },
            },
            axisLabel: {
              margin: 20,
              color: '#fff',
              fontSize: 18,
            },
          },
          yAxis: [
            {
              type: 'value',
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                  color: 'rgba(255, 255, 255, .4)',
                },
              },
              axisTick: { show: false },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, .5)',
                },
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
          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(57, 219, 243)',
            },
            {
              offset: 0.5,
              color: 'rgb(57, 219, 243)',
            },
            {
              offset: 1,
              color: 'rgba(57, 219, 243, .5)',
            },
          ]),
          series: [
            {
              name: '产值',
              type: 'pictorialBar',
              barCategoryGap: '-50%',
              symbolOffset: ['0%', 0],
              // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
              // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',

              symbol:
                'path://M0,10 L10,10 C5.5,10 5.5,5 5,5 C4.5,5 4.5,10 0,10 z',
              itemStyle: {
                opacity: 0.5,
              },
              emphasis: {
                itemStyle: {
                  opacity: 1,
                },
              },
              data: obj.yData
                ? obj.yData[0].value
                : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              z: 10,
            },
            {
              yAxisIndex: 1,
              name: '同比',
              type: 'line',
              symbol: 'circle', // 折线点设置为实心点
              symbolSize: 12, // 折线点的大小
              smooth: false,
              data: obj.yData
                ? obj.yData[1].value
                : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              itemStyle: {
                color: '#5cfbff',
                // shadowColor: '#5cfbff',
                // shadowBlur: 20,
              },
              lineStyle: {
                // shadowColor: '#5cfbff',
                // shadowOffsetX: 0,
                // shadowOffsetY: 0,
                // opacity: 1,
                // shadowBlur: 8,
                type: 'solid',
                width: 3,
              },
            },
          ],
        },
        true
      )

      // this.myChart.on('click', function (param) {
      // console.log(param.name)
      // if (name == '用户数') {
      //   window.location.href = '${base}/admin/user/list.htm'
      // }
      // else if (name == '栏目数') {
      //   window.location.href = '${base}/admin/classify/list.htm'
      // } else if (name == '新闻数') {
      //   window.location.href = '${base}/admin/news/list.htm'
      // } else {
      //   window.location.href = '${base}/admin/file/list.htm'
      // }
      // })
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
    // startZoom() {
    //   this.startTimeId = setInterval(() => {
    //     if (this.zoomEnd >= this.data.xData.length - 1) {
    //       // if (this.zoomEnd >= 10) {
    //       this.zoomStart = 0
    //     } else {
    //       this.zoomStart += 1
    //     }

    //     this.$nextTick(() => {
    //       this.drawLineCustom(this.echartObj)
    //     })
    //   }, 3000)
    // },
    // endZoom() {
    //   this.endTimeId = setInterval(() => {
    //     if (this.zoomEnd >= this.data.xData.length - 1) {
    //       // if (this.zoomEnd >= 10) {
    //       this.zoomEnd = 5
    //     } else {
    //       this.zoomEnd += 1
    //     }

    //     this.$nextTick(() => {
    //       this.drawLineCustom(this.echartObj)
    //     })
    //   }, 3000)
    // },
    // startInterval() {
    //   // if (this.obj.openScroll) {
    //   this.startZoom()
    //   this.endZoom()
    //   // }
    // },
    // clearTimeId() {
    //   clearInterval(this.endTimeId)
    //   clearInterval(this.startTimeId)
    // },
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
  height: 92%;
}
</style>
