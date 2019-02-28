<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">注册</h3>
      <el-form-item prop="NickName">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.NickName" name="username" type="text" auto-complete="on" placeholder="昵称" />
      </el-form-item>
      <el-form-item prop="UserName">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.UserName" name="realname" type="text" auto-complete="on" placeholder="真是姓名" />
      </el-form-item>
      <el-form-item prop="Password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.Password"
          name="password"
          auto-complete="on"
          placeholder="密码"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <!-- 确认密码 -->
      <el-form-item prop="SubmitPassword">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.SubmitPassword"
          name="SubmitPassword"
          auto-complete="on"
          placeholder="确认密码"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          注册
        </el-button>
      </el-form-item>
      <!-- <div class="tips">
        <span style="margin-right:20px;">username: xcl</span>
        <span> password: 888888</span>
      </div> -->
      <router-link tag="div" class="register" to="login">登录</router-link>
    </el-form>
  </div>
</template>

<script>
import { validateUsername, validatePass, validateChinesename } from '@/utils/formRules'

export default {
  name: 'Login',
  data() {
    const validateSubmitPass = (rule, value, callback) => {
      console.log(123)
        if(value !== this.loginForm.Password){
            callback(new Error('两次密码不一致'))
        }
        callback()
    }
    return {
      loginForm: {
        NickName: '',
        UserName: '',
        Password: '',
        SubmitPassword: '',
      },
      loginRules: {
        NickName: [{ required: true, trigger: 'blur', validator: validateUsername }],
        UserName: [{ required: true, trigger: 'blur', validator: validateChinesename }],
        Password: [{ required: true, trigger: 'blur', validator: validatePass }],
        SubmitPassword: [{ required: true, trigger: 'blur', validator: validateSubmitPass }],
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  }
}
</script>

<style lang="less">
@bg:#2d3a4b;
@light_gray:#eee;

.register{color: white; cursor: pointer;}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: @light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px @bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style lang="less" scoped>
@bg:#2d3a4b;
@dark_gray:#889aa4;
@light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: @bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: @dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: @light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: @dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
