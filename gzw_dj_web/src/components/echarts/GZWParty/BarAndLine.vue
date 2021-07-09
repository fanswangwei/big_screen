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
          title: {
            text: obj.text,
            textStyle: {
              fontSize: 18,
              color: '#fff',
            },
            left: 'center',
            top: '10',
          },
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
            show: false,
            right: '20',
            top: '40',
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
              data: obj.xData
                ? obj.xData
                : ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
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
              name: obj.yData ? obj.yData.name : '柱状',
              type: 'bar',
              data: obj.yData ? obj.yData.value : [3, 5, 2, 6, 7, 11, 45],
              // barGap: '-100%', // 添加此配置项即为重叠效果
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#2F80ED', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#56CCF2', // 100% 处的颜色
                    },
                  ]),
                },
                type: 'solid',
                width: 4,
                borderWidth: '0',
                borderColor: '#132a36',
                // barBorderRadius: [20, 20, 0, 0],
              },
              barWidth: '25',
            },
            {
              name: '折线',
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#1EC4CE',
                },
              },
              data: obj.yData ? obj.yData.value : [3, 5, 2, 6, 7, 11, 45],
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
.barLine {
  width: 100%;
  height: 100%;
}
</style>
