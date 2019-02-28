import request from '@/utils/request'

let name = 'book'

export function GetBookList({Current_Page, Current_Size}) {
  return request({
    url: '/' + name + '/GetBookList',
    method: 'get',
    params: { Current_Page, Current_Size }
  })
}

export function GetBookListByDay({Current_Page, Current_Size, Day}) {
  return request({
    url: '/' + name + '/GetBookListByDay',
    method: 'get',
    params: { Current_Page, Current_Size, Day }
  })
}

export function GetBookDetail(Book_ID) {
  return request({
    url: '/' + name + '/GetBookDetail',
    method: 'get',
    params: { Book_ID }
  })
}

//提交订单
export function SubmitBook({MenuList, Store_ID, User_ID, Remark}) {
  return request({
    url: '/' + name + '/SubmitBook',
    method: 'post',
    data: {MenuList, Store_ID, User_ID, Remark}
  })
}

//修改订单状态
export function UpdateStatus({Book_ID, Status}) {
  return request({
    url: '/' + name + '/UpdateStatus',
    method: 'post',
    data: { Book_ID, Status }
  })
}
//修改订单状态
export function UpdateBookStatus({Book_ID, BookStatus}) {
  return request({
    url: '/' + name + '/UpdateBookStatus',
    method: 'post',
    data: { Book_ID, BookStatus }
  })
}
//修改订单菜单
export function UpdateBookMenus({Book_ID, MenuList}) {
  return request({
    url: '/' + name + '/UpdateBookMenus',
    method: 'post',
    data: { Book_ID, MenuList }
  })
}
