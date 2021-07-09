<!--  -->
<template>
  <div class="dataMerger">
    <div class="top-box">
      <div
        class="top-left-box my-box"
      >
        <div class="sub-title">
          部门数据汇聚
          <div class="tab">
            <ul class="ul-tab">
              <li
                @click="changeActTab1('today')"
                :class="{ act: currentTab1 == 'today' }"
              >
                当天
              </li>
              <li
                @click="changeActTab1('month')"
                :class="{ act: currentTab1 == 'month' }"
              >
                当月
              </li>
            </ul>
          </div>
        </div>
        <div class="content">
          <ul>
            <vue-seamless-scroll
              :data="top10Data"
              :class-option="setoption"
              class="seamless-warp"
            >
              <li v-for="(item, index) in top10Data" :key="index">
                <img src="../../assets/imgs/dataMerger/topbg.png" alt="" />
                <div class="num">{{ index + 1 }}</div>
                <div class="name">{{ item.name }}</div>
                <div class="value">
                  <span>{{ item.value }}</span>
                  <div class="outer">
                    <div
                      class="inner"
                      :style="{
                        width: (item.value / top10Data[0].value) * 100 + '%',
                      }"
                    ></div>
                  </div>
                </div>
              </li>
            </vue-seamless-scroll>
          </ul>
        </div>
      </div>
      <div class="top-right-box">
        <div class="right-box1">
          <ul class="sj list">
            <li>市级</li>
            <li v-for="(item, index) in listData.sj" :key="index">
              <div class="value"><num-scroll
                class="s-num"
                v-model="item.value"
                :setting="{
                  dot: 0,
                  isBg: false,
                  width: '14px',
                  height: '25px',
                  time: 60000,
                }"
              />{{ item.unit }}</div>
              <div class="name">{{ item.name }}</div>
            </li>
          </ul>
          <ul class="qj list">
            <li>区级</li>
            <li v-for="(item, index) in listData.qj" :key="index">
              <div class="value"><num-scroll
                class="s-num"
                v-model="item.value"
                :setting="{
                  dot: 0,
                  isBg: false,
                  width: '14px',
                  height: '25px',
                  time: 60000,
                }"
              />{{ item.unit }}</div>
              <div class="name">{{ item.name }}</div>
            </li>
          </ul>
        </div>
        <div class="right-box2">
          <div class="right-box2-left my-box">
            <div class="sub-title">采集方式</div>
            <div class="content" v-if="radiusPieFlag">
              <div class="echarts-title">采集方式</div>
              <RadiusPie :data="pieWithLegendData"></RadiusPie>
            </div>
          </div>
          <div class="right-box2-right my-box">
            <div class="sub-title">月度累计统计</div>
            <div class="content" v-if="OneBarFlag">
              <div class="echarts-title">
                当月汇聚数据量<span><num-scroll
                class="s-num"
                v-model="YDLJtotal"
                :setting="{
                  dot: 0,
                  isBg: false,
                  width: '14px',
                  height: '25px',
                  time: 60000,
                }"
              />亿条</span>
              </div>
              <OneBar :data="OneBarData"></OneBar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-box">
      <div
        class="bottom-box1 my-box"
        @mouseenter="stopScroll2"
        @mouseleave="startTabScroll2"
      >
        <div class="sub-title">归集数据累计</div>
        <div class="content">
          <div class="datalist">
            <div
              class="item"
              v-for="(item, index) in LJTJdata"
              :class="{ active: currentTab2 === item.name }"
              :key="index"
              @click="changeActTab2(item.name)"
            >
              <img :src="item.img" alt="" />
              <div class="list">
                <div class="value"><num-scroll
                class="s-num"
                v-model="item.value"
                :setting="{
                  dot: 0,
                  isBg: false,
                  width: '14px',
                  height: '25px',
                  time: 60000,
                }"
              />{{item.unit}}</div>
                <div class="name">{{ item.name }}</div>
              </div>
            </div>
          </div>
          <div class="echarts" v-if="currentTab2 === '当日累计量'">
            <OneBar :data="OneBarData2"></OneBar>
          </div>
          <div class="echarts" v-if="currentTab2 === '累计总量'">
            <LineChart :data="lineData"></LineChart>
          </div>
        </div>
      </div>
      <div class="bottom-box2 my-box">
        <div class="sub-title">汇集情况监控</div>
        <div class="content">
          <div class="datalist">
            <div class="item" v-for="(item, index) in HJQKdata" :key="index">
              <img :src="item.img" alt="" />
              <div class="list">
                <div class="value"><num-scroll
                class="s-num"
                v-model="item.value"
                :setting="{
                  dot: 0,
                  isBg: false,
                  width: '14px',
                  height: '25px',
                  time: 60000,
                }"
              />次</div>
                <div class="name">{{ item.name }}</div>
              </div>
            </div>
          </div>
          <div
            class="tableList"
            @mouseenter="stopScroll3"
            @mouseleave="startScroll3"
          >
            <div class="table">
              <li class="thead">
                <ul>
                  <li>序号</li>
                  <li>异常类型</li>
                  <li>信息</li>
                  <li>时间</li>
                </ul>
              </li>
            </div>
            <div class="table DMTablebox">
              <ul class="DMTable2">
                <li class="tbody">
                  <ul v-for="(item, index) in tableData" :key="index">
                    <li>
                      <div class="ellipsis-1">{{ index + 1 }}</div>
                    </li>
                    <li>
                      <div class="ellipsis-1">{{ item.type }}</div>
                    </li>
                    <li>
                      <div class="ellipsis-1">{{ item.message }}</div>
                    </li>
                    <li>
                      <div class="ellipsis-1">{{ item.time }}</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import numScroll from '@/components/numScroll/num-scroll.vue'
import LineChart from '@/components/echarts/Line'
import RadiusPie from '@/components/echarts/RadiusPie.vue'
import OneBar from '@/components/echarts/OneBar.vue'
import {
  getBMGXdata,
  getSJQJdata,
  getCJFSdata,
  getYDLJdata,
  getRLJdata,
  getHJQKdata,
} from '@/api/dataMerger.js'
export default {
  components: {
    RadiusPie,
    OneBar,
    LineChart,
    numScroll,
  },
  data() {
    return {
      tabTimId1: null,
      timeId: null,
      totalTimeId: null,
      currentTab1: 'today',
      tabnum1: 0,
      currentTab1Arr: ['today', 'month'],
      tabTimId2: null,
      currentTab2: '当日累计量',
      tabnum2: 0,
      currentTab2Arr: ['当日累计量', '累计总量'],
      top10Data: [
        // {
        //   name: '区生态环境局',
        //   value: 0,
        // },
      ],
      OneBarFlag: false,
      YDLJtotal: 0,
      OneBarData: {
        xData: [
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
        ],
        yData: {
          name: '数据量（亿条）',
          value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // *6.54汇率
        },
      },
      OneBarData2: {
        xData: ['-', '-', '-', '-', '-', '-', '-'],
        yData: {
          name: '当日累计量（万条）',
          value: [0, 0, 0, 0, 0, 0, 0], // *6.54汇率
        },
        color: '#5FDCFB',
        text: '近7天日累计数据',
      },
      listData: {
        sj: [
          {
            name: '下发数据表',
            value: 0,
            unit: '条',
          },
          {
            name: '下发交换量',
            value: 0,
            unit: '万条',
          },
          {
            name: '市级提供资源量',
            value: 0,
            unit: '条',
          },
          {
            name: '市级接口调用量',
            value: 0,
            unit: '万条',
          },
        ],
        qj: [
          {
            name: '汇聚部门量',
            value: 0,
            unit: '个',
          },
          {
            name: '汇聚系统量',
            value: 0,
            unit: '个',
          },
          {
            name: '汇聚库表',
            value: 0,
            unit: '个',
          },
          {
            name: '汇聚交换量',
            value: 0,
            unit: '亿条',
          },
        ],
      },
      radiusPieFlag: false,
      pieWithLegendData: {
        openRadius: false,
        showLegend: true,
        showLabelLine: false,
        showLabel: false,
        radius: [55, 80],
        center: ['28%', '50%'],
        unit: '亿元',
        name: '产值',
        data: [
          { value: 0, name: '库表汇聚' },
          { value: 0, name: '接口汇聚' },
          { value: 0, name: '其他' },
        ],
      },
      LJTJdata: [
        {
          img: require('../../assets/imgs/dataMerger/ljsj.png'),
          name: '当日累计量',
          value: 0,
          unit: '万条',
        },
        {
          img: require('../../assets/imgs/dataMerger/dtsl.png'),
          name: '累计总量',
          value: '0',
          unit: '亿条',
        },
      ],
      lineData: {
        text: '累计总量趋势图',
        xData: ['-', '-', '-', '-', '-', '-', '-'],
        yData: [0, 0, 0, 0, 0, 0, 0],
        name: '累计总量（亿条）',
        color: ['#45D2D1', '#7C7BFF'],
      },
      HJQKdata: [
        {
          img: require('../../assets/imgs/dataMerger/jkyc.png'),
          name: '接口异常统计',
          value: '0',
        },
        {
          img: require('../../assets/imgs/dataMerger/kbyc.png'),
          name: '库表异常统计',
          value: '0',
        },
      ],
      tableData: [
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
        {
          time: '2021-06-22',
          message: '信息',
          type: '异常类型',
        },
      ],
    }
  },
  computed: {
    setoption() {
      return {
        step: 0.4,
      }
    },
  },
  methods: {
    getBMGXdata() {
      getBMGXdata({ range: this.currentTab1 })
        .then((data) => {
          console.log('getBMGXdata', data)
          this.top10Data = data
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getSJQJdata() {
      getSJQJdata()
        .then((data) => {
          console.log('getSJQJdata', data)
          this.listData.sj[0].value = data.sj['下发数据表']
          this.listData.sj[1].value = data.sj['下发交换量']
          this.listData.sj[2].value = data.sj['市级提供资源量']
          this.listData.sj[3].value = data.sj['市级接口调用量']
          this.listData.qj[0].value = data.qj['汇聚部门量']
          this.listData.qj[1].value = data.qj['汇聚系统量']
          this.listData.qj[2].value = data.qj['汇聚库标量']
          this.listData.qj[3].value = data.qj['汇聚交换量']
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getCJFSdata() {
      getCJFSdata()
        .then((data) => {
          console.log('getCJFSdata', data)
          this.radiusPieFlag = true
          this.pieWithLegendData.data = data
        })
        .catch((e) => {
          console.log(e)
          this.radiusPieFlag = true
        })
    },
    getYDLJdata() {
      getYDLJdata()
        .then((data) => {
          console.log('getYDLJdata', data)
          this.OneBarFlag = true
          this.YDLJtotal = data.total
          this.OneBarData.xData = data.echarts.xData
          this.OneBarData.yData.value = data.echarts.yData
        })
        .catch((e) => {
          console.log(e)
          this.OneBarFlag = true
        })
    },
    getRLJdata() {
      getRLJdata()
        .then((data) => {
          console.log('getRLJdata', data)
          this.LJTJdata[0].value = data.list['当日累计量']
          this.LJTJdata[1].value = data.list['累计总量']
          this.OneBarData2.xData = data.DRLJ.xData
          this.OneBarData2.yData.value = data.DRLJ.yData
          this.lineData.xData = data.LJZL.xData
          this.lineData.yData = data.LJZL.yData
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getHJQKdata() {
      getHJQKdata()
        .then((data) => {
          console.log('getHJQKdata', data)
          this.HJQKdata[0].value = data.list['接口异常统计']
          this.HJQKdata[1].value = data.list['库表异常统计']
          this.tableData = data.table
        })
        .catch((e) => {
          console.log(e)
        })
    },
    stopScroll1() {
      clearInterval(this.tabTimId1)
    },
    startTabScroll1() {
      this.tabTimId1 = setInterval(() => {
        this.changeTabnum1()
      }, 12000)
    },
    changeTabnum1() {
      this.tabnum1--
      if (this.tabnum1 < 0) {
        this.tabnum1 = this.currentTab1Arr.length - 1
      }
      this.currentTab1 = this.currentTab1Arr[this.tabnum1]
      this.changeActTab1(this.currentTab1)
    },
    changeActTab1(item) {
      this.currentTab1 = item
      this.getBMGXdata()
    },
    stopScroll2() {
      clearInterval(this.tabTimId2)
    },
    startTabScroll2() {
      this.tabTimId2 = setInterval(() => {
        this.changeTabnum2()
      }, 12000)
    },
    changeTabnum2() {
      this.tabnum2--
      if (this.tabnum2 < 0) {
        this.tabnum2 = this.currentTab2Arr.length - 1
      }
      this.currentTab2 = this.currentTab2Arr[this.tabnum2]
      this.changeActTab2(this.currentTab2)
    },
    changeActTab2(item) {
      this.currentTab2 = item
    },
    stopScroll3() {
      clearInterval(this.timeId)
    },
    startScroll3() {
      let ul1 = document.querySelectorAll('.DMTable2')
      let ulbox = document.querySelectorAll('.DMTablebox')
      this.timeId = setInterval(() => {
        if (
          ul1[0].offsetHeight - ulbox[0].offsetHeight <=
          Math.ceil(ulbox[0].scrollTop)
        ) {
          $('.DMTablebox').animate(
            {
              scrollTop: 0,
            },
            0
          )
        } else {
          let val = ulbox[0].scrollTop + 42
          $('.DMTablebox').animate(
            {
              scrollTop: val,
            },
            3000
          )
        }
        // console.log('inner', ul1[0].offsetHeight)
        // console.log('outer', ulbox[0].offsetHeight)
        // console.log('scroll', ulbox[0].scrollTop)
      }, 5000)
    },
  },
  destroyed() {
    clearInterval(this.totalTimeId)
    clearInterval(this.tabTimId1)
    clearInterval(this.tabTimId2)
    clearInterval(this.timeId)
  },
  created() {
    this.getBMGXdata()
    this.getSJQJdata()
    this.getCJFSdata()
    this.getYDLJdata()
    this.getRLJdata()
    this.getHJQKdata()
    this.totalTimeId = setInterval(() => {
      this.getBMGXdata()
      this.getSJQJdata()
      this.getCJFSdata()
      this.getYDLJdata()
      this.getRLJdata()
      this.getHJQKdata()
    }, 5 * 60 * 1000)
  },
  mounted() {
    // this.startTabScroll1()
    this.startTabScroll2()
    let ulbox = document.querySelectorAll('.DMTablebox')
    ulbox[0].scrollTop = 0
    this.startScroll3()
  },
}
</script>
<style lang='less' scoped>
.s-num {
  font-weight: 600;
  height: 21px;
  line-height: 21px;
}
.my-box {
  background: rgba(13, 39, 72, 0.5);
  border: 1px solid rgba(37, 115, 239, 0.3);
  display: flex;
  flex-direction: column;
  .sub-title {
    height: 44px;
    line-height: 44px;
    background: rgba(70, 163, 218, 0.17);
    border-bottom: 1px solid rgba(37, 115, 239, 0.3);
    position: relative;
    padding-left: 61px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      height: 44px;
      width: 38px;
      background: url('../../assets/imgs/dataMerger/btfh2.png') no-repeat center
        center;
      background-size: 100% 35%;
      position: absolute;
      left: 10px;
    }
    &::after {
      content: '';
      display: inline-block;
      height: 44px;
      width: 38px;
      background: url('../../assets/imgs/dataMerger/btfh.png') no-repeat center
        center;
      background-size: 100% 35%;
      position: absolute;
      right: 20px;
    }
  }
  .content {
    flex: 1;
    position: relative;
  }
}
.dataMerger {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-box {
  height: 550px;
  display: flex;
  justify-content: space-between;
  .top-left-box {
    width: 512px;
    height: 100%;
    .content {
      overflow: hidden;
      ul {
        li {
          height: 54px;
          margin-top: 5px;
          display: flex;
          padding-left: 35px;
          align-items: center;
          position: relative;
          &:nth-child(1) img {
            opacity: 1;
          }
          &:nth-child(2) img {
            opacity: 0.85;
          }
          &:nth-child(3) img {
            opacity: 0.7;
          }
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            opacity: 0.6;
            z-index: 0;
          }
          .num {
            width: 28px;
            height: 28px;
            background: url('../../assets/imgs/dataMerger/hjm.png') no-repeat
              center center;
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            margin-right: 40px;
            position: relative;
            z-index: 1;
          }
          .name {
            font-size: 14px;
            font-weight: 500;
            position: relative;
            z-index: 1;
          }
          .value {
            font-size: 16px;
            position: absolute;
            left: 242px;
            width: 220px;
            height: 24px;
            .outer {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              .inner {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background: linear-gradient(
                  90deg,
                  #55c6e5bf 0%,
                  #84cafcb1 100%
                );
              }
            }
            span {
              position: absolute;
              left: 10px;
              top: 50%;
              transform: translateY(-50%);
              z-index: 1;
            }
          }
          &:nth-child(1) {
            .num {
              background: url('../../assets/imgs/dataMerger/dym.png') no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
          &:nth-child(2) {
            .num {
              background: url('../../assets/imgs/dataMerger/dem.png') no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
          &:nth-child(3) {
            .num {
              background: url('../../assets/imgs/dataMerger/dsm.png') no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
  .top-right-box {
    width: 1287px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .right-box1 {
      height: 223px;
      width: 100%;
      .list {
        height: 50%;
        display: flex;
        justify-content: space-between;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .value {
            font-size: 22px;
            font-weight: 600;
            line-height: 30px;
          }
          .name {
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
            line-height: 22px;
          }
          &:first-child {
            font-size: 22px;
            font-weight: 600;
            line-height: 30px;
          }
        }
        &.sj li {
          background: url('../../assets/imgs/dataMerger/sjnr.png') no-repeat
            center center;
          background-size: 100% 100%;
          width: 233px;
          height: 77px;
          .value {
            color: #5fdcfb;
          }
          &:first-child {
            background: url('../../assets/imgs/dataMerger/sjbt.png') no-repeat
              center center;
            background-size: 100% 100%;
            color: #5fdcfb;
          }
        }
        &.qj li {
          background: url('../../assets/imgs/dataMerger/qjnr.png') no-repeat
            center center;
          background-size: 100% 100%;
          width: 233px;
          height: 77px;
          .value {
            color: #f2b94a;
          }
          &:first-child {
            background: url('../../assets/imgs/dataMerger/qjbt.png') no-repeat
              center center;
            background-size: 100% 100%;
            color: #f2b94a;
          }
        }
      }
    }
    .right-box2 {
      height: 323px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .right-box2-left {
        width: 414px;
        height: 100%;
        .echarts-title {
          position: absolute;
          left: 79px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          font-weight: 500;
        }
      }
      .right-box2-right {
        width: 834px;
        height: 100%;
        .echarts-title {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 20px;
          font-weight: 600;
          color: #46a4dadb;
          padding: 10px 22px;
          background: url('../../assets/imgs/dataMerger/echarttitle.png')
            no-repeat center center;
          background-size: 100% 100%;
          span {
            margin-left: 15px;
          }
        }
      }
    }
  }
}
.bottom-box {
  height: 323px;
  display: flex;
  justify-content: space-between;
  .bottom-box1 {
    width: 966px;
    height: 100%;
    .content {
      display: flex;
      .datalist {
        width: 270px;
        padding-top: 58px;
        padding-left: 56px;
        .item {
          cursor: pointer;
          display: flex;
          align-items: center;
          opacity: 0.5;
          transition: all 0.5s;
          &.active {
            opacity: 1;
          }
          &:nth-child(1) {
            margin-bottom: 46px;
            .list {
              .value {
                color: #5fdcfb;
              }
            }
          }
          img {
            width: 62px;
            height: 62px;
            margin-right: 13px;
          }
          .list {
            flex: 1;
            .name {
              font-size: 16px;
            }
            .value {
              font-size: 22px;
              font-weight: 600;
              color: #00e8bf;
              margin-bottom: 3px;
            }
          }
        }
      }
      .echarts {
        flex: 1;
      }
    }
  }
  .bottom-box2 {
    width: 834px;
    height: 100%;
    .content {
      display: flex;
      .datalist {
        width: 270px;
        padding-top: 58px;
        padding-left: 50px;
        .item {
          display: flex;
          align-items: center;
          &:nth-child(1) {
            margin-bottom: 46px;
            .list {
              .value {
                color: #d6ab52;
              }
            }
          }
          img {
            width: 62px;
            height: 62px;
            margin-right: 13px;
          }
          .list {
            flex: 1;
            .name {
              font-size: 16px;
            }
            .value {
              font-size: 22px;
              font-weight: 600;
              color: #b76845;
              margin-bottom: 3px;
            }
          }
        }
      }
      .tableList {
        flex: 1;
        padding-right: 20px;

        .table {
          &:nth-child(2) {
            height: 210px;
            overflow: auto;
            &::-webkit-scrollbar {
              width: 6px !important;
              height: 6px !important;
              -webkit-appearance: none;
              background-color: transparent;
            }

            &::-webkit-scrollbar-thumb {
              height: 5px;
              border: 1px solid transparent;
              border-top: 0;
              border-bottom: 0;
              border-radius: 6px;
              background-color: #36d4fa5f;
              background-clip: padding-box;
            }
          }
          & > li,
          .DMTable2,
          .DMTable22 > li {
            ul {
              display: flex;
              li {
                flex: 2;
                text-align: left;
                &:nth-child(1) {
                  flex: 1;
                }
                &:nth-child(3) {
                  flex: 3;
                }
              }
            }
          }
          .thead {
            ul {
              li {
                color: #46a3da;
                font-size: 18px;
                padding: 16px 5px 7px 5px;
                border-bottom: 1px solid #5fa7c57f;
              }
            }
          }
          .tbody {
            ul {
              &:hover {
                background-color: #36d3fa28;
              }
              li {
                font-size: 16px;
                height: 42px;
                display: flex;
                align-items: center;
                padding: 0 5px;
                justify-content: flex-start;
                border-bottom: 1px solid #ffffff23;
                &:nth-child(1) {
                  color: #cda14b;
                }
                img {
                  cursor: pointer;
                  width: 24px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
