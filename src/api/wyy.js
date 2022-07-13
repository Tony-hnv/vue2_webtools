import request from './index'

// 请求接口
export const getNeteasInform = uid => {
  return request({
    method: 'GET',
    url: `api/mywyy/?uid=${uid}`
  })
}
