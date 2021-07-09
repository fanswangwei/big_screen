import axios from 'axios'
// import router from '@/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import {
//   resetTokenAndClearUser,
// } from '@/utils'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://dxshc7.natappfree.cc/api/' : '/api/', // 测试 ： 发布
  timeout: 60000,
})
service.interceptors.request.use(config => {
  Nprogress.start()
  return config
}, (error) => Promise.reject(error))

service.interceptors.response.use(response => {
  Nprogress.done()
  const res = response.data
  return res
}, (error) => {
  Nprogress.done()
  return Promise.reject(error)
})
export default service
