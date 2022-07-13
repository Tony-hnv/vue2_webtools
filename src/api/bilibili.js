import request from './index'

// 请求接口
export const getBilibiliById = id => {
  return request({
    method: 'GET',
    url: `api/bilibili/?uid=${id}`
  })
}
