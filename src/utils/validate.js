/**
 * Created by jiachenpan on 16/11/18.
 */

//正则
export const regexp = {
  IsChineseName(s){
    return /^[\u2E80-\u9FFF]{2,5}$/.test(s)
  },
  HasIllegalSign(s){
    return /[\?!#$%\\^&\*\(\)\|\[\]]+/.test(s)
  },
  IsNumber(s){
    return /^\d+$/.test(s)
  },
  isArray(s){
    return Object.prototype.toString.call(s) === '[object Array]'
  },
  isObject(s){
    return Object.prototype.toString.call(s) === '[object Object]'
  },
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
