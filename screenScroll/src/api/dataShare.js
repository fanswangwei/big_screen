import request from '@/utils/request'

// 市区级数据量（左上角）
export function getSJQJdata(params) {
  return request({
    url: 'getGxCityDistrict',
    method: 'get',
    params: params,
  })
}

// 数据共享情况
export function getSharedata(params) {
  return request({
    url: 'getGxSjgxqk',
    method: 'get',
    params: params,
  })
}

// 共享数据量统计
export function getShareStatisticsdata(params) {
  return request({
    url: 'getGxsjltj',
    method: 'get',
    params: params,
  })
}

// 部门数据调用
export function getBranchdata(params) {
  return request({
    url: 'getGxBmsjdy',
    method: 'get',
    params: params,
  })
}

// 月度共享情况
export function getMonthSharedata(params) {
  return request({
    url: 'getGxMonthData',
    method: 'get',
    params: params,
  })
}

// 共享情况监控
export function getShareMonitordata(params) {
  return request({
    url: 'getShareMonitordata',
    method: 'get',
    params: params,
  })
}

// 纠错信息
export function getWrongdata(params) {
  return request({
    url: 'getWrongdata',
    method: 'get',
    params: params,
  })
}
