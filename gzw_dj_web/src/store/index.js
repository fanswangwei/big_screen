import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // dialogValue: false, // 地图下方按钮点击后出现的弹框的显示隐藏
    // dialogSrc: '', // 弹窗iframe链接
    // iframeDom: '',
  },
  getters: {},
  mutations: {
    // // 关闭弹窗
    // closeDialog(state) {
    //   state.dialogValue = false
    //   state.dialogSrc = ''
    // },
    // // 打开弹窗
    // openDialog(state) {
    //   state.dialogValue = true
    // },
    // // 更新弹窗链接
    // updateDialogSrc(state, url) {
    //   state.dialogSrc = url
    // },
    // // 储存iframeDom
    // updateiframeDom(state, iframe) {
    //   state.iframeDom = iframe
    // },
  },
})

export default store
