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
    }
  },
  created() {},
  mounted() {
    this.drawLineCustom(this.echartObj)
  },
  methods: {
    drawLineCustom(obj) {
      var myChart = this.$echarts.init(this.$refs.line)
      myChart.setOption(
        {
          tooltip: {},
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                fontSize: 18,
              },
            },
            radius: [55, 130],
            splitNumber: 3,
            splitArea: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: 'rgb(51, 175, 200)',
              },
            },
            axisLine: {
              lineStyle: {
                color: '#22E4F8',
              },
            },
            indicator: [
              { name: '新材料', max: 6500 },
              { name: '高端智能设备', max: 16000 },
              { name: '生命健康', max: 30000 },
              { name: '新一代信息技术', max: 38000 },
              { name: '其他', max: 52000 },
            ],
          },
          series: [
            {
              type: 'radar',
              lineStyle: {
                color: '#22E4F8',
              },
              areaStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#FEC868', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#1BA0C1', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              data: [
                {
                  value: [0, 10000, 28000, 35000, 50000],
                  name: '产值',
                },
              ],
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

  // watch: {
  //   echartObj: {
  //     immediate: true,
  //     deep: true,
  //     handler: function (newValue, oldValue) {
  //       this.$nextTick(() => {
  //         this.drawLineCustom(newValue)
  //       })
  //     },
  //   },
  // },
}
</script>

<style lang="less" scoped>
.line {
  width: 100%;
  height: 88%;
}
</style>
