import {
  resetRouter,
} from '@/router'

export function resetTokenAndClearUser() {
  // 退出登陆 清除用户资料
  localStorage.setItem('token', '')
  localStorage.setItem('userImg', '')
  localStorage.setItem('userName', '')
  // 重设路由
  resetRouter()
}
