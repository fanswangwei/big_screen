<template>
  <div class="dataShare">
    <div class="top-box">
      <div class="top-left-box">
        <div class="left-box1">
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
        <div class="left-box2">
          <div class="left-box2-sub my-box">
            <div class="sub-title">数据共享情况</div>
            <div class="content">
              <div class="content-echart">
                  <ShareBarData1 :data="OneBarData"></ShareBarData1>
              </div>
              <div class="content-right">
                  <ul>
                      <li>
                          <img style="width:59px;height:49px;" src="../../assets/imgs/dataShare/fz11.png" alt="">
                          <p>
                              <span style="color:#3EC4A9;"><num-scroll
                                            class="s-num"
                                            v-model=" TBLSend"
                                            :setting="{
                                              dot: 0,
                                              isBg: false,
                                              width: '14px',
                                              height: '25px',
                                              time: 60000,
                                            }"
                                          />万次</span>
                              <span>市级库表共享</span>
                          </p>
                      </li>
                      <li>
                          <img style="width:59px;height:49px;" src="../../assets/imgs/dataShare/fz22.png" alt="">
                          <p>
                              <span style="color:#8076FF;"><num-scroll
                                            class="s-num"
                                            v-model="TBLUse1"
                                            :setting="{
                                              dot: 0,
                                              isBg: false,
                                              width: '14px',
                                              height: '25px',
                                              time: 60000,
                                            }"
                                          />万次</span>
                              <span>市级接口共享</span>
                          </p>
                      </li>
                      <li>
                          <img style="width:59px;height:49px;" src="../../assets/imgs/dataShare/fz33.png" alt="">
                          <p>
                              <span style="color:#E49E55;">
                                          <num-scroll
                                            class="s-num"
                                            v-model="TBLUse2"
                                            :setting="{
                                              dot: 0,
                                              isBg: false,
                                              width: '14px',
                                              height: '25px',
                                              time: 60000,
                                            }"
                                          />万次</span>
                              <span>市级库表查询</span>
                          </p>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-center-box">
        <div
        class="top-center-charts1 my-box"
        @mouseenter="stopScroll1"
        @mouseleave="startTabScroll1"
        >
        <div class="sub-title">共享数据量统计</div>
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
                <div class="value">
                  <num-scroll
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
                </div>
            </div>
            </div>
            <div class="echarts" v-if="currentTab2 === '当日共享数据量'">
            <OneBar :data="OneBarData2"></OneBar>
            </div>
            <div class="echarts" v-if="currentTab2 === '累计共享数据量'">
            <LineChart :data="lineData"></LineChart>
            </div>
        </div>
        </div>
      </div>
      <div
        class="top-right-box my-box"
        @mouseenter="stopScroll1"
        @mouseleave="startTabScroll1"
      >
        <div class="sub-title">
          部门数据调用
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
                <img src="../../assets/imgs/dataShare/topbg.png" alt="" />
                <div class="num">{{ index + 1 }}</div>
                <div class="name">{{ item.name }}</div>
                <div class="value">
                  <span>{{ item.value }}</span>
                  <div class="outer">
                    <div
                      class="inner"
                      :style="{
                        width: (item.value / top10Data[0].value) * 100 + '%'
                      }"
                    ></div>
                  </div>
                </div>
              </li>
            </vue-seamless-scroll>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-box">
        <div class="bottom-left-box my-box">
            <div class="sub-title">月度共享情况</div>
            <div class="content">
              <MonthBarShare :data="MonthShareData"></MonthBarShare>
            </div>
        </div>
        <div class="bottom-center-box my-box">
            <div class="sub-title">共享情况监控</div>
            <div class="content">
              <div class="datalist">
                <div class="item" v-for="(item, index) in GXJKdata" :key="index">
                  <img :src="item.img" alt="" />
                  <div class="list">
                    <div class="value">
                      <num-scroll
                      class="s-num"
                      v-model="item.value"
                      :setting="{
                        dot: 0,
                        isBg: false,
                        width: '14px',
                        height: '25px',
                        time: 60000,
                      }"
                    />万条</div>
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
                <div class="table dutyTablebox">
                  <ul class="dutyTable2">
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
        <div class="bottom-right-box my-box">
            <div class="sub-title">纠错信息</div>
            <div class="content">
            <div class="title"><p>近3日共{{totalNumber}}条</p></div>
            <div
            class="tableList"
            @mouseenter="stopScroll4"
            @mouseleave="startScroll4"
          >
            <div class="table">
              <li class="thead">
                <ul>
                  <li>部门</li>
                  <li>问题描述</li>
                  <li>时间</li>
                  <li>状态</li>
                </ul>
              </li>
            </div>
            <div class="table JCTablebox">
              <ul class="JCTable2">
                <li class="tbody">
                  <ul v-for="(item,index) in correctList" :key="index">
                    <li>
                      <div class="ellipsis-1">{{item.branch}}</div>
                    </li>
                    <li>
                      <div class="ellipsis-1">{{item.question}}</div>
                    </li>
                    <li>
                      <div class="ellipsis-1">{{item.time}}</div>
                    </li>
                    <li>
                      <div class="ellipsis-1">{{item.state}}</div>
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
import numScroll from '../../components/numScroll/num-scroll.vue'
import LineChart from '@/components/echarts/DataShare/Line.vue'
import OneBar from '@/components/echarts/DataShare/OneBar.vue'
import ShareBarData1 from '@/components/echarts/DataShare/ShareBarData1.vue'
import MonthBarShare from '@/components/echarts/DataShare/MonthBarShare.vue'
import {
  getSJQJdata,
  getSharedata,
  getShareStatisticsdata,
  getBranchdata,
  getMonthSharedata,
  getShareMonitordata,
  getWrongdata,
} from '@/api/dataShare.js'
export default {
  components: {
    OneBar,
    LineChart,
    ShareBarData1,
    MonthBarShare,
    numScroll,
  },
  name: '',
  data() {
    return {
      TBLSend: '',
      TBLUse1: '',
      TBLUse2: '',
      tabTimId1: null,
      currentTab1: 'today',
      tabnum1: 0,
      currentTab1Arr: ['today', 'month'],
      tabTimId2: null,
      currentTab2: '当日共享数据量',
      tabnum2: 0,
      currentTab2Arr: ['当日共享数据量', '累计共享数据量'],
      totalNumber: '',
      timeId1: '',
      tableData: [
        {
          type: '异常类型',
          message: '信息',
          time: '2021-06-22',
        },
        {
          type: '异常类型',
          message: '信息',
          time: '2021-06-22',
        },
        {
          type: '异常类型',
          message: '信息',
          time: '2021-06-22',
        },
        {
          type: '异常类型',
          message: '信息',
          time: '2021-06-22',
        },
        {
          type: '异常类型',
          message: '信息',
          time: '2021-06-22',
        },
        {
          type: '异常类型',
          message: '信息',
          time: '2021-06-22',
        },
      ],
      correctList: [
        {
          branch: 'xxxx部门',
          question: '问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述 ',
          time: '2021-06-21',
          state: '状态',
        },
        {
          branch: 'xxxx部门',
          question: '问题描述',
          time: '2021-06-21',
          state: '状态',
        },
        {
          branch: 'xxxx部门',
          question: '问题描述',
          time: '2021-06-21',
          state: '状态',
        },
        {
          branch: 'xxxx部门',
          question: '问题描述',
          time: '2021-06-21',
          state: '状态',
        },
        {
          branch: 'xxxx部门',
          question: '问题描述',
          time: '2021-06-21',
          state: '状态',
        },
        {
          branch: 'xxxx部门',
          question: '问题描述',
          time: '2021-06-21',
          state: '状态',
        },
        {
          branch: 'xxxx部门',
          question: '问题描述',
          time: '2021-06-21',
          state: '状态',
        },
      ],
      GXJKdata: [
        {
          img: require('../../assets/imgs/dataShare/dtkbyc.png'),
          name: '当天库表异常',
          value: '0',
        },
        {
          img: require('../../assets/imgs/dataShare/dtjkyc.png'),
          name: '当天接口异常',
          value: '0',
        },
      ],
      top10Data: [
        // {
        //   name: '',
        //   value: '',
        // },
      ],
      YDLJtotal: 0,
      OneBarData: {
        data: [{
          value: '',
          name: '',
        },
        ],
        number: '',
      },
      OneBarData2: {
        xData: [],
        yData: {
          name: '数据量(万条)',
          value: [],
        },
        color: '#5FDCFB',
        text: '近7日总量趋势图',
      },
      MonthShareData: {
        xData: [],
        yData: {
          name: '月度数据量(万条)',
          value: [],
        },
      },
      listData: {
        sj: [
          {
            name: '上报目录量',
            unit: '个',
          },
          {
            name: '上报数据表',
            unit: '个',
          },
          {
            name: '上报日志量',
            unit: '万次',
          },
        ],
        qj: [
          {
            name: '共享部门',
            unit: '个',
          },
          {
            name: '共享系统',
            unit: '个',
          },
          {
            name: '共享库表量',
            unit: '个',
          },
          {
            name: '共享交换量',
            unit: '亿条',
          },
        ],
      },
      radiusPieFlag: false,
      LJTJdata: [
        {
          img: require('../../assets/imgs/dataShare/ljsj.png'),
          name: '当日共享数据量',
          value: 0,
          unit: '万条',
        },
        {
          img: require('../../assets/imgs/dataShare/ljgxsl.png'),
          name: '累计共享数据量',
          value: '0',
          unit: '亿条',
        },
      ],
      lineData: {
        text: '累计总量趋势图',
        xData: [],
        yData: [],
        name: '累计总量(亿条)',
        color: ['#45D2D1', '#7C7BFF'],
      },
    }
  },
  created() {
    this.getSJQJdata()
    this.getSharedata()
    this.getShareStatisticsdata()
    this.getBranchdata()
    this.getMonthSharedata()
    this.getShareMonitordata()
    this.getWrongdata()
    this.totalTimeId = setInterval(() => {
      this.getSJQJdata()
      this.getSharedata()
      this.getShareStatisticsdata()
      this.getBranchdata()
      this.getMonthSharedata()
      this.getShareMonitordata()
      this.getWrongdata()
    }, 5 * 60 * 1000)
  },
  computed: {
    setoption() {
      return {
        step: 0.4,
      }
    },
  },
  mounted() {
    this.startTabScroll1()
    this.startTabScroll2()
    let ulbox = document.querySelectorAll('.dutyTablebox')
    ulbox[0].scrollTop = 0
    this.startScroll3()
    let ulbox1 = document.querySelectorAll('.JCTablebox')
    ulbox1[0].scrollTop = 0
    this.startScroll4()
  },
  methods: {
    getSJQJdata() {
      getSJQJdata()
        .then((data) => {
          console.log('getSJQJdata', data)
          this.listData.sj[0].value = data.sj[0].value
          this.listData.sj[1].value = data.sj[1].value
          this.listData.sj[2].value = data.sj[2].value
          this.listData.qj[0].value = data.qj[0].value
          this.listData.qj[1].value = data.qj[1].value
          this.listData.qj[2].value = data.qj[2].value
          this.listData.qj[3].value = data.qj[3].value
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getSharedata() {
      getSharedata()
        .then((data) => {
          console.log('getSharedata', data)
          this.TBLSend = data.TBLSEND
          this.TBLUse1 = data.TBLUSE1
          this.TBLUse2 = data.TBLUse2
          this.OneBarData.data = data.echarts
          this.OneBarData.number = data.Number
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getShareStatisticsdata() {
      getShareStatisticsdata()
        .then((data) => {
          console.log('getShareStatisticsdata', data)
          this.LJTJdata[0].value = data.list[0].value
          this.LJTJdata[1].value = data.list[1].value
          this.OneBarData2.xData = data.JQRZL.xData
          this.OneBarData2.yData.value = data.JQRZL.yData
          this.lineData.xData = data.LJZL.xData
          this.lineData.yData = data.LJZL.yData
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getBranchdata() {
      getBranchdata({ range: this.currentTab1 })
        .then((data) => {
          console.log('getBranchdata', data)
          this.top10Data = data
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getMonthSharedata() {
      getMonthSharedata()
        .then((data) => {
          console.log('getMonthSharedata', data)
          this.MonthShareData.xData = data.xData
          this.MonthShareData.yData.value = data.yData
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getShareMonitordata() {
      getShareMonitordata()
        .then((data) => {
          console.log('getShareMonitordata', data)
          this.GXJKdata[0].value = data.list['当天库表异常']
          this.GXJKdata[1].value = data.list['当天接口异常']
          this.tableData = data.list2
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getWrongdata() {
      getWrongdata()
        .then((data) => {
          console.log('getWrongdata', data)
          this.totalNumber = data.totalNumber
          this.correctList = data.list
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
      this.getBranchdata() // 获取对应数据
    },
    changeTabnum2() {
      this.tabnum2--
      if (this.tabnum2 < 0) {
        this.tabnum2 = this.currentTab2Arr.length - 1
      }
      this.currentTab2 = this.currentTab2Arr[this.tabnum2]
      this.changeActTab2(this.currentTab2)
    },
    startTabScroll2() {
      this.tabTimId2 = setInterval(() => {
        this.changeTabnum2()
      }, 12000)
    },
    changeActTab2(item) {
      this.currentTab2 = item
    },
    stopScroll3() {
      clearInterval(this.timeId)
    },
    stopScroll4() {
      clearInterval(this.timeId1)
    },
    startScroll3() {
      let ul1 = document.querySelectorAll('.dutyTable2')
      let ulbox = document.querySelectorAll('.dutyTablebox')
      this.timeId = setInterval(() => {
        if (
          ul1[0].offsetHeight - ulbox[0].offsetHeight <= Math.ceil(ulbox[0].scrollTop)
        ) {
          $('.dutyTablebox').animate(
            {
              scrollTop: 0,
            },
            0
          )
        } else {
          let val = ulbox[0].scrollTop + 42
          $('.dutyTablebox').animate(
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
    startScroll4() {
      let ul2 = document.querySelectorAll('.JCTable2')
      let ulbox1 = document.querySelectorAll('.JCTablebox')
      this.timeId1 = setInterval(() => {
        if (
          ul2[0].offsetHeight - ulbox1[0].offsetHeight <= Math.ceil(ulbox1[0].scrollTop)
        ) {
          $('.JCTablebox').animate(
            {
              scrollTop: 0,
            },
            0
          )
        } else {
          let val = ulbox1[0].scrollTop + 42
          $('.JCTablebox').animate(
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
    clearInterval(this.timeId1)
    clearInterval(this.timeId)
  },
}
</script>
<style lang="less" scoped>
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
.dataShare {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-box {
  height: 498px;
  display: flex;
  justify-content: space-between;
  .top-left-box {
    width: 704px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .left-box1 {
      height: 197px;
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
          background: url('../../assets/imgs/dataShare/sj2.png') no-repeat
            center center;
          background-size: 100% 100%;
          width: 157px;
          height: 77px;
          .value {
            color: #5fdcfb;
          }
          &:first-child {
            background: url('../../assets/imgs/dataShare/sj1.png') no-repeat
              center center;
            background-size: 100% 100%;
            color: #5fdcfb;
          }
        }
        &.qj li {
          background: url('../../assets/imgs/dataShare/qj2.png') no-repeat
            center center;
          background-size: 100% 100%;
          width: 128px;
          height: 88px;
          .value {
            color: #f2b94a;
          }
          &:first-child {
            background: url('../../assets/imgs/dataShare/qj1.png') no-repeat
              center center;
            background-size: 100% 100%;
            color: #f2b94a;
          }
        }
      }
    }
    .left-box2 {
      height: 297px;
      .left-box2-sub {
        width: 704px;
        height: 100%;
        .content{
         display: flex;
         .content-echart{
           width: 352px;
           height: 250px;
         }
         .content-right{
          width: 352px;
          padding-top: 30px;
          padding-left: 56px;
          ul{
              li{
                  line-height: 65px;
                  p{
                      position: absolute;
                      text-align: center;
                      margin-left: 70px;
                      margin-top: -49px;
                      span{
                          display: block;
                          &:first-child{
                            font-size: 18px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            line-height: 25px;
                          }
                          &:last-child{
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 20px;
                          }
                      }
                  }
              }
          }
         }
        }
      }
    }
  }
  .top-center-box {
    .top-center-charts1 {
      width: 597px;
      height: 100%;
      .content {
      .datalist {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
        padding-left: 80px;
        padding-right: 80px;
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
        width: 100%;
        height: 350px
      }
    }
    }
  }
  .top-right-box {
    width: 480px;
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
            background: url('../../assets/imgs/dataShare/hjm.png') no-repeat
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
              background: url('../../assets/imgs/dataShare/dym.png') no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
          &:nth-child(2) {
            .num {
              background: url('../../assets/imgs/dataShare/dem.png') no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
          &:nth-child(3) {
            .num {
              background: url('../../assets/imgs/dataShare/dsm.png') no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
}
.bottom-box{
    height: 375px;
    display: flex;
    justify-content: space-between;
    .bottom-left-box{
        width: 600px;
        .content{
          width: 95%;
          margin-left: 20px;
        }
    }
    .bottom-center-box{
    width: 694px;
    height: 100%;
    .content {
      display: flex;
      .datalist {
        width: 320px;
        padding-top: 30px;
        padding-left: 50px;
        .item {
          display: flex;
          align-items: center;
          &:nth-child(1) {
            margin-bottom: 46px;
            .list {
              .value {
                color: #5FDCFB;
              }
            }
          }
          img {
            width: 190px;
            height: 90px;
            margin-right: 13px;
          }
          .list {
            position: absolute;
            margin-left: 85px;
            flex: 1;
            .name {
              font-size: 16px;
            }
            .value {
              font-size: 22px;
              font-weight: 600;
              color: #00E8BF  ;
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
          .dutyTable2,
          .dutyTable22 > li {
            ul {
              display: flex;
              li {
                flex: 2;
                text-align: left;
                &:nth-child(1) {
                  flex: 1;
                }
                &:nth-child(3) {
                  flex: 1;
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
    .bottom-right-box{
    width: 479px;
    height: 100%;
    .content {
      text-align: center;
      display: flex;
      flex-direction: column;
      .title{
          p{
            padding: 18px 0 5px 0;
              font-size: 20px;
              font-weight: 500;
              color: #5BB1E5;
              text-shadow: 0px 2px 7px #5BB1E5;
          }
      }
      .tableList {
        flex: 1;
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
          .JCTable2,
          .JCTable22 > li {
            ul {
              display: flex;
              li {
                flex: 2;
                text-align: left;
                &:nth-child(2) {
                  flex: 4;
                }
                &:nth-child(4) {
                  flex: 1;
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
