import ajax from './ajax'

// 请求首页数据
export const getNewsList = (index) => ajax(`/axios/news`, { index })
// 密码登录
export const pwdLogin = (phone, pass, captcha) => ajax(`/axios/user`, { phone, pass, captcha }, 'POST')
// 验证码对比 发送密码
export const send = (phone, captcha) => ajax(`/axios/contrast`, { phone, captcha }, 'POST')
// 用户注册
export const phoneRegister = (phone, pass) => ajax(`/axios/register`, { phone, pass }, 'POST')
// export const postUser = () => ajax(`${BASE_URL}/api/user`)
// 请求短信验证码
// export const getPhoneCode = (phone) => ajax(`${BASE_URL}/api/send_code`, { phone })
// 手机验证码登录
// export const PhoneCodeLogin = (phone, code) => ajax(`${BASE_URL}/api/login_code`, { phone, code }, 'POST')
// 密码登录
// export const pwdLogin = (username, password, captcha) => ajax(`${BASE_URL}/api/login_pwd`, { username, password, captcha }, 'POST')
