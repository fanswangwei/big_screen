<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\dashboardChart2.vue
-->
<template>
  <div class="dashboardFirst" ref="dashboardFirst"></div>
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
      this.myChart = this.$echarts.init(this.$refs.dashboardFirst)
      this.myChart.setOption(
        {
          tooltip: {
            formatter: '{a} {b} : {c}%',
          },
          series: [
            {
              name: '集团本部',
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
                  color: '#1F7FAE',
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
                    [1, '#1F7FAE'],
                    [1, '#1F7FAE'],
                    [1, '#1F7FAE'],
                  ],
                  width: 3,
                },
                color: '#1F7FAE',
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
                    name: '集团本部',
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
.dashboardFirst {
  width: 100%;
  height: 100%;
  margin-top: 9px;
}
</style>
