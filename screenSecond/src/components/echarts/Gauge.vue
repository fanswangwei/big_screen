<!--
 * @Author: jzc
 * @Date: 2020-07-02 12:18:29
 * @LastEditTime: 2020-07-06 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monthToMonth\src\components\echart\lineChart2.vue
-->
<template>
  <div class="guage">
    <div class="guage" ref="guage"></div>
    <div class="bg"></div>
    <div class="subtitle">{{ data.title }}</div>
  </div>
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
    }
  },
  created() {},
  mounted() {
    this.drawLineCustom(this.echartObj)
  },
  methods: {
    drawLineCustom(obj) {
      var myChart = this.$echarts.init(this.$refs.guage)
      myChart.setOption(
        {
          tooltip: {
            // formatter: '{a} <br/>{c} {b}',
            textStyle: {
              fontSize: 22,
            },
            formatter: function (params) {
              return params.name + '： ' + params.value + '%'
            },
          },
          // toolbox: {
          //   show: true,
          //   feature: {
          //     mark: { show: true },
          //     restore: { show: true },
          //     saveAsImage: { show: true },
          //   },
          // },
          series: [
            {
              type: 'gauge',
              min: 0,
              max: 100,
              splitNumber: 10,
              radius: '94%',
              center: ['50%', '57%'],
              axisLine: {
                // 坐标轴线
                lineStyle: {
                  // 属性lineStyle控制线条样式
                  color: [
                    [0.3, '#FA573B'],
                    [0.6, '#FEB400'],
                    [0.8, '#39DBF3'],
                    [1, '#00FFBD'],
                  ],
                  width: 3,
                  shadowColor: '#fff', // 默认透明
                  shadowBlur: 0,
                },
              },
              axisLabel: {
                // 坐标轴小标记
                color: '#fff',
                fontSize: 18,
                shadowColor: [
                  [0.3, '#FA573B'],
                  [0.6, '#FEB400'],
                  [0.8, '#39DBF3'],
                  [1, '#00FFBD'],
                ],
                shadowBlur: 10,
              },
              axisTick: {
                // 坐标轴小标记
                length: 20, // 属性length控制线长
                lineStyle: {
                  // 属性lineStyle控制线条样式
                  color: 'auto',
                  shadowColor: [
                    [0.3, '#FA573B'],
                    [0.6, '#FEB400'],
                    [0.8, '#39DBF3'],
                    [1, '#00FFBD'],
                  ],
                  shadowBlur: 0,
                },
              },
              splitLine: {
                // 分隔线
                length: 25, // 属性length控制线长
                lineStyle: {
                  // 属性lineStyle（详见lineStyle）控制线条样式
                  width: 4,
                  color: [
                    [0.3, '#FA573B'],
                    [0.6, '#FEB400'],
                    [0.8, '#39DBF3'],
                    [1, '#00FFBD'],
                  ],
                  shadowColor: [
                    [0.3, '#FA573B'],
                    [0.6, '#FEB400'],
                    [0.8, '#39DBF3'],
                    [1, '#00FFBD'],
                  ],
                  shadowBlur: 0,
                },
              },
              pointer: {
                // 分隔线
                shadowColor: [
                  [0.3, '#FA573B'],
                  [0.6, '#FEB400'],
                  [0.8, '#39DBF3'],
                  [1, '#00FFBD'],
                ],
                shadowBlur: 0,
              },
              title: {
                offsetCenter: [0, '51%'],
                textStyle: {
                  // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 18,
                  // fontStyle: 'italic',
                  color: '#fff',
                  shadowColor: '#fff', // 默认透明
                  shadowBlur: 0,
                },
              },
              detail: {
                shadowBlur: 5,
                offsetCenter: [0, '28%'], // x, y，单位px
                textStyle: {
                  // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  color: '#40EFC8',
                  fontSize: 26,
                },
                formatter: function (params) {
                  return params + '%'
                },
              },
              data: [{ value: obj.process ? obj.process : 0, name: '完成率' }],
            },
          ],
        },
        true
      )

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
          this.drawLineCustom(newValue)
        })
      },
    },
  },
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/animate.less);
.guage {
  width: 100%;
  height: 100%;
  // background: url("../../assets/imgs/majorEcoIndicators/gauge.png") no-repeat center center;
  // background-size: 100% 100%;
  position: relative;
  z-index: 9;
  .subtitle {
    background: url('../../assets/imgs/majorEcoIndicators/titlebg.png')
      no-repeat center center;
    background-size: 100% 100%;
    padding: 15px 50px;
    font-size: 22px;
    position: absolute;
    bottom: -30px;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/imgs/majorEcoIndicators/gauge.png') no-repeat
      center center;
    background-size: 100% 100%;
    animation: shink 2s infinite linear;
  }
}

</style>
