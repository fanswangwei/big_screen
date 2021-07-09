<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="RadiuPieEighth" ref="RadiuPieEighth"></div>
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
      msg: '饼图-半径模式',
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
      var myChart = this.$echarts.init(this.$refs.RadiuPieEighth)
      let option = {
        title: {
          text: '当年截至' + '\n' + '至今', // 图形标题，配置在中间对应效果图的80%
          left: 'center',
          top: '43%',
          textStyle: {
            color: 'rgb(255,255,255)',
            fontSize: 20,
            align: 'center',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        color: ['#BA51E6', '#51E6CF', '#5153E6'],
        legend: {
          show: false,
        },
        series: [
          {
            name: '当年截至至今',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['40%', '47%'],
            avoidLabelOverlap: false,
            hoverAnimation: true, // 是否自动放大缩小
            labelLayout: function (params) {
              var isLeft = params.labelRect.x < myChart.getWidth() / 2
              var points = params.labelLinePoints
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width

              return {
                labelLinePoints: points,
              }
            },
            label: {
              formatter: '{b|{b}}\n{per|{d}%}',
              borderWidth: 20,
              borderRadius: 4,
              padding: [0, -10],
              rich: {
                b: {
                  fontSize: 12,
                  lineHeight: 23,
                },
                per: {
                  fontSize: 12,
                  padding: [2, 4],
                  borderRadius: 2,
                },
              },
            },
            labelLine: {
              show: true, // 数据标签引导线
              length: 20,
              lineStyle: {
                width: 1,
                type: 'solid',
              },
            },
            data: obj.data
              ? obj.data
              : [
                { value: 4166, name: '年度预算内大额度资金调动和使用' },
                { value: 4166, name: '超预算的资金调动和使用' },
                { value: 2017, name: '对外大额捐赠赞助' },
              ],
          },
        ],
      }

      myChart.setOption(option, true)
      var charPie3currentIndex = 0
      this.timeId = setInterval(function () {
        var dataLen = option.series[0].data.length
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: charPie3currentIndex,
        })
        charPie3currentIndex = (charPie3currentIndex + 1) % dataLen
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: charPie3currentIndex,
        })
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
          clearInterval(this.timeId)
          this.drawLineCustom(newValue)
        })
      },
    },
  },
}
</script>

<style lang="less" scoped>
.RadiuPieEighth {
  width: 100%;
  height: 100%;
  // color: rgb(46, 137, 155);
}
</style>
