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
          formatter: `{a} <br/>{b} : {c}${obj.unit ? obj.unit : ''} ({d}%)`,
          textStyle: {
            fontSize: 22,
          },
        },
        color: obj.color ? obj.color : [
          '#2A76FE',
          '#F544AA',
          '#46B2F7',
          '#A42DFF',
          '#8B64DF',
          '#05FEFD',
        ],
        legend: {
          show: obj.showLegend,
          left: obj.legendLeft ? obj.legendLeft : '33',
          top: '15',
          orient: 'horizontal',
          itemWidth: 20,
          itemHeight: 12,
          itemGap: 15,
          textStyle: {
            fontSize: 16,
            color: '#fff',
          },
        },
        series: [
          {
            name: obj.name,
            type: 'pie',
            minAngle: '30',
            radius: obj.radius ? obj.radius : [37, 110],
            center: obj.center ? obj.center : ['35%', '50%'],
            roseType: obj.isRadius ? 'radius' : false,
            label: {
              normal: {
                show: obj.showLabel,
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
                show: true,
                fontSize: 18,
                // backgroundColor: obj.showLabelLine ? '' : 'rgba(46, 137, 155, .8)',
                backgroundColor: obj.showLabelLine ? '' : 'rgba(45, 54, 60, .8)',
                padding: [9, 5, 10, 5],
                borderRadius: 4,
                rich: {
                  focus1: {
                    fontSize: 20,
                    lineHeight: 30,
                  },
                  focus2: {
                    fontSize: 20,
                    height: 35,
                    lineHeight: 35,
                  },
                  focus3: {
                    fontSize: 18,
                  },
                },
                formatter: function (params) {
                  let unit = obj.unit ? obj.unit : ''
                  if (!obj.showLabelLine) {
                    if (params.name.length > 4) {
                      return '{focus2|' + params.value + unit + '}\n' + '{focus3|' + params.name.slice(0, 4) + '...}'
                    } else {
                      return '{focus2|' + params.value + unit + '}\n' + '{focus3|' + params.name + '}'
                    }
                  } else {
                    if (params.name.length > 8) {
                      return '\n' + '{focus1|' + params.value + unit + '\n}' + params.name.slice(0, 8) + '...'
                    } else {
                      return '\n' + '{focus1|' + params.value + unit + '\n}' + params.name + ''
                    }
                  }
                },
              },
            },
            labelLine: {
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
                { value: 0, name: '-' },
                { value: 0, name: '-' },
                { value: 0, name: '-' },
                { value: 0, name: '-' },
                { value: 0, name: '-' },
                { value: 0, name: '-' },
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
.line {
  width: 100%;
  height: 100%;
  // color: rgb(46, 137, 155);
}
</style>
