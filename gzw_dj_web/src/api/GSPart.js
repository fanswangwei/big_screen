import request from '@/utils/request'

// 市区级交换量&共享量
export function getCSdata(params) {
  return request({
    url: 'sjjhgx',
    method: 'get',
    params: params,
  })
}

// 中间模块上部分数据
export function getTopdata(params) {
  return request({
    url: 'zyglJgZy',
    method: 'get',
    params: params,
  })
}

// 中间模块下部分数据
export function getBottomdata(params) {
  return request({
    url: 'zyglMlBm',
    method: 'get',
    params: params,
  })
}
