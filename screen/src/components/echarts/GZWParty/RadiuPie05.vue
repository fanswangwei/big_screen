<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="RadiuPieFifth" ref="RadiuPieFifth"></div>
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
      var myChart = this.$echarts.init(this.$refs.RadiuPieFifth)
      let option = {
        title: {
          text: '十九大' + '\n' + '以来', // 图形标题，配置在中间对应效果图的80%
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
        color: ['#5DB3E6', '#FF5523', '#0F9590', '#61B879', '#F4B31D'],
        legend: {
          show: true,
          x: 'center',
          padding: [290, 0, 0, 0],
          textStyle: {
            color: '#ffffff',
            fontSize: 12,
          },
          icon: 'circle',
        },
        series: [
          {
            name: '十九大以来',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['40%', '60%'],
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
                { value: 4166, name: '融资' },
                { value: 2017, name: '担保项目' },
                { value: 2017, name: '年度投资计划' },
                { value: 4166, name: '重大工程建设项目' },
                { value: 2017, name: '重要设备和技术引进' },
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
.RadiuPieFifth {
  width: 100%;
  height: 100%;
  // color: rgb(46, 137, 155);
}
</style>
