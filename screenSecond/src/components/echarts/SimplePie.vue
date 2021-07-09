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
      msg: '饼图',
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
    findValue(params) {
      return this.obj.data.find(v => {
        return v.name === params
      }).value
    },
    drawLineCustom(obj) {
      var myChart = this.$echarts.init(this.$refs.line)
      let option = {
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 22,
          },
        },
        color: obj.color ? obj.color : [
          '#40EFC8',
          '#2294F8',
          '#E2D618',
          '#22E4F8',
          '#15D755',
          '#21C1DF',
          '#FFB100',
          '#0073D7',
          '#00D38D',
        ],
        legend: {
          show: true,
          left: 'center',
          bottom: '0',
          orient: 'vertical',
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 14,
          textStyle: {
            color: '#fff',
            fontSize: 18,
          },
          formatter: function(params) {
            let findeValue = function (params) {
              return obj.data.find(v => {
                return v.name === params
              }).value
            }
            if (params === '公立医疗卫生机构') {
              return params + '  ' + findeValue('公立医疗卫生机构') + '家'
            } else if (params === '社会办医疗机构') {
              return params + '  ' + findeValue('社会办医疗机构') + '家'
            } else if (params === '公立医院') {
              return params + '  ' + findeValue('公立医院') + '床'
            } else if (params === '民办医院') {
              return params + '  ' + findeValue('民办医院') + '床'
            }
          },
        },
        series: [
          {
            name: '数量',
            type: 'pie',
            minAngle: '30',
            radius: obj.radius ? obj.radius : [35, 48],
            center: obj.center ? obj.center : ['50%', '38%'],
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
                show: true,
                color: '#40eac4',
                fontSize: 18,
                // backgroundColor: obj.showLabelLine ? '' : 'rgba(46, 137, 155, .8)',
                backgroundColor: obj.showLabelLine ? '' : 'rgba(45, 54, 60, .8)',
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
                    fontSize: 17,
                  },
                },
                formatter: function (params) {
                  if (!obj.showLabelLine) {
                    if (params.name.length > 4) {
                      return '{focus2|' + params.percent + '%}\n' + '{focus3|' + params.name.slice(0, 4) + '...}'
                    } else {
                      return '{focus2|' + params.percent + '%}\n' + '{focus3|' + params.name + '}'
                    }
                  } else {
                    if (params.name.length > 8) {
                      return '\n' + '{focus1|' + params.percent + '%\n}' + params.name.slice(0, 8) + '...'
                    } else {
                      return '\n' + '{focus1|' + params.percent + '%\n}' + params.name + ''
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
