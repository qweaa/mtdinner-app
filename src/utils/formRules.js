import { regexp } from './validate'

//合法用户名
export const validateUsername = (rule, value, callback) => {
    if(!value){
        callback(new Error('请填写昵称'))
    } else if (regexp.HasIllegalSign(value)) {
        callback(new Error('用户名不得含有非法字符'))
    } else {
        callback()
    }
}

//合法真是姓名
export const validateChinesename = (rule, value, callback) => {
    if (!regexp.IsChineseName(value)) {
        callback(new Error('请填写真实中文名'))
    } else {
        callback()
    }
}

//合法密码
export const validatePass = (rule, value, callback) => {
    if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
    } else if(regexp.HasIllegalSign(value)) {
        callback(new Error('密码不得含有非法字符'))
    } else {
        callback()
    }
}