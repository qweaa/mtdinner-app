import request from '@/utils/request'

export function login(NickName, Password) {
  return request({
    url: '/user/Login',
    method: 'post',
    data: {
      NickName,
      Password
    }
  })
}

export function getInfo() {
  return request({
    url: '/user/GetUserModel',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/user/Logout',
    method: 'post'
  })
}
