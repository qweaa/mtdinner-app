import request from '@/utils/request'

const name = 'menu'

export function GetMenuList({Store_ID, Current_Page, Current_Size, Status, IsComment}) {
  return request({
    url: '/' + name + '/GetMenuList',
    method: 'get',
    params: {Store_ID, Current_Page, Current_Size, Status, IsComment}
  })
}

export function GetMenuListByIds(MenuList) {
  return request({
    url: '/' + name + '/GetMenuByIds',
    method: 'get',
    params: {MenuList}
  })
}

export function GetMenuByStoreid(Store_ID) {
  return request({
    url: '/' + name + '/GetMenuByStoreid',
    method: 'get',
    params: {Store_ID}
  })
}

export function GetMenuModel(Menu_ID) {
  return request({
    url: '/' + name + '/GetMenuModel',
    method: 'get',
    params: {Menu_ID}
  })
}

//修改菜单状态
export function UpdateMenuStatus({Menu_ID, Status}) {
  return request({
    url: '/' + name + '/UpdateStatus',
    method: 'post',
    data: { Menu_ID, Status }
  })
}

//添加菜单
export function AddMenu({MenuName, Status, IsComment, Year, Month, Week, Day, Price, Store_ID, MenuType_ID}) {
  return request({
    url: '/' + name + '/AddMenu',
    method: 'post',
    data: {MenuName, Status, IsComment, Year, Month, Week, Day, Price, Store_ID, MenuType_ID}
  })
}

//修改菜单
export function UpdateMenu({MenuName, IsComment, Month, Week, Day, Price, Menu_ID}) {
  return request({
    url: '/' + name + '/UpdateMenu',
    method: 'post',
    data: {MenuName, IsComment, Month, Week, Day, Price, Menu_ID}
  })
}