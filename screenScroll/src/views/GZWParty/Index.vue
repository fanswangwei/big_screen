<!--  -->
<template>
  <div class="GZW-main">
    <div class="content-left subcontent">
      <div class="left-topContent halfContent">
        <div class="title">
          <img src="../../assets/imgs/GZWParty/trangle.png" alt="" />党建入章
        </div>
        <div class="contents">
          <div class="echartsFirst">
            <DashBoard :data="JTBNData"></DashBoard>
          </div>
          <div class="echartsSecond">
            <DashBoardSecond :data="EJQYData"></DashBoardSecond>
          </div>
          <div class="echartsThird">
            <DashBoardThird :data="SJJYXData"></DashBoardThird>
          </div>
        </div>
      </div>
      <div class="left-bottomContent halfContent">
        <div class="left-bottomContent-first contentChild">
          <div class="title">
            <img src="../../assets/imgs/GZWParty/trangle.png" alt="" />
            直属党委换届情况
          </div>
          <div class="contents">
            <BarAndLine :data="zshjData"></BarAndLine>
          </div>
        </div>
        <div class="left-bottomContent-second contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />国企教育基地
          </div>
          <div
            @mouseenter="stopScroll4"
            @mouseleave="startScroll4"
            class="contents"
            style="overflow-y: scroll"
          >
            <TransverseBar :data="GQJYData"></TransverseBar>
          </div>
        </div>
      </div>
    </div>
    <div class="content-middle subcontent">
      <div class="middle-topContent halfContent">
        <div class="title">
          <img
            src="../../assets/imgs/GZWParty/trangle.png"
            alt=""
          />党组织概况/党员概况
        </div>
        <div class="contents">
          <div class="inner-content">
            <div class="inner-title">党组织概况</div>
            <div class="inner-content">
              <div class="inner-echarts">
                <RadiuPie :data="DZZData"></RadiuPie>
              </div>
              <div class="inner-text">
                <div>
                  <p>市国资委系统党组织数量</p>
                  <p>{{ list.SGZWDZZNumber }}万</p>
                  <p>
                    约占全市<span style="color: #ff7b50"
                      >{{ list.SGZWDZZPer }}%</span
                    >
                  </p>
                  <p>
                    较去年新增<span style="color: #ff7b50"
                      >{{ list.SGZWDZZIncrease }}万</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="inner-content">
            <div class="inner-title">党员概况</div>
            <div class="inner-content">
              <div class="inner-echarts">
                <RadiuPieSecond :data="DYGKData"></RadiuPieSecond>
              </div>
              <div class="inner-text-right">
                <div class="text-content">
                  <div>
                    <p>市国资委系统党员数量</p>
                    <p>{{ list.SGZWDYNumber }}万</p>
                    <p>
                      约占全市党员<span style="color: #92cc76"
                        >{{ list.SGZWDYPer }}%</span
                      >&nbsp;&nbsp;较去年新增<span style="color: #92cc76"
                        >{{ list.SGZWDYIncrease }}万</span
                      >
                    </p>
                  </div>
                </div>
                <div class="text-content">
                  <div>
                    <p>在岗党员数量</p>
                    <p>{{ list.ZGDYNumber }}万</p>
                    <p>
                      约占系统职工<span style="color: #92cc76"
                        >{{ list.ZGDYPer }}%</span
                      >&nbsp;&nbsp;较去年新增<span style="color: #92cc76"
                        >{{ list.ZGDYIncrease }}万</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-bottomContent halfContent">
        <div class="middle-bottomContent-first contentChild">
          <div class="title specialTitle">
            <div>
              <img
                src="../../assets/imgs/GZWParty/trangle.png"
                alt=""
              />中央精神
            </div>
            <div class="more">>>更多</div>
          </div>
          <div class="contents">
            <div class="news-style" v-for="item in newLists" :key="item.index">
              {{ item.title }}
            </div>
          </div>
        </div>
        <div class="middle-bottomContent-second contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />万名书记进党校
          </div>
          <div class="contents">
            <div class="news-img">
              <img src="../../assets/imgs/GZWParty/new1.jpg" alt="" />
            </div>
            <div class="news-text">
              <p>
                10月20日，上海市国资委党委在百联党校举行市国资委系统第四轮“万名书记进党校”培训线上教学上线暨党委书记培训班开班仪式。
                上海市国资委党委书记、主任白廷辉出席并作动员讲话。百联集团党委副书记秦青林，11个党校培训教学点校长……
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-right subcontent">
      <div class="right-topContent halfContent">
        <div class="right-topContent-first contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />"两优一先"
          </div>
          <div class="contents">
            <ThreeLine :data="LYYXData"></ThreeLine>
          </div>
        </div>
        <div class="right-topContent-second contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />党委会召开
          </div>
          <div class="contents">
            <Bar :data="DWHData"></Bar>
          </div>
        </div>
      </div>
      <div class="right-bottomContent halfContent">
        <div class="right-bottomContent-first contentChild">
          <div class="title">
            <img
              src="../../assets/imgs/GZWParty/trangle.png"
              alt=""
            />榜样的力量
          </div>
          <div class="contents">
            <div class="block">
              <el-carousel height="330px">
                <el-carousel-item>
                  <div class="img content">
                    <img
                      src="../../assets/imgs/GZWParty/xjz.png"
                      alt=""
                      style
                    />
                  </div>
                  <div class="text content">
                    <p>张凌翔</p>
                    <p>上海地铁维护保障有限公司党委副书记、总经理</p>
                    <p>
                      疫情中，张凌翔同志始终秉持“疫情就是命令，防控就是责任”的使命，坚守岗位，靠前指挥，及时采取行动，开展高效、透明工作。
                    </p>
                    <p>
                      2020年9月，张凌翔获“上海市抗击新冠肺炎疫情先进个人”称号。
                    </p>
                    <p>2020年9月，张凌翔被授予"上海市优秀共产党员"称号</p>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="img content">
                    <img src="../../assets/imgs/GZWParty/xjw.png" alt="" />
                  </div>
                  <div class="text content">
                    <p>吴梦秋</p>
                    <p>
                      上海蔬菜（集团）有限公司党委书记、董事长、总裁，高级工程师。
                    </p>
                    <p>
                      疫情期间，光明食品集团吴梦秋同志始终立足“安全诚信为市民、高效流通为农民”的初心使命，升级“１证、２码、１承诺”防疫管控举措，用实际行动带领企业扛起确保农产品供应、确保食品安全。
                    </p>
                    <p>
                      2020年9月，被评为上海市抗击新冠肺炎疫情先进个人、上海市优秀共产党员。
                    </p>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="right-bottomContent-second contentChild">
          <div class="title">
            <img src="../../assets/imgs/GZWParty/trangle.png" alt="" />党建品牌
          </div>
          <div class="contents">
            <div class="blockSecond">
              <el-carousel height="330px">
                <el-carousel-item>
                  <div class="imgList">
                    <div>
                      <img src="../../assets/imgs/GZWParty/2.png" alt="" />
                      <span>仪电集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/3.png" alt="" />
                      <span>电气集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/4.png" alt="" />
                      <span>上实集团</span>
                    </div>
                  </div>
                  <div class="imgList">
                    <div>
                      <img src="../../assets/imgs/GZWParty/5.png" alt="" />
                      <span>隧道股份</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/6.png" alt="" />
                      <span>绿地集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/7.png" alt="" />
                      <span>机场集团</span>
                    </div>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="imgList">
                    <div>
                      <img src="../../assets/imgs/GZWParty/2.png" alt="" />
                      <span>仪电集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/3.png" alt="" />
                      <span>电气集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/4.png" alt="" />
                      <span>上实集团</span>
                    </div>
                  </div>
                  <div class="imgList">
                    <div>
                      <img src="../../assets/imgs/GZWParty/5.png" alt="" />
                      <span>隧道股份</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/6.png" alt="" />
                      <span>绿地集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/7.png" alt="" />
                      <span>机场集团</span>
                    </div>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="imgList">
                    <div>
                      <img src="../../assets/imgs/GZWParty/2.png" alt="" />
                      <span>仪电集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/3.png" alt="" />
                      <span>电气集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/4.png" alt="" />
                      <span>上实集团</span>
                    </div>
                  </div>
                  <div class="imgList">
                    <div>
                      <img src="../../assets/imgs/GZWParty/5.png" alt="" />
                      <span>隧道股份</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/6.png" alt="" />
                      <span>绿地集团</span>
                    </div>
                    <div>
                      <img src="../../assets/imgs/GZWParty/7.png" alt="" />
                      <span>机场集团</span>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import DashBoard from '@/components/echarts/GZWParty/DashBoard.vue'
import DashBoardSecond from '@/components/echarts/GZWParty/DashBoard1.vue'
import DashBoardThird from '@/components/echarts/GZWParty/DashBoard2.vue'
import BarAndLine from '@/components/echarts/GZWParty/BarAndLine.vue'
import TransverseBar from '@/components/echarts/GZWParty/TransverseBar.vue'
import RadiuPie from '@/components/echarts/GZWParty/RadiuPie.vue'
import RadiuPieSecond from '@/components/echarts/GZWParty/RadiuPie02.vue'
import ThreeLine from '@/components/echarts/GZWParty/ThreeLine.vue'
import Bar from '@/components/echarts/GZWParty/Bar.vue'
export default {
  components: {
    DashBoard,
    DashBoardSecond,
    DashBoardThird,
    BarAndLine,
    TransverseBar,
    RadiuPie,
    RadiuPieSecond,
    ThreeLine,
    Bar,
  },
  data() {
    return {
      list: {
        SGZWDZZNumber: 1.5,
        SGZWDZZPer: 30,
        SGZWDZZIncrease: 0.2,
        SGZWDYNumber: 30,
        SGZWDYPer: 30,
        SGZWDYIncrease: 2,
        ZGDYNumber: 20,
        ZGDYPer: 30,
        ZGDYIncrease: 2,
      },
      JTBNData: {
        data: [
          {
            name: '集团本部',
            value: 70,
            detail: {
              color: '#ffffff',
            },
          },
        ],
      },
      EJQYData: {
        data: [
          {
            name: '二级企业',
            value: 75,
            detail: {
              color: '#ffffff',
            },
          },
        ],
      },
      SJJYXData: {
        data: [
          {
            name: '三级及以下企业',
            value: 80,
            detail: {
              color: '#ffffff',
            },
          },
        ],
      },
      zshjData: {
        xData: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        yData: {
          value: [3, 5, 2, 6, 7, 11, 45],
        },
      },
      newLists: [
        { title: '五个“庄严宣告”，习近平这篇讲话特别“燃”', content: 'ssssss' },
        {
          title: '庆祝中国共产党成立100周年文艺演出《伟大征程》在京盛大举行',
          content: 'ssssss',
        },
        { title: '习近平谈如何建强基层党组织', content: 'ssssss' },
        { title: '习近平谈发挥基层党组织战斗堡垒作用', content: 'ssssss' },
        { title: '在庆祝中国共产党成立95周年大会上的讲话', content: 'ssssss' },
        { title: '习近平谈党史学习的“学习要点”', content: 'ssssss' },
      ],
      GQJYData: {
        xData: [
          '徐汇区',
          '浦东新区',
          '嘉定区',
          '闵行区',
          '长宁区',
          '普陀区',
          '虹口区',
        ],
        yData: [
          { value: [320, 302, 301, 334, 390, 330, 320] },
          { value: [120, 132, 101, 134, 90, 230, 210] },
          { value: [220, 182, 191, 234, 290, 330, 310] },
        ],
      },
      DZZData: {
        data: [
          { value: 4166, name: '党委' },
          { value: 2017, name: '党总支' },
          { value: 2017, name: '党支部' },
        ],
      },
      DYGKData: {
        data: [
          { value: 4166, name: '正式党员' },
          { value: 2017, name: '预备发展对象' },
          { value: 2017, name: '申请入党' },
          { value: 2017, name: '入党积极分子' },
        ],
      },
      LYYXData: {
        xData: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        yData: [
          { value: [120, 132, 101, 134, 90, 230, 210] },
          { value: [220, 182, 191, 234, 290, 330, 310] },
          { value: [150, 232, 201, 154, 190, 330, 410] },
        ],
      },
      DWHData: {
        xData: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        yData: {
          value: [15, 34, 56, 78, 34, 47, 64],
        },
      },
      timeId1: '',
    }
  },
  created() {},
  computed: {},
  methods: {
    stopScroll4() {
      clearInterval(this.timeId1)
    },
    startScroll4() {
      let ul2 = document.querySelectorAll('.TransverseBar')
      let ulbox1 = document.querySelectorAll('.contents')
      this.timeId1 = setInterval(() => {
        if (
          ul2[0].offsetHeight - ulbox1[0].offsetHeight <=
          Math.ceil(ulbox1[0].scrollTop)
        ) {
          $('.contents').animate(
            {
              scrollTop: 0,
            },
            3000
          )
        } else {
          let val = ulbox1[0].scrollTop + 300
          $('.contents').animate(
            {
              scrollTop: val,
            },
            6000
          )
        }
        // console.log('inner', ul1[0].offsetHeight)
        // console.log('outer', ulbox[0].offsetHeight)
        // console.log('scroll', ulbox[0].scrollTop)
      }, 12000)
    },
  },
  mounted() {
    let ulbox1 = document.querySelectorAll('.contents')
    ulbox1[0].scrollTop = 0
    this.startScroll4()
  },
}
</script>
<style lang="less" scoped>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px;
  height: 0px;
  background-color: none;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(8, 32, 65, 0.3);
  border-radius: 10px;
  background-color: none;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(8, 32, 65, 0.3);
  background-color: rgb(8, 32, 65);
}
.imgList {
  display: flex;
  justify-content: space-between;
  div {
    width: 30%;
    height: 45%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.GZW-main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .subcontent {
    width: 32%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .halfContent {
      width: 100%;
      height: 48%;
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
  .content-left {
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
        div {
          width: 264px;
          height: 245.6px;
        }
        .echartsFirst {
          background: url('../../assets/imgs/GZWParty/bg07.png') no-repeat
            center center;
          background-size: 100% 100%;
        }
        .echartsSecond {
          background: url('../../assets/imgs/GZWParty/bg05.png') no-repeat
            center center;
          background-size: 100% 100%;
        }
        .echartsThird {
          background: url('../../assets/imgs/GZWParty/bg06.png') no-repeat
            center center;
          background-size: 100% 100%;
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
          width: 503px;
          height: 380px;
          margin-top: 20px;
        }
      }
    }
  }
  .content-middle {
    .middle-topContent {
      .contents {
        display: flex;
        justify-content: space-between;
        .inner-content {
          margin-top: 20px;
          width: 563px;
          height: 380px;
          .inner-title {
            width: 100%;
            height: 30px;
            font-size: 19px;
            color: #ffb732;
            background: url('../../assets/imgs/GZWParty/line.png') no-repeat
              center 11px;
            background-size: 100% 60%;
          }
          .inner-content {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            .inner-echarts {
              width: 100%;
              height: 100%;
              margin-top: -60px;
            }
            .inner-text {
              width: 100%;
              height: 100%;
              margin-top: 30px;
              background: url('../../assets/imgs/GZWParty/bg04.png') no-repeat
                center 11px;
              background-size: 100% 50%;
              div {
                margin-top: 40px;
                margin-left: 32px;
                p {
                  margin-bottom: 15px;
                  &:nth-child(1) {
                    height: 18px;
                    font-size: 19px;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #ffffff;
                    line-height: 18px;
                  }
                  &:nth-child(2) {
                    height: 26px;
                    font-size: 27px;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #ff7b50;
                    line-height: 26px;
                  }
                  &:nth-child(3) {
                    height: 17px;
                    font-size: 15px;
                    line-height: 17px;
                  }
                  &:nth-child(4) {
                    height: 17px;
                    font-size: 15px;
                    line-height: 17px;
                  }
                }
              }
            }
            .inner-text-right {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              padding: 20px 0;
              .text-content {
                width: 100%;
                height: 80%;
                background: url('../../assets/imgs/GZWParty/bg03.png') no-repeat
                  center center;
                background-size: 100% 90%;
                div {
                  margin-top: 40px;
                  margin-left: 28px;
                  p {
                    margin-top: 15px;
                    &:nth-child(1) {
                      height: 18px;
                      font-size: 17px;
                      font-weight: 500;
                      color: #ffffff;
                      line-height: 18px;
                    }
                    &:nth-child(2) {
                      height: 26px;
                      font-size: 24px;
                      font-weight: bold;
                      color: #92cc76;
                      line-height: 26px;
                    }
                    &:nth-child(3) {
                      height: 17px;
                      font-size: 14px;
                      line-height: 17px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .middle-bottomContent {
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
          &.specialTitle {
            display: flex;
            justify-content: space-between;
            padding-right: 15px;
            .more {
              font-size: 18px;
              &:hover {
                color: #09b2fd;
                cursor: pointer;
              }
            }
          }
        }
        .contents {
          width: 100%;
          height: 380px;
          margin-top: 20px;
          .news-style {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 19px;
            color: #ffffff;
            height: 40px;
            line-height: 40px;
            opacity: 0.87;
            margin-top: 15px;
            border-bottom: 1px solid rgba(16, 91, 165, 0.3);
            cursor: pointer;
            &:hover {
              color: #09b2fd;
            }
          }
        }
        .news-img {
          width: 100%;
          height: 70%;
          background: url('../../assets/imgs/GZWParty/bg02.png') no-repeat
            center center;
          background-size: 100% 100%;
          text-align: center;
          img {
            width: 90%;
            height: 80%;
            margin-top: 30px;
          }
        }
        .news-text {
          margin-top: 2%;
          width: 100%;
          height: 23%;
          overflow: hidden;
          text-overflow: ellipsis;
          p {
            font-size: 17px;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  .content-right {
    .halfContent {
      display: flex;
      justify-content: space-between;
      .contentChild {
        width: 48%;
        height: 380px;
        .title {
          border-left: 4px solid #105ba5;
          height: 40px;
          font-size: 24px;
          line-height: 40px;
          padding-left: 5px;
          background-color: rgba(8, 32, 65, 1);
        }
        .contents {
          width: 100%;
          height: 360px;
        }
      }
    }
    .block {
      margin-top: 30px;
      .el-carousel__item {
        display: flex;
        justify-content: space-between;
        .img {
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content {
          width: 45%;
          p {
            margin-top: 10px;
            &:nth-child(1) {
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
      }
    }

    .blockSecond {
      margin-top: 30px;
      .el-carousel__item {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .imgList {
          width: 100%;
          height: 45%;
          div {
            width: 30%;
            height: 100%;
            background: url('../../assets/imgs/GZWParty/1.png') no-repeat center
              center;
            background-size: 100% 100%;
            text-align: center;
            padding-top: 20px;
            img {
              width: 55%;
              height: 55%;
            }
            span {
              display: block;
              margin-top: 20px;
              font-size: 21px;
            }
          }
        }
      }
    }
  }
}
</style>
