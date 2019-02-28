import request from '@/utils/request'

export function GetRules() {
  return request({
    url: '/rules/GetRules',
    method: 'get',
  })
}

//修改用户状态
export function UpdateRules({MaxCost, ActiveStoreID}) {
  return request({
    url: '/rules/UpdateRules',
    method: 'post',
    data: {MaxCost, ActiveStoreID}
  })
}