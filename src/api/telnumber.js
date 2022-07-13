import request from './index'

// 请求接口
export const getInfoByNumber = tel => {
  return request({
    method: 'GET',
    url: `api/tel/?tel=${tel}`
  })
}
