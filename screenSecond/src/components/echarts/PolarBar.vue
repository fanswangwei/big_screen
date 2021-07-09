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
        angleAxis: {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        radiusAxis: {
          type: 'category',
          data: obj.xData,
          z: 100,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        polar: {
          center: ['50%', '29%'],
          radius: [20, 86],
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
          formatter: function (params) {
            console.log('params', params)
            if (params[0].name === obj.xData[3]) {
              return params[3].name + '：' + params[3].value + '%'
            } else if (params[0].name === obj.xData[1]) {
              return params[1].name + '：' + params[1].value + '%'
            } else if (params[0].name === obj.xData[0]) {
              return params[0].name + '：' + params[0].value + '%'
            } else if (params[0].name === obj.xData[2]) {
              return params[2].name + '：' + params[2].value + '%'
            }
          },
        },
        series: [
          {
            type: 'bar',
            barWidth: '50%',
            data: [obj.yData[0], 0, 0, 0],
            coordinateSystem: 'polar',
            name: obj.xData[0],
            stack: 'a',
            roundCap: true,
            itemStyle: {
              color: '#4A55CE',
            },
            showBackground: true,
            backgroundStyle: {
              color: '#9D89FF10',
            },
          },
          {
            type: 'bar',
            data: [0, obj.yData[1], 0, 0],
            coordinateSystem: 'polar',
            name: obj.xData[1],
            stack: 'a',
            roundCap: true,
            itemStyle: {
              color: '#3A83FF',
            },
            showBackground: true,
            backgroundStyle: {
              color: '#9D89FF10',
            },
          },
          {
            type: 'bar',
            data: [0, 0, obj.yData[2], 0],
            coordinateSystem: 'polar',
            name: obj.xData[2],
            stack: 'a',
            roundCap: true,
            itemStyle: {
              color: '#E4CB79',
            },
            showBackground: true,
            backgroundStyle: {
              color: '#9D89FF10',
            },
          },
          {
            type: 'bar',
            data: [0, 0, 0, obj.yData[3]],
            coordinateSystem: 'polar',
            name: obj.xData[3],
            stack: 'a',
            roundCap: true,
            itemStyle: {
              color: '#31E7E0',
            },
            showBackground: true,
            backgroundStyle: {
              color: '#9D89FF10',
            },
          },
        ],
        legend: {
          orient: 'vertical',
          icon: 'circle',
          left: 'center',
          bottom: 48,
          itemHeight: 12,
          itemWidth: 12,
          itemGap: 13,
          show: true,
          data: obj.xData,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 18,
          },
          formatter: function (name) {
            let index = 0
            let clientlabels = obj.xData
            let clientcounts = obj.yData
            clientlabels.forEach(function (value, i) {
              if (value === name) {
                index = i
              }
            })
            return name + '  ' + clientcounts[index] + '%'
          },
        },
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
