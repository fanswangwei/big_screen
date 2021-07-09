<!--  -->
<template>
  <div class="GSPart">
    <div class="left-SJGJ">
      <div class="SJGJ-Lcontent">
        <ul>
          <li class="textName-box">
            <div class="textName" >
              <div><numScroll class="s-num"
                  v-model="cityChange"
                  :setting="{
                    dot: 0,
                    isBg: false,
                    width: '20px',
                    height: '23px',
                    time: 60000,
                  }"/>万条</div>
              <span>市级交换量</span>
            </div>
            <div style="width:215px;margin-top:25px;">
              <img
              style="width:215px;margin-top:25px;"
              src="../../assets/imgs/GSPart/sjjhl.png"
              alt="市级交换量"
            />
            </div>
          </li>
          <li class="textName-box">
            <div class="textName">
              <div><numScroll class="s-num"
                  v-model="blockChang"
                  :setting="{
                    dot: 0,
                    isBg: false,
                    width: '20px',
                    height: '23px',
                    time: 60000,
                  }"/>亿条</div>
              <span>区级交换量</span>
            </div>
            <img
              style="width:215px;margin-top:25px;"
              src="../../assets/imgs/GSPart/qjjhl.png"
              alt="区级交换量"
            />
          </li>
        </ul>
      </div>
      <div class="imgJt1" style="position:absolute;margin-left:219px;z-index:-1;">
        <img
          style="width:140px;height:420px;"
          src="../../assets/imgs/GSPart/jt1.png"
          alt="箭头"
        />
      </div>
      <div class="imgSjgj textName-box">
        <p class="textName imgText" style="margin-left:56px;">数据归集</p>
        <img
          style="width:204px;height:122px"
          src="../../assets/imgs/GSPart/sjgj.png"
          alt="数据归集"
        />
      </div>
    </div>
    <div class="center-SZZY">
      <div class="center-SZZYLeft">
        <img
          style="width:105px;height:72px"
          src="../../assets/imgs/GSPart/jt2.png"
          alt="箭头"
        />
      </div>
      <div class="center-SZZYCenter">
        <div class="center-SZZYCenter-top"><p>数据资源</p></div>
        <div class="center-SZZYCenter-middle">
          <ul class="SZZYCenter-middle-ulFirst">
            <li>
              <p>
                <span style="color:#59DBFA;">{{ cityChart }}万条</span>
                <span>市级数据量</span>
              </p>
              <img
                style="width:219px;height:60px;"
                src="../../assets/imgs/GSPart/sjbjg.png"
                alt="市级数据量"
              />
            </li>
             <li>
              <p>
                <span style="color:#46E4C1;">{{ monthWork }}万条</span>
                <span>市级本月新增数据量</span>
              </p>
              <img
                style="width:219px;height:60px;"
                src="../../assets/imgs/GSPart/byjgl.png"
                alt="市级本月新增数据量"
              />
            </li>
            <li>
              <p>
                <span style="color:#FBC15C;">{{ useNumber }}亿条</span>
                <span>可用数据量</span>
              </p>
              <img
                style="width:219px;height:60px;"
                src="../../assets/imgs/GSPart/kysjl.png"
                alt="可用数据量"
              />
            </li>
            <li>
              <p>
                <span style="color:#797FFF;">{{ useSource }}个</span>
                <span>可用资源表</span>
              </p>
              <img
                style="width:219px;height:60px;"
                src="../../assets/imgs/GSPart/kyzyb.png"
                alt="可用资源表"
              />
            </li>
          </ul>
        </div>
        <div class="center-SZZYCenter-bottom">
          <div class="SZZYCenter-bottom SZZYCenter-bottom-left">
            <div class="bottom-content">
              <p class="textName">资源目录</p>
              <img
                style="width:153px;height:52px;"
                src="../../assets/imgs/GSPart/ml.png"
                alt=""
              />
            </div>
            <div class="bottom-catalogue">
              <ul>
                <li>
                  <p>市级目录</p>
                  <p class="number">{{ cityCatalogue }}个</p>
                  <img
                    style="width:153px;height:41px;"
                    src="../../assets/imgs/GSPart/textbg.png"
                    alt=""
                  />
                </li>
                <li>
                  <p>区级目录</p>
                  <p class="number">{{ blockCatalogue }}个</p>
                  <img
                    style="width:153px;height:41px;"
                    src="../../assets/imgs/GSPart/textbg.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="SZZYCenter-bottom SZZYCenter-bottom-right">
            <div class="bottom-content">
              <p class="textName">区级数据</p>
              <img
                style="width:153px;height:52px;"
                src="../../assets/imgs/GSPart/ml.png"
                alt=""
              />
            </div>
            <div class="bottom-catalogue">
              <ul>
                <li>
                  <p>已接入部门</p>
                  <p class="number">{{ connectBranch }}家</p>
                  <img
                    style="width:153px;height:41px;"
                    src="../../assets/imgs/GSPart/textbg.png"
                    alt=""
                  />
                </li>
                <li>
                  <p>已接入系统</p>
                  <p class="number">{{ connectSystem }}个</p>
                  <img
                    style="width:153px;height:41px;"
                    src="../../assets/imgs/GSPart/textbg.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="center-SZZYright">
        <img
          style="width:104px;height:72px"
          src="../../assets/imgs/GSPart/jt3.png"
          alt="箭头"
        />
      </div>
    </div>
    <div class="right-SJGX">
      <div class="imgSjgj textName-box">
        <p class="textName imgText" style="margin-left:-50px;">数据共享</p>
        <img
          style="width:204px;height:122px"
          src="../../assets/imgs/GSPart/sjgx.png"
          alt="数据共享"
        />
      </div>
      <div class="imgJt4">
        <img
          style="width:110px;height:440px"
          src="../../assets/imgs/GSPart/jt4.png"
          alt="箭头"
        />
      </div>
      <div class="SJGJ-Rcontent">
        <ul>
          <li class="textName-box">
            <div class="textName">
              <div>
                <numScroll class="s-num"
                  v-model="cityShare"
                  :setting="{
                    dot: 0,
                    isBg: false,
                    width: '20px',
                    height: '23px',
                    time: 60000,
                  }"/>万条</div>
              <span>市级共享数据量</span>
            </div>
            <img
              style="width:219px;margin-top:70px;"
              src="../../assets/imgs/GSPart/sjsjl.png"
              alt="市级共享数据量"
            />
          </li>
          <li class="textName-box textName-right">
            <div class="textName textName-right">
              <div><numScroll class="s-num"
                  v-model="blockShare"
                  :setting="{
                    dot: 0,
                    isBg: false,
                    width: '20px',
                    height: '23px',
                    time: 60000,
                  }"/>亿条</div>
              <span>区级共享数据量</span>
            </div>
            <img
              style="width:219px;margin-top:70px;"
              src="../../assets/imgs/GSPart/qjsjl.png"
              alt="区级共享数据量"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import numScroll from '../../components/numScroll/num-scroll.vue'
import {
  getCSdata,
  getTopdata,
  getBottomdata,
} from '@/api/GSPart.js'
export default {
  components: {
    numScroll,
  },
  data() {
    return {
      cityChange: '', // 市级交换量，单位是万
      blockChang: '', // 区级交换量，单位是万
      cityShare: '', // 市级共享量，单位是万
      blockShare: '', // 区级共享数据量，单位是万
      cityChart: '', // 市级表加工
      useSource: '', // 可用资源表
      useNumber: '', // 可用数据量，单位是万
      monthWork: '', // 本月加工量
      cityCatalogue: '', // 市级目录
      blockCatalogue: '', // 区级目录
      connectBranch: '', // 已接入部门
      connectSystem: '', // 已接入系统
    }
  },
  created() {
    this.getCSdata()
    this.getTopdata()
    this.getBottomdata()
    this.totalTimeId = setInterval(() => {
      this.getCSdata()
      this.getTopdata()
      this.getBottomdata()
    }, 5 * 60 * 1000)
  },
  computed: {},
  methods: {
    getCSdata() {
      getCSdata()
        .then((data) => {
          console.log('getCSdata', data)
          this.cityChange = data.data.cityChange
          this.blockChang = data.data.blockChang
          this.cityShare = data.data.cityShare
          this.blockShare = data.data.blockShare
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getTopdata() {
      getTopdata()
        .then((data) => {
          console.log('getTopdata', data)
          this.cityChart = data.data.cityChart
          this.useSource = data.data.useSource
          this.useNumber = data.data.useNumber
          this.monthWork = data.data.monthWork
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getBottomdata() {
      getBottomdata()
        .then((data) => {
          console.log('getBottomdata', data)
          this.cityCatalogue = data.data.cityCatalogue
          this.blockCatalogue = data.data.blockCatalogue
          this.connectBranch = data.data.connectBranch
          this.connectSystem = data.data.connectSystem
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
.s-num {
  font-weight: 600;
  height: 23px;
  line-height: 23px;
}
.GSPart {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -30px;
  .textName-box {
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .imgText {
      font-size: 32px;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #f2b94a;
      line-height: 122px;
      letter-spacing: 2px;
    }
    .textName {
      width: 100%;
      position: absolute;
      text-align: center;
      > div {
        width: 100%;
        text-align: center;
        &:first-child {
          font-size: 30px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #46e4c1;
          height: 40px;
          line-height: 40px;
          // overflow: hidden;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
          span {
            position: relative;
            // top: -6px;
          }
        }
        &:last-child {
          font-size: 17px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 36px;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        }
        > span {
        width: 100%;
        }
      }
    }
  }

  .left-SJGJ {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 483px;
    height: 70%;
    .SJGJ-Lcontent {
      height: 100%;
      margin-right: -36px;
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
      }
    }
    .imgSjgj {
      position: absolute;
      margin-left: 257px;
      z-index: -2;
    }
  }
  .center-SZZY {
    display: flex;
    justify-content: space-between;
    width: 877px;
    height: 70%;
    background: url('../../assets/imgs/GSPart/zjdb.png') no-repeat center center;
    background-size: 100% 100%;
    .center-SZZYLeft {
      position: relative;
      display: flex;
      align-items: center;
      left: 25px;
    }
    .center-SZZYCenter {
      height: 100%;
      width: 588px;
      position: relative;
      text-align: center;
      .center-SZZYCenter-top {
        p {
          height: 58px;
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          color: #ffffff;
          line-height: 58px;
          margin-left: -9px;
        }
      }
      .center-SZZYCenter-middle {
        text-align: center;
        .SZZYCenter-middle-ulFirst {
          margin-top: 50px;
          width: 100%;
          height: 135px;
          overflow: hidden;
          li {
            line-height: 70px;
            width: 50%;
            float: left;
            p {
              position: absolute;
              margin-left: 142px;
              margin-top: 8px;
              span {
                display: block;
                &:first-child {
                  font-size: 22px;
                  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
                  font-weight: bold;
                  line-height: 33px;
                  letter-spacing: 1px;
                }
                &:last-child {
                  font-size: 12px;
                  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 18px;
                }
              }
            }
          }
        }
      }
      .center-SZZYCenter-bottom {
        width: 100%;
        margin-top: 52px;
        .SZZYCenter-bottom {
          width: 50%;
          float: left;
          text-align: center;
          .bottom-content {
            .textName {
              position: absolute;
              margin-left: 110px;
            }
            p {
              height: 45px;
              font-size: 18px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #ffffff;
              line-height: 45px;
            }
          }
          .bottom-catalogue {
            ul {
              li {
                line-height: 47px;
                margin-top: 22px;
                p {
                  &:first-child {
                    font-size: 12px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #ffffff;
                    line-height: 17px;
                  }
                }
                .number {
                  position: absolute;
                  margin-left: 120px;
                  margin-top: 13px;
                  font-size: 20px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: #ffffff;
                  line-height: 28px;
                }
              }
            }
          }
        }
      }
    }
    .center-SZZYright {
      display: flex;
      align-items: center;
      position: relative;
      left: -26px;
    }
  }
  .right-SJGX {
    position: relative;
    left: -26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 483px;
    height: 70%;
    .imgSjgj {
      position: relative;
      left: -2px;
    }
    .imgJt4 {
      position: relative;
      left: -30px;
      z-index: 1;
    }
    .SJGJ-Rcontent {
      height: 100%;
      position: relative;
      left: -90px;
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
      }
    }
  }
}
</style>
