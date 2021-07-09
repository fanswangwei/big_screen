<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="RadiuPieNine" ref="RadiuPieNine"></div>
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
      var myChart = this.$echarts.init(this.$refs.RadiuPieNine)
      let option = {
        title: {
          text: '异常占比', // 图形标题，配置在中间对应效果图的80%
          left: 'center',
          top: '45%',
          textStyle: {
            color: 'rgb(255,255,255)',
            fontSize: 28,
            align: 'center',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        color: ['#F4E068', '#0EE180', '#F5A519', '#46D8DC', '#940EE1', '#FE7308', '#0976FD', '#09B2FD'],
        legend: {
          show: true,
          x: 'center',
          padding: [300, 0, 0, 0],
          textStyle: {
            color: '#ffffff',
            fontSize: 18,
          },
          icon: 'circle',
        },
        series: [
          {
            name: '十九大以来',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['40%', '50%'],
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
              normal: {
                show: false,
              },
            },
            data: obj.data
              ? obj.data
              : [
                { value: 4166, name: '制度文件异常' },
                { value: 4166, name: '出席人员异常' },
                { value: 2017, name: '党委会未前置异常' },
                { value: 4166, name: '决策链顺序异常' },
                { value: 4166, name: '决策链断裂异常' },
                { value: 2017, name: '议题表决异常' },
                { value: 4166, name: '合法性审查异常' },
                { value: 4166, name: '合规性审查异常' },
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
.RadiuPieNine {
  width: 100%;
  height: 100%;
  margin-top:-40px;
}
</style>
