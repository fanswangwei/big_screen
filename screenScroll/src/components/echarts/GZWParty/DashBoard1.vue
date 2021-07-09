<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\dashboardChart2.vue
-->
<template>
  <div class="dashboardSecond" ref="dashboardSecond"></div>
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
      msg: '仪表盘',
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
      this.myChart = this.$echarts.init(this.$refs.dashboardSecond)
      this.myChart.setOption(
        {
          tooltip: {
            formatter: '{a} {b} : {c}%',
          },
          series: [
            {
              name: '三级企业',
              type: 'gauge',
              radius: '85%',
              title: {
                color: '#ffffff',
              },
              detail: {
                formatter: '{value}%',
                textStyle: {
                  fontSize: 33,
                  fontFamily: 'AGENCYB',
                },
              },
              splitLine: {
                show: false,
                length: 4,
                lineStyle: {
                  color: '#C9722D',
                },
              },
              axisLabel: {
                textStyle: {
                  fontSize: 15,
                  color: '#FFFFFF',
                },
              },
              axisTick: {
                length: 1,
                lineStyle: {
                  color: '#ffffff',
                  width: 2,
                },
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: [
                    [1, '#C9722D'],
                    [1, '#C9722D'],
                    [1, '#C9722D'],
                  ],
                  width: 3,
                },
                color: '#fffff',
              },
              itemStyle: {
                fontSize: 15,
              },
              pointer: {
                length: '55%',
                width: 3,
              },
              data: obj.data
                ? obj.data
                : [
                  {
                    name: '二级企业',
                    value: 85,
                    detail: {
                      color: '#ffffff',
                    },
                  },
                ],
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
        if (obj.xData && index > obj.xData.length) {
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
.dashboardSecond {
  width: 100%;
  height: 100%;
  margin-top: 9px;
}
</style>
