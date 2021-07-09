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
              '{b} <br/>{a0} : {c0} 亿<br/>{a1} : {c1} 亿',
          },
          legend: {
            right: 'center',
            top: '10',
            itemWidth: 20,
            itemHeight: 12,
            itemGap: 25,
            textStyle: {
              fontSize: 16,
              color: '#fff',
            },
            formatter: function (item) {
              return item + '(亿)'
            },
          },
          grid: {
            left: '0',
            right: '20',
            bottom: '20',
            top: '55',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: obj.xData
                ? obj.xData
                : ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
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
          ],
          series: [
            {
              name: obj.yData ? obj.yData[0].name : '-',
              type: 'bar',
              data: obj.yData
                ? obj.yData[0].value
                : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              // barGap: '-100%', // 添加此配置项即为重叠效果
              itemStyle: {
                color: '#0094B4',
                type: 'solid',
                width: 4,
                borderWidth: '0',
                borderColor: '#132a36',
                // barBorderRadius: [20, 20, 0, 0],
              },
              barWidth: '15',
            },
            {
              name: obj.yData ? obj.yData[1].name : '-',
              type: 'bar',
              data: obj.yData
                ? obj.yData[1].value
                : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              itemStyle: {
                color: '#005FB1',
                type: 'solid',
                width: 4,
                borderWidth: '0',
                borderColor: '#132a36',
                // barBorderRadius: [20, 20, 0, 0],
              },
              barWidth: '15',
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
