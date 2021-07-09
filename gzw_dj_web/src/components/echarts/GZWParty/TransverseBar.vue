<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\barLineChart2.vue
-->
<template>
  <div class="TransverseBar" ref="TransverseBar"></div>
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
      this.myChart = this.$echarts.init(this.$refs.TransverseBar)
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
            },
          },
          color: ['#2FCC8D', '#E18134', '#3B80F2'],
          legend: {
            icon: 'circle',
            data: ['革命传统', '文化名人', '青少年成长'],
            textStyle: {
              color: '#ffffff',
              fontSize: 15,
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'value',
            show: false,
            // splitLine: {
            //   lineStyle: {
            //     type: 'dashed',
            //     color: 'rgba(6,36,66, .15)',
            //   },
            // },
            // axisLine: {
            //   show: false,
            // },
            // axisTick: {
            //   show: false,
            // },
            // axisLabel: {
            //   margin: 10,
            //   textStyle: {
            //     color: '#fff',
            //     fontSize: 16,
            //   },
            // },
          },
          yAxis: {
            type: 'category',
            data: obj.xData
              ? obj.xData
              : [
                '徐汇区',
                '浦东新区',
                '嘉定区',
                '闵行区',
                '长宁区',
                '普陀区',
                '虹口区',
              ],
            axisLine: {
              show: false,
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
          series: [
            {
              name: '革命传统',
              type: 'bar',
              stack: 'total',
              showBackground: true,
              barWidth: 30,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
                barBorderRadius: [0, 10, 10, 0],
              },
              label: {
                show: true,
              },
              itemStyle: {
                barBorderRadius: [10, 0, 0, 10],
              },
              emphasis: {
                focus: 'series',
              },
              data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
              name: '文化名人',
              type: 'bar',
              stack: 'total',
              barWidth: 30,
              label: {
                show: true,
              },
              // itemStyle: {
              //   barBorderRadius: [10, 10, 10, 10],
              // },
              emphasis: {
                focus: 'series',
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: '青少年成长',
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
                barBorderRadius: [0, 10, 10, 0],
              },
              data: [220, 182, 191, 234, 290, 330, 310],
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
        if (index > 7) { // obj.xData.length
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
.TransverseBar {
  width: 100%;
  height: 600px;
}
</style>
