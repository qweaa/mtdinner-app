import request from '@/utils/request'

export function GetStoreList({Current_Page, Current_Size, Status}) {
  return request({
    url: '/store/GetStoreList',
    method: 'get',
    params: { Current_Page, Current_Size, Status }
  })
}

export function GetStoreModel(Store_ID) {
  return request({
    url: '/store/GetStoreModel',
    method: 'get',
    params: { Store_ID }
  })
}

//修改店铺状态
export function UpdateStoreStatus({Store_ID, Status}) {
  return request({
    url: '/store/UpdateStatus',
    method: 'post',
    data: { Store_ID, Status }
  })
}

//添加店铺
export function AddStore({StoreName, Phones, Status, WeChat, Address}) {
  return request({
    url: '/store/AddStore',
    method: 'post',
    data: {StoreName, Phones, Status, WeChat, Address}
  })
}

//修改店铺信息
export function UpdateStore({StoreName, Status, Phones, WeChat, Address, Store_ID}) {
    return request({
      url: '/store/UpdateStore',
      method: 'post',
      data: {StoreName, Phones, Status, WeChat, Address, Store_ID}
    })
}