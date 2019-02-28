import request from '@/utils/request'

export function GetUserList({Current_Page, Current_Size}) {
  return request({
    url: '/user/GetUserList',
    method: 'get',
    params: { Current_Page, Current_Size }
  })
}

//修改用户状态
export function UpdateStatus({User_ID, Status}) {
  return request({
    url: '/user/UpdateStatus',
    method: 'post',
    data: { User_ID, Status }
  })
}

//添加用户
export function Register({NickName, UserName, Password}) {
  return request({
    url: '/user/Register',
    method: 'post',
    data: { NickName, UserName, Password }
  })
}