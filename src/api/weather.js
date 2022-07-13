import request from './index'

// 请求接口
export const getCityWeather = city => {
  return request({
    method: 'GET',
    url: `api/wether/?city=${city}`
  })
}
