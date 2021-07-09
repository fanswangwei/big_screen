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
          right: obj.gridRight ? obj.gridRight : '0',
          bottom: obj.gridBottom ? obj.gridBottom : '30',
          top: obj.gridTop ? obj.gridTop : '75',
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
        title: {
          text: obj.text,
          textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 400,
            rich: {
              changeColor: {
                color: obj.color ? obj.color : '#fff',
                fontSize: 24,
              },
            },
          },
          padding: [
            15, // 上
            0, // 右
            0, // 下
            140, // 左
          ],
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
          },
        },
        series: [
          {
            name: obj.yData.name,
            data: obj.yData.value,
            type: 'bar',
            label: {
              show: !obj.startLunBo,
              position: 'top',
              fontSize: 18,
              color: '#fff',
              formatter: function(params) {
                let unit = obj.unit ? obj.unit : ''
                return params.value + unit
              },
            },
            showBackground: !!obj.backgroundColor,
            backgroundStyle: {
              color: obj.backgroundColor ? obj.backgroundColor : '#0D182366',
            },
            itemStyle: {
              color: Array.isArray(obj.color) ? new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: obj.color[0],
                },
                {
                  offset: 1,
                  color: obj.color[1],
                },
              ]) : obj.color,
              // shadowColor: obj.color ? Array.isArray(obj.color) ? obj.color[1] : obj.color : 'rgb(255, 220, 0)',
              // shadowOffsetX: 0,
              // shadowOffsetY: 0,
              // opacity: 1,
              // shadowBlur: 10,
            },
            barWidth: obj.barWidth ? obj.barWidth : 27,
          },
        ],
      }
      this.myChart.setOption(option, true)
      // EleResize.on(this.$refs.bar, () => {
      //   this.myChart.resize()
      // })
    },
    startLunBo(obj) {
      if (obj.startLunBo) {
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
      }
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
