import request from './index'

export const getHistoryInToday = () => {
  return request({
    method: 'GET',
    url: 'api/lishi'
  })
}
