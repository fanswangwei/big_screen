<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="threeLine" ref="threeLine"></div>
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
    this.$nextTick(() => {
      this.drawLineCustom(this.echartObj)
    })
  },
  destroyed() {
    clearInterval(this.tooltipTimeId)
  },
  methods: {
    drawLineCustom(obj) {
      var myChart = this.$echarts.init(this.$refs.threeLine)
      let option = {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 22,
          },
          formatter: '{b} <br/>{a0} : {c0}人 <br/>{a1} : {c1}人 <br/>{a2} : {c2}人 ',
        },
        legend: {
          show: true,
          icon: 'circle',
          textStyle: {
            color: '#ffffff',
            fontSize: 14,
          },
        },
        color: ['#F7AF00', '#23C086', '#09B2FD'],
        grid: {
          left: '0',
          right: '50',
          bottom: '0',
          top: '45',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: false,
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
          data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: 'rgba(255, 255, 255, .4)',
            },
          },
          axisLine: {
            show: false,
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
            name: '优秀共产党员',
            type: 'line',
            stack: '总量',
            showSymbol: true,
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 12, // 折线点的大小
            itemStyle: {
              normal: {
                borderColor: '#ffffff',
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '优秀党务工作者',
            type: 'line',
            stack: '总量',
            showSymbol: true,
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 12, // 折线点的大小
            itemStyle: {
              normal: {
                borderColor: '#ffffff',
              },
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '先进基层党组织',
            type: 'line',
            stack: '总量',
            showSymbol: true,
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 12, // 折线点的大小
            itemStyle: {
              normal: {
                borderColor: '#ffffff',
              },
            },
            data: [150, 232, 201, 154, 190, 330, 410],
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
        if (index > 7) { // obj.xData.length
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
.threeLine {
  width: 100%;
  height: 100%;
  margin-top: 25px;
}
</style>
