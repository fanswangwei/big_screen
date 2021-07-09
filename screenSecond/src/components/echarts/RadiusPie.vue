<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="line" ref="line"></div>
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
      var myChart = this.$echarts.init(this.$refs.line)
      let option = {
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 18,
          },
        },
        color: ['#00E8BF', '#00DEFE', '#7C7BFF'],
        legend: {
          show: obj.showLegend,
          left: '230',
          top: 'center',
          orient: 'vertical',
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 24,
          textStyle: {
            color: '#fff',
            fontSize: 12,
          },
          formatter: function (name) {
            // let total = obj.data.reduce((preValue, curValue, index, array) => {
            //   return +preValue + +curValue.value
            // }, 0)
            return name + '：' + +obj.data.find((v) => v.name === name).value
          },
        },
        series: [
          {
            name: '产值',
            type: 'pie',
            minAngle: '30',
            radius: obj.radius ? obj.radius : [37, 110],
            center: obj.center ? obj.center : ['35%', '50%'],
            roseType: !obj.openRadius ? '' : 'radius',
            label: {
              normal: {
                show: obj.showLabel,
                color: '#fff',
                fontSize: 18,
                position: 'outside',
                formatter: function (params) {
                  if (!obj.showLabelLine) {
                    return params.percent
                  } else {
                    if (params.name.length > 8) {
                      return '\n' + params.name.slice(0, 8) + '...'
                    } else {
                      return '\n' + params.name + ''
                    }
                  }
                },
              },
              emphasis: {
                show: false,
                color: '#40eac4',
                fontSize: 18,
                // backgroundColor: obj.showLabelLine ? '' : 'rgba(46, 137, 155, .8)',
                backgroundColor: obj.showLabelLine
                  ? ''
                  : 'rgba(45, 54, 60, .8)',
                padding: [9, 5, 10, 5],
                borderRadius: 4,
                rich: {
                  focus1: {
                    color: '#40eac4',
                    fontSize: 24,
                    lineHeight: 30,
                  },
                  focus2: {
                    color: '#fff',
                    fontSize: 24,
                    height: 35,
                    lineHeight: 35,
                  },
                  focus3: {
                    color: '#fff',
                    fontSize: 18,
                  },
                },
                formatter: function (params) {
                  if (!obj.showLabelLine) {
                    if (params.name.length > 4) {
                      return (
                        '{focus2|' +
                        params.percent +
                        '%}\n' +
                        '{focus3|' +
                        params.name.slice(0, 4) +
                        '...}'
                      )
                    } else {
                      return (
                        '{focus2|' +
                        params.percent +
                        '%}\n' +
                        '{focus3|' +
                        params.name +
                        '}'
                      )
                    }
                  } else {
                    if (params.name.length > 8) {
                      return (
                        '\n' +
                        '{focus1|' +
                        params.percent +
                        '%\n}' +
                        params.name.slice(0, 8) +
                        '...'
                      )
                    } else {
                      return (
                        '\n' +
                        '{focus1|' +
                        params.percent +
                        '%\n}' +
                        params.name +
                        ''
                      )
                    }
                  }
                },
              },
            },
            labelLine: {
              lineStyle: {
                color: '#22E4F8',
              },
              smooth: obj.showLabelLine ? 0.2 : 0,
              length: obj.showLabelLine ? 10 : 0,
              length2: obj.showLabelLine ? 20 : 0,
            },
            itemStyle: {
              normal: {
                // shadowColor: '#22E4F8',
                // shadowBlur: 8,
              },
              emphasis: {
                shadowColor: '#333',
                shadowBlur: 25,
              },
            },
            data: obj.data
              ? obj.data
              : [
                { value: 0, name: '-' },
                { value: 0, name: '-' },
                { value: 0, name: '-' },
              ],
          },
        ],
      }

      myChart.setOption(option, true)
      // var charPie3currentIndex = 0
      // this.timeId = setInterval(function () {
      //   var dataLen = option.series[0].data.length
      //   // 取消之前高亮的图形
      //   myChart.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: charPie3currentIndex,
      //   })
      //   charPie3currentIndex = (charPie3currentIndex + 1) % dataLen
      //   // 高亮当前图形
      //   myChart.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: charPie3currentIndex,
      //   })
      // }, 3000)

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
.line {
  width: 100%;
  height: 100%;
  // color: rgb(46, 137, 155);
}
</style>
