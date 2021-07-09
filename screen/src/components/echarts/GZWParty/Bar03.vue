<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\barLineChart2.vue
-->
<template>
  <div class="barSecond" ref="barSecond"></div>
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
      msg: '颜色渐变柱状图',
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
      this.myChart = this.$echarts.init(this.$refs.barSecond)
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
              fontSize: 18,
            },
          },
          legend: {
            show: true,
            icon: 'circle',
            textStyle: {
              color: '#ffffff',
              fontSize: 18,
            },
          },
          grid: {
            left: '20',
            right: '20',
            bottom: '15',
            top: '70',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: obj.xData ? obj.xData : ['2018', '2019', '2020', '2021'],
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
            },
          ],
          yAxis: [
            {
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
          ],
          series: [
            {
              name: obj.yData[0].name ? obj.yData[0].name : '党委会',
              type: 'bar',
              stack: 'total',
              showBackground: false,
              barWidth: 30,
              label: {
                show: true,
              },
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#38EF7D', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#11998E', // 100% 处的颜色
                    },
                  ]),
                },
              },
              emphasis: {
                focus: 'series',
              },
              data: obj.yData[0].value ? obj.yData[0].value : [123, 234, 456, 789],
            },
            {
              name: obj.yData[1].name ? obj.yData[1].name : '总经理办公室',
              type: 'bar',
              stack: 'total',
              barWidth: 30,
              label: {
                show: true,
              },
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5B86E5', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#36D1DC', // 100% 处的颜色
                    },
                  ]),
                },
              },
              emphasis: {
                focus: 'series',
              },
              data: obj.yData[1].value ? obj.yData[1].value : [123, 234, 456, 789],
            },
            {
              name: obj.yData[2].name ? obj.yData[2].name : '董事会',
              type: 'bar',
              stack: 'total',
              barWidth: 30,
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#FFFFFF', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#EF3B36', // 100% 处的颜色
                    },
                  ]),
                },
              },
              data: obj.yData[2].value ? obj.yData[2].value : [123, 234, 456, 789],
            },
            {
              name: obj.yData[3].name ? obj.yData[3].name : '总裁会',
              type: 'bar',
              stack: 'total',
              barWidth: 30,
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#C21500', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FFC500', // 100% 处的颜色
                    },
                  ]),
                },
              },
              data: obj.yData[3].value ? obj.yData[3].value : [123, 234, 456, 789],
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
        if (index > 7) {
          // obj.xData.length
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
.barSecond {
  width: 100%;
  height: 100%;
}
</style>
