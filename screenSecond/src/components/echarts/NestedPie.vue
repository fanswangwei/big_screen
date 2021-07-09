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
          formatter: '{a} <br/>{b}: {c}亿元 ({d}%)',
          textStyle: {
            fontSize: 22,
          },
        },
        series: [
          {
            name: '产值',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '35%'],
            center: ['50%', '52%'],
            startAngle: 180,
            color: ['#1BA0C1', '#75D5D2'],
            label: {
              position: 'inner',
              fontSize: 18,
            },
            labelLine: {
              show: false,
            },
            // itemStyle: {
            //   shadowColor: '#22E4F8',
            //   shadowBlur: 8,
            // },
            data: obj.innerData ? obj.innerData : [
              { value: 0, name: '四个产业集群' },
              { value: 0, name: '其他' },
            ],
          },
          {
            name: '产值',
            type: 'pie',
            center: ['50%', '52%'],
            radius: ['45%', '60%'],
            startAngle: 180,
            color: [
              '#15D755',
              '#40EFC8',
              '#2294F8',
              '#E2D618',
              '#21C1DF',
              '#FFB100',
              '#0073D7',
              '#22E4F8',
              '#00D38D',
            ],
            label: {
              normal: {
                show: true,
                color: '#fff',
                fontSize: 18,
                position: 'outside',
                formatter: function (params) {
                  return params.name + ''
                },
              },
              emphasis: {
                show: true,
                color: '#40eac4',
                fontSize: 18,
                rich: {
                  focus1: {
                    color: '#40eac4',
                    fontSize: 24,
                    lineHeight: 30,
                  },
                },
                formatter: function (params) {
                  return '\n' + '{focus1|' + params.percent + '%\n}' + params.name
                },
              },
            },
            labelLine: {
              lineStyle: {
                color: '#22E4F8',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
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
            data: obj.outterData ? obj.outterData : [
              { value: 0, name: '新材料' },
              { value: 0, name: '高端智能设备' },
              { value: 0, name: '生命健康' },
              { value: 0, name: '新一代信息技术' },
              { value: 0, name: '其他' },
            ],
          },
        ],
      }
      myChart.setOption(option, true)
      var charPie3currentIndex = 0
      this.timeId = setInterval(function () {
        var dataLen = option.series[1].data.length
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 1,
          dataIndex: charPie3currentIndex,
        })
        charPie3currentIndex = (charPie3currentIndex + 1) % dataLen
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 1,
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
  height: 88%;
}
</style>
