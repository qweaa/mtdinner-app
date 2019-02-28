import request from '@/utils/request'

const name = 'menutype'

export function getMenuTypeList() {
  return request({
    url: '/' + name + '/getMenuTypeList',
    method: 'get',
  })
}

//根据菜单分类id修改菜单
export function updateMenuType({TypeName, Summary, MenuTypeId}) {
  return request({
    url: '/' + name + '/updateMenuType',
    method: 'post',
    data: {TypeName, Summary, MenuTypeId}
  })
}

//添加菜单类型
export function addMenuType({TypeName, Summary}) {
  return request({
    url: '/' + name + '/addMenuType',
    method: 'post',
    data: {TypeName, Summary}
  })
}