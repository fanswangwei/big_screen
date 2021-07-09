<!--  -->
<template>
  <div class="GZW-main">
    <!-- 左边部分 -->
    <div class="content-left subcontent">
      <div class="left-topContent halfContent">
        <div class="title">
          <img
            src="../../assets/imgs/GZWParty/trangle.png"
            alt=""
          />召开三重一大会议情况
        </div>
        <div class="contents">
          <div class="contentFirst">
            <div class="Firsttitle">
              <span>完成三重一大制度</span>
              <span>上传企业数</span>
            </div>
            <div class="Firstcontent">
              <span>企业数:</span><span>{{ companies }}个</span>
            </div>
          </div>
          <div class="contentSecond">
            <div class="Secondtitle">
              <span>当年截止至今</span>
              <span>会议情况</span>
            </div>
            <div class="Secondcontent">
              <p>
                <span>会议数:</span><span>{{ meeting }}个</span>
              </p>
              <p>
                <span>议题数:</span><span>{{ issue }}个</span>
              </p>
              <p>
                <span>异常情况:</span><span>{{ abnormal }}个</span>
              </p>
            </div>
          </div>
          <div class="contentThird">
            <div class="Thirdtitle">
              <span>党的十九大以来累计召开会议</span>
            </div>
            <div class="Thirdcontent">
              <div class="Third-left">
                <p>
                  <span>会议数:</span><span>{{ meetingSecond }}次</span>
                </p>
                <p>
                  <span>通过:</span><span>{{ accross }}项</span>
                </p>
                <p>
                  <span>否决:</span><span>{{ refuse }}项</span>
                </p>
              </div>
              <div class="Third-right">
                <p>
                  <span>议题数:</span><span>{{ issueSecond }}项</span>
                </p>
                <p>
                  <span>缓议:</span><span>{{ slowDisscusion }}项</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-middleContent halfContent">
        <div class="left-middleContent-first contentChild">
          <div class="title">
            <img src="../../assets/imgs/GZWParty/trangle.png" alt="" />
            重大事项决策
          </div>
          <div class="contents">
            <div class="contents-child">
              <RadiuPie :data="dataFirst"></RadiuPie>
            </div>
            <div class="contents-child">
              <RadiuPieSecond :data="dataSecond"></RadiuPieSecond>
            </div>
          </div>
        </div>
        <div class="left-bottomContent-second contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />重要人事任免
          </div>
          <div class="contents">
            <div class="contents-child">
              <RadiuPieThird :data="dataThird"></RadiuPieThird>
            </div>
            <div class="contents-child">
              <RadiuPieFourth :data="dataFourth"></RadiuPieFourth>
            </div>
          </div>
        </div>
      </div>
      <div class="left-bottomContent halfContent">
        <div class="left-bottomContent-first contentChild">
          <div class="title">
            <img src="../../assets/imgs/GZWParty/trangle.png" alt="" />
            重大项目安排事项
          </div>
          <div class="contents">
            <div class="contents-child">
              <RadiuPieFifty :data="dataFifty"></RadiuPieFifty>
            </div>
            <div class="contents-child">
              <RadiuPieSixth :data="dataSixth"></RadiuPieSixth>
            </div>
          </div>
        </div>
        <div class="left-bottomContent-second contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />大额资金运作事项
          </div>
          <div class="contents">
            <div class="contents-child">
              <RadiuPieSeventh :data="dataSeventh"></RadiuPieSeventh>
            </div>
            <div class="contents-child">
              <RadiuPieEighth :data="dataEighth"></RadiuPieEighth>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="content-middle subcontent">
      <div class="middle-title">
        <span>上海特色</span>
      </div>
      <div class="middle-content">
        <div class="content-images">
          <div class="cone01">
            <img src="../../assets/imgs/GZWParty/2.png" alt="" />
          </div>
          <div class="cone02">
            <img src="../../assets/imgs/GZWParty/5.png" alt="" />
          </div>
          <div class="cone03">
            <img src="../../assets/imgs/GZWParty/8.png" alt="" />
          </div>
          <div class="cone04">
            <img src="../../assets/imgs/GZWParty/7.png" alt="" />
          </div>
          <div class="cone05">
            <img src="../../assets/imgs/GZWParty/1.png" alt="" />
          </div>
          <div class="cone06">
            <img src="../../assets/imgs/GZWParty/3.png" alt="" />
          </div>
          <div class="cone07">
            <img src="../../assets/imgs/GZWParty/6.png" alt="" />
          </div>
        </div>
        <div class="content-text">
          <div class="text01">
            <span>临港新片区</span>
            <span
              >议题总计{{ list.issuesLG }}项&nbsp;&nbsp;已组织实施{{
                list.doneLG
              }}项</span
            >
          </div>
          <div class="text02">
            <span>科创板</span>
            <span
              >议题总计{{ list.issuesKCB }}项&nbsp;&nbsp;已组织实施{{
                list.doneKCB
              }}项</span
            >
          </div>
          <div class="text03">
            <span>长三角一体化</span>
            <span
              >议题总计{{ list.issuesCSJ }}项&nbsp;&nbsp;已组织实施{{
                list.doneCSJ
              }}项</span
            >
          </div>
          <div class="text04">
            <span>进博会</span>
            <span
              >议题总计{{ list.issuesJBH }}项&nbsp;&nbsp;已组织实施{{
                list.doneJBH
              }}项</span
            >
          </div>
          <div class="text05">
            <span>四大品牌</span>
            <span
              >议题总计{{ list.issuesPP }}项&nbsp;&nbsp;已组织实施{{
                list.donePP
              }}项</span
            >
          </div>
          <div class="text06">
            <span>五大新城</span>
            <span
              >议题总计{{ list.issuesXC }}项&nbsp;&nbsp;已组织实施{{
                list.doneXC
              }}项</span
            >
          </div>
          <div class="text07">
            <span>股权激励</span>
            <span
              >议题总计{{ list.issuesGQ }}项&nbsp;&nbsp;已组织实施{{
                list.doneGQ
              }}项</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="content-right subcontent">
      <div class="left-contents">
        <div class="title">
          <img
            src="../../assets/imgs/GZWParty/trangle.png"
            alt=""
          />十九大以来会议/议题类型数量
        </div>
        <div class="total-content">
          <div
            class="content-top"
            @mouseenter="stopScroll1"
            @mouseleave="startTabScroll1"
          >
            <div class="top-title"><p>会议</p></div>
            <div class="sub-title">
              <div class="tab">
                <ul class="ul-tab">
                  <li
                    @click="changeActTab1('type')"
                    :class="{ act: currentTab1 == 'type' }"
                  >
                    类型
                  </li>
                  <li
                    @click="changeActTab1('year')"
                    :class="{ act: currentTab1 == 'year' }"
                  >
                    年度
                  </li>
                </ul>
              </div>
            </div>
            <div class="echarts" v-if="currentTab1 === 'type'">
              <BarSecond :data="dataNine"></BarSecond>
            </div>
            <div class="echarts" v-if="currentTab1 === 'year'">
              <BarThird :data="dataTenth"></BarThird>
            </div>
          </div>
          <div
            class="content-bottom"
            @mouseenter="stopScroll2"
            @mouseleave="startTabScroll2"
          >
            <div class="top-title"><p>议题</p></div>
            <div class="sub-title">
              <div class="tab">
                <ul class="ul-tab">
                  <li
                    @click="changeActTab2('type')"
                    :class="{ act: currentTab2 == 'type' }"
                  >
                    类型
                  </li>
                  <li
                    @click="changeActTab2('year')"
                    :class="{ act: currentTab2 == 'year' }"
                  >
                    年度
                  </li>
                </ul>
              </div>
            </div>
            <div class="echarts" v-if="currentTab2 === 'type'">
              <BarSecond :data="dataEleven"></BarSecond>
            </div>
            <div class="echarts" v-if="currentTab2 === 'year'">
              <BarThird :data="dataTwelve"></BarThird>
            </div>
          </div>
        </div>
      </div>
      <div class="right-contents">
        <div class="right-bottomContent-first contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />十九大以来逐年异常占比及数目情况
          </div>
          <div class="contents">
            <Bar :data="thirteen"></Bar>
          </div>
        </div>
        <div class="right-bottomContent-second contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />异常占比及数目情况
          </div>
          <div
            class="contents"
            @mouseenter="stopScroll3"
            @mouseleave="startTabScroll3"
          >
            <div class="sub-title">
              <div class="tab">
                <ul class="ul-tab">
                  <li
                    @click="changeActTab3('fromN')"
                    :class="{ act: currentTab3 == 'fromN' }"
                  >
                    十九大以来
                  </li>
                  <li
                    @click="changeActTab3('curr')"
                    :class="{ act: currentTab3 == 'curr' }"
                  >
                    当年截至至今
                  </li>
                </ul>
              </div>
            </div>
            <div class="echarts" v-if="currentTab3 === 'fromN'">
              <RadiuPieNine :data="fourteen"></RadiuPieNine>
            </div>
            <div class="echarts" v-if="currentTab3 === 'curr'">
              <RadiuPieTenth :data="fifteen"></RadiuPieTenth>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/fonts.css'
import RadiuPie from '@/components/echarts/GZWParty/RadiuPie.vue'
import RadiuPieSecond from '@/components/echarts/GZWParty/RadiuPie02.vue'
import RadiuPieThird from '@/components/echarts/GZWParty/RadiuPie03.vue'
import RadiuPieFourth from '@/components/echarts/GZWParty/RadiuPie04.vue'
import RadiuPieFifty from '@/components/echarts/GZWParty/RadiuPie05.vue'
import RadiuPieSixth from '@/components/echarts/GZWParty/RadiuPie06.vue'
import RadiuPieSeventh from '@/components/echarts/GZWParty/RadiuPie07.vue'
import RadiuPieEighth from '@/components/echarts/GZWParty/RadiuPie08.vue'
import RadiuPieNine from '@/components/echarts/GZWParty/RadiuPie09.vue'
import RadiuPieTenth from '@/components/echarts/GZWParty/RadiuPie10.vue'
import Bar from '@/components/echarts/GZWParty/Bar.vue'
import BarSecond from '@/components/echarts/GZWParty/Bar02.vue'
import BarThird from '@/components/echarts/GZWParty/Bar03.vue'
export default {
  components: {
    RadiuPie,
    RadiuPieSecond,
    RadiuPieThird,
    RadiuPieFourth,
    RadiuPieFifty,
    RadiuPieSixth,
    RadiuPieSeventh,
    RadiuPieEighth,
    RadiuPieNine,
    RadiuPieTenth,
    Bar,
    BarSecond,
    BarThird,
  },
  data() {
    return {
      companies: 105,
      meeting: 123,
      issue: 2,
      abnormal: 78,
      meetingSecond: 105,
      issueSecond: 76,
      accross: 65,
      slowDisscusion: 8,
      refuse: 3,
      dataFirst: {
        data: [
          { value: 2345, name: '发展战略' },
          { value: 2345, name: '资产调整' },
          { value: 2345, name: '对外投资' },
          { value: 2345, name: '上级重要决定' },
          { value: 2345, name: '机构调整' },
        ],
      },
      dataSecond: {
        data: [
          { value: 111, name: '对外投资' },
          { value: 111, name: '机构调整' },
          { value: 111, name: '上级重要决定' },
          { value: 111, name: '发展战略' },
          { value: 111, name: '资产调整' },
        ],
      },
      dataThird: {
        data: [
          { value: 222, name: '成员任免' },
          { value: 222, name: '成员解聘' },
          { value: 222, name: '推荐董事会成员' },
          { value: 222, name: '领导班子成员解聘' },
          { value: 222, name: '领导班子成员任免' },
        ],
      },
      dataFourth: {
        data: [
          { value: 222, name: '任免' },
          { value: 222, name: '解聘' },
          { value: 222, name: '推荐董事会成员' },
          { value: 222, name: '成员解聘' },
          { value: 222, name: '成员任免' },
        ],
      },
      dataFifty: {
        data: [
          { value: 333, name: '融资' },
          { value: 333, name: '担保项目' },
          { value: 333, name: '年度投资计划' },
          { value: 333, name: '重大工程建设项目' },
          { value: 333, name: '重要设备和技术引进' },
        ],
      },
      dataSixth: {
        data: [
          { value: 444, name: '年度投资计划' },
          { value: 444, name: '重大工程建设' },
          { value: 444, name: '重要设备和技术引进' },
          { value: 444, name: '融资' },
          { value: 444, name: '担保项目' },
        ],
      },
      dataSeventh: {
        data: [
          { value: 555, name: '年度预算内大额度资金调动和使用' },
          { value: 555, name: '超预算的资金调动和使用' },
          { value: 555, name: '对外大额捐赠赞助' },
        ],
      },
      dataEighth: {
        data: [
          { value: 555, name: '年度预算内大额度资金调动和使用' },
          { value: 555, name: '超预算的资金调动和使用' },
          { value: 555, name: '对外大额捐赠赞助' },
        ],
      },
      list: {
        issuesLG: 124,
        doneLG: 126,
        issuesKCB: 124,
        doneKCB: 126,
        issuesCSJ: 124,
        doneCSJ: 126,
        issuesJBH: 124,
        doneJBH: 126,
        issuesPP: 124,
        donePP: 126,
        issuesXC: 124,
        doneXC: 126,
        issuesGQ: 124,
        doneGQ: 126,
      },
      dataNine: {
        xData: ['党委会', '总经理办公室', '董事会', '总裁会'],
        yData: {
          value: [400, 300, 200, 100],
        },
      },
      dataTenth: {
        xData: ['2018', '2019', '2020', '2021'],
        yData: [
          { name: '党委会', value: [123, 234, 456, 789] },
          { name: '总经理办公室', value: [123, 234, 456, 789] },
          { name: '董事会', value: [123, 234, 456, 789] },
          { name: '总裁会', value: [123, 234, 456, 789] },
        ],
      },
      dataEleven: {
        xData: ['重大事项决策', '重要人事任免', '重大项目安排', '大额资金运作'],
        yData: {
          value: [400, 300, 200, 100],
        },
      },
      dataTwelve: {
        xData: ['2018', '2019', '2020', '2021'],
        yData: [
          { name: '重大事项决策', value: [123, 234, 456, 789] },
          { name: '重要人事任免', value: [123, 234, 456, 789] },
          { name: '重大项目安排', value: [123, 234, 456, 789] },
          { name: '大额资金运作', value: [123, 234, 456, 789] },
        ],
      },
      thirteen: {
        xData: ['2018', '2019', '2020', '2021'],
        yData: {
          value: [400, 300, 200, 100],
        },
      },
      fourteen: {
        data: [
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
      fifteen: {
        data: [
          { value: 4166, name: '制度文件异常w' },
          { value: 4166, name: '出席人员异常w' },
          { value: 2017, name: '党委会未前置异常w' },
          { value: 4166, name: '决策链顺序异常w' },
          { value: 4166, name: '决策链断裂异常w' },
          { value: 2017, name: '议题表决异常w' },
          { value: 4166, name: '合法性审查异常w' },
          { value: 4166, name: '合规性审查异常w' },
        ],
      },
      tabTimId1: null,
      tabTimId2: null,
      tabTimId3: null,
      tabnum1: 0,
      currentTab1: 'year',
      currentTab1Arr: ['type', 'year'],
      tabnum2: 0,
      currentTab2: 'type',
      currentTab2Arr: ['type', 'year'],
      tabnum3: 0,
      currentTab3: 'fromN',
      currentTab3Arr: ['fromN', 'curr'],
      zshjData: {},
      newLists: [],
    }
  },
  created() {},
  mounted() {
    this.startTabScroll1()
    this.startTabScroll2()
    this.startTabScroll3()
  },
  computed: {},
  methods: {
    changeActTab1(item) {
      this.currentTab1 = item
      // this.getBranchdata() // 获取对应数据
    },
    changeTabnum1() {
      this.tabnum1--
      if (this.tabnum1 < 0) {
        this.tabnum1 = this.currentTab1Arr.length - 1
      }
      this.currentTab1 = this.currentTab1Arr[this.tabnum1]
      this.changeActTab1(this.currentTab1)
    },
    startTabScroll1() {
      this.tabTimId1 = setInterval(() => {
        this.changeTabnum1()
      }, 18000)
    },
    stopScroll1() {
      clearInterval(this.tabTimId1)
    },
    changeActTab2(item) {
      this.currentTab2 = item
      // this.getBranchdata() // 获取对应数据
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
    stopScroll2() {
      clearInterval(this.tabTimId2)
    },
    changeActTab3(item) {
      this.currentTab3 = item
      // this.getBranchdata() // 获取对应数据
    },
    changeTabnum3() {
      this.tabnum3--
      if (this.tabnum3 < 0) {
        this.tabnum3 = this.currentTab3Arr.length - 1
      }
      this.currentTab3 = this.currentTab3Arr[this.tabnum3]
      this.changeActTab3(this.currentTab3)
    },
    startTabScroll3() {
      this.tabTimId3 = setInterval(() => {
        this.changeTabnum3()
      }, 24000)
    },
    stopScroll3() {
      clearInterval(this.tabTimId3)
    },
  },
  destroyed() {
    clearInterval(this.tabTimId1)
    clearInterval(this.tabTimId2)
    clearInterval(this.tabTimId3)
  },
}
</script>
<style lang="less" scoped>
.GZW-main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .content-left {
    &.subcontent {
      width: 32%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .halfContent {
        width: 100%;
        height: 32%;
        .title {
          border-left: 4px solid #105ba5;
          height: 40px;
          font-size: 24px;
          line-height: 40px;
          padding-left: 5px;
          background-color: rgba(8, 32, 65, 1);
        }
      }
    }
    .left-topContent {
      .title {
        border-left: 4px solid #105ba5;
        height: 40px;
        font-size: 24px;
        line-height: 40px;
        padding-left: 5px;
        background-color: rgba(8, 32, 65, 1);
      }
      .contents {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        .contentFirst {
          width: 270px;
          height: 223px;
          padding: 22px 18px;
          text-align: center;
          background: url('../../assets/imgs/GZWParty/4.png') no-repeat center
            center;
          background-size: 100% 100%;
          .Firsttitle {
            width: 227px;
            height: 74px;
            border-radius: 2px;
            background: linear-gradient(#136add, #069ce2);
            span {
              display: block;
              font-size: 25px;
            }
          }
          .Firstcontent {
            margin-top: 48px;
            span {
              &:first-child {
                height: 31px;
                line-height: 31px;
                font-size: 18px;
                color: #ffffff;
              }
              &:last-child {
                height: 31px;
                line-height: 31px;
                font-size: 26px;
                color: #ffb122;
              }
            }
          }
        }
        .contentSecond {
          width: 270px;
          height: 223px;
          padding: 22px 18px;
          background: url('../../assets/imgs/GZWParty/4.png') no-repeat center
            center;
          background-size: 100% 100%;
          .Secondtitle {
            width: 227px;
            height: 74px;
            border-radius: 2px;
            text-align: center;
            background: linear-gradient(#136add, #069ce2);
            span {
              display: block;
              font-size: 25px;
            }
          }
          .Secondcontent {
            margin: 8px 46px 0 46px;
            span {
              &:first-child {
                height: 31px;
                line-height: 31px;
                font-size: 18px;
                color: #ffffff;
              }
              &:last-child {
                height: 31px;
                line-height: 31px;
                font-size: 26px;
                color: #ffb122;
              }
            }
          }
        }
        .contentThird {
          width: 577px;
          height: 223px;
          padding: 22px 18px;
          background: url('../../assets/imgs/GZWParty/9.png') no-repeat center
            center;
          background-size: 100% 100%;
          .Thirdtitle {
            width: 520px;
            height: 74px;
            border-radius: 2px;
            text-align: center;
            background: linear-gradient(#136add, #069ce2);
            span {
              display: block;
              font-size: 25px;
              height: 74px;
              line-height: 74px;
            }
          }
          .Thirdcontent {
            margin: 8px 90px 0 90px;
            display: flex;
            justify-content: space-between;
            span {
              &:first-child {
                height: 31px;
                line-height: 31px;
                font-size: 18px;
                color: #ffffff;
              }
              &:last-child {
                height: 31px;
                line-height: 31px;
                font-size: 26px;
                color: #ffb122;
              }
            }
          }
        }
      }
    }
    .left-middleContent {
      display: flex;
      justify-content: space-between;
      .contentChild {
        width: 48%;
        .title {
          width: 100%;
          border-left: 4px solid #105ba5;
          height: 40px;
          font-size: 24px;
          line-height: 40px;
          padding-left: 5px;
          background-color: rgba(8, 32, 65, 1);
        }
        .contents {
          width: 100%;
          height: 340px;
          display: flex;
          justify-content: space-between;
          .contents-child {
            margin-top: -50px;
            width: 290px;
            height: 340px;
          }
        }
      }
    }
    .left-bottomContent {
      display: flex;
      justify-content: space-between;
      .contentChild {
        width: 48%;
        .title {
          width: 100%;
          border-left: 4px solid #105ba5;
          height: 40px;
          font-size: 24px;
          line-height: 40px;
          padding-left: 5px;
          background-color: rgba(8, 32, 65, 1);
        }
        .contents {
          width: 100%;
          height: 340px;
          display: flex;
          justify-content: space-between;
          .contents-child {
            margin-top: -50px;
            width: 290px;
            height: 340px;
          }
        }
      }
    }
  }
  .content-middle {
    &.subcontent {
      width: 32%;
      height: 100%;
    }
    .middle-title {
      width: 100%;
      height: 50px;
      text-align: center;
      background: url('../../assets/imgs/GZWParty/12.png') no-repeat center
        center;
      background-size: 100% 100%;
      span {
        height: 50px;
        line-height: 50px;
        color: #ffb732;
        font-family: 'PangMenZhengDao';
        font-size: 38px;
      }
    }
    .middle-content {
      width: 100%;
      height: 70%;
      background: url('../../assets/imgs/GZWParty/10.png') no-repeat center
        center;
      background-size: 100% 30%;
      .content-images {
        display: flex;
        z-index: 2;
        .cone01 {
          width: 154px;
          height: 478px;
          margin-top: 120px;
          margin-left: 140px;
          z-index: 4;
        }
        .cone02 {
          width: 150px;
          height: 259px;
          margin-top: 130px;
          margin-left: -50px;
          z-index: 3;
        }
        .cone03 {
          width: 136px;
          height: 331px;
          margin-top: 170px;
          margin-left: -30px;
          z-index: 4;
        }
        .cone04 {
          width: 145px;
          height: 541px;
          margin-top: 147px;
          margin-left: -40px;
          z-index: 5;
        }
        .cone05 {
          width: 183px;
          height: 317px;
          margin-top: 130px;
          margin-left: 45px;
          z-index: 4;
        }
        .cone06 {
          width: 200px;
          height: 513px;
          margin-top: 110px;
          margin-left: -50px;
          z-index: 5;
        }
        .cone07 {
          width: 163px;
          height: 417px;
          margin-top: 110px;
          margin-left: 16px;
          z-index: 4;
        }
      }
      .content-text {
        display: flex;
        z-index: 6;
        position: relative;
        .text01 {
          text-align: center;
          width: 326px;
          position: absolute;
          margin-left: 90px;
          margin-top: 25px;
          span {
            display: block;
            &:first-child {
              font-size: 29px;
              color: #df9548;
            }
            &:last-child {
              color: #ffffff;
              font-size: 21px;
              opacity: 0.6;
            }
          }
        }
        .text02 {
          text-align: center;
          width: 326px;
          position: absolute;
          margin-left: 167px;
          margin-top: -245px;
          span {
            display: block;
            &:first-child {
              font-size: 29px;
              color: #c9566b;
            }
            &:last-child {
              color: #ffffff;
              font-size: 21px;
              opacity: 0.6;
            }
          }
        }
        .text03 {
          text-align: center;
          width: 326px;
          position: absolute;
          margin-left: 280px;
          margin-top: -105px;
          span {
            display: block;
            &:first-child {
              font-size: 29px;
              color: #cb7c53;
            }
            &:last-child {
              color: #ffffff;
              font-size: 21px;
              opacity: 0.6;
            }
          }
        }
        .text04 {
          text-align: center;
          width: 326px;
          position: absolute;
          margin-left: 385px;
          margin-top: 105px;
          span {
            display: block;
            &:first-child {
              font-size: 29px;
              color: #d443b1;
            }
            &:last-child {
              color: #ffffff;
              font-size: 21px;
              opacity: 0.6;
            }
          }
        }
        .text05 {
          text-align: center;
          width: 326px;
          position: absolute;
          margin-left: 590px;
          margin-top: -165px;
          span {
            display: block;
            &:first-child {
              font-size: 29px;
              color: #81a2fe;
            }
            &:last-child {
              color: #ffffff;
              font-size: 21px;
              opacity: 0.6;
            }
          }
        }
        .text06 {
          text-align: center;
          width: 326px;
          position: absolute;
          margin-left: 740px;
          margin-top: 40px;
          span {
            display: block;
            &:first-child {
              font-size: 29px;
              color: #45aaac;
            }
            &:last-child {
              color: #ffffff;
              font-size: 21px;
              opacity: 0.6;
            }
          }
        }
        .text07 {
          text-align: center;
          width: 326px;
          position: absolute;
          margin-left: 935px;
          margin-top: -65px;
          span {
            display: block;
            &:first-child {
              font-size: 29px;
              color: #59c883;
            }
            &:last-child {
              color: #ffffff;
              font-size: 21px;
              opacity: 0.6;
            }
          }
        }
      }
    }
  }
  .content-right {
    width: 32%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left-contents {
      width: 48%;
      height: 100%;
      .title {
        border-left: 4px solid #105ba5;
        height: 40px;
        font-size: 24px;
        line-height: 40px;
        padding-left: 5px;
        background-color: rgba(8, 32, 65, 1);
      }
      .total-content {
        height: calc(100% - 40px);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .content-top {
          width: 100%;
          height: 48%;
          margin-top: 25px;
          .top-title {
            height: 24px;
            background: url('../../assets/imgs/GZWParty/11.png') no-repeat
              center center;
            background-size: 100% 100%;
            p {
              font-size: 19px;
              color: #ffb732;
              height: 18px;
              line-height: 18px;
              margin-left: 10px;
              font-weight: 400;
            }
          }
          .sub-title {
            height: 44px;
            line-height: 44px;
            position: relative;
            left: 72px;
            font-size: 18px;
            font-weight: 500;
            color: #ffffff;
            &::before {
              content: '';
              display: inline-block;
              height: 44px;
              width: 38px;
              position: absolute;
              left: 10px;
            }
            &::after {
              content: '';
              display: inline-block;
              height: 44px;
              width: 38px;
              position: absolute;
              right: 20px;
            }
          }
          .echarts {
            width: 550px;
            height: 380px;
          }
        }
        .content-bottom {
          width: 100%;
          height: 48%;
          margin-top: 25px;
          .top-title {
            height: 24px;
            background: url('../../assets/imgs/GZWParty/11.png') no-repeat
              center center;
            background-size: 100% 100%;
            p {
              font-size: 19px;
              color: #ffb732;
              height: 18px;
              line-height: 18px;
              margin-left: 10px;
              font-weight: 400;
            }
          }
          .sub-title {
            height: 44px;
            line-height: 44px;
            position: relative;
            left: 72px;
            font-size: 18px;
            font-weight: 500;
            color: #ffffff;
            &::before {
              content: '';
              display: inline-block;
              height: 44px;
              width: 38px;
              position: absolute;
              left: 10px;
            }
            &::after {
              content: '';
              display: inline-block;
              height: 44px;
              width: 38px;
              position: absolute;
              right: 20px;
            }
          }
          .echarts {
            width: 550px;
            height: 380px;
          }
        }
      }
    }
    .right-contents {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .contentChild {
        width: 100%;
        height: 100%;
        .title {
          border-left: 4px solid #105ba5;
          height: 40px;
          font-size: 24px;
          line-height: 40px;
          padding-left: 5px;
          background-color: rgba(8, 32, 65, 1);
        }
      }
      .right-bottomContent-first {
        width: 100%;
        height: 100%;
        .contents {
          width: 550px;
          height: 420px;
        }
      }
      .right-bottomContent-second {
        width: 100%;
        height: 100%;
        .contents {
          width: 550px;
          height: 420px;
          .sub-title {
            margin-top: 15px;
            height: 44px;
            line-height: 44px;
            position: relative;
            left: 72px;
            font-size: 18px;
            font-weight: 500;
            color: #ffffff;
            z-index: 99;
            &::before {
              content: '';
              display: inline-block;
              height: 44px;
              width: 38px;
              position: absolute;
              left: 10px;
            }
            &::after {
              content: '';
              display: inline-block;
              height: 44px;
              width: 38px;
              position: absolute;
              right: 20px;
            }
          }
          .echarts {
            width: 550px;
            height: 380px;
          }
        }
      }
    }
  }
}
</style>
