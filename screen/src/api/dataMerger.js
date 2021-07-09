import request from '@/utils/request'

// 部门数据贡献量
export function getBMGXdata(params) {
  return request({
    url: 'bmsjgx',
    method: 'get',
    params: params,
  })
}

// 市级/区级数据
export function getSJQJdata(params) {
  return request({
    url: 'cityDistrict',
    method: 'get',
    params: params,
  })
}

// 采集方式
export function getCJFSdata(params) {
  return request({
    url: 'cjfs',
    method: 'get',
    params: params,
  })
}
// 月度累计统计
export function getYDLJdata(params) {
  return request({
    url: 'getGjMonthData',
    method: 'get',
    params: params,
  })
}

// 日累计统计
export function getRLJdata(params) {
  return request({
    url: 'getGjRjltj',
    method: 'get',
    params: params,
  })
}

// 汇集情况监控
export function getHJQKdata(params) {
  return request({
    url: 'getGjHjqkjk',
    method: 'get',
    params: params,
  })
}
