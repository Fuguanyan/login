import axios from 'axios'
import _vue from '@/main'

// 设置aiox拦截器
const api = axios.create({
    baseURL:'http://localhost:3000'
})

function checkLogin() {
    if (localStorage.getItem('token')) {
        // 将token设置在数据中一起发送
        api.interceptors.request.use((request) => {
            request.headers.token = localStorage.getItem('token')
            return request
        })
        api.interceptors.response.use(response => {
            if(response.data.expire) {
                _vue.$router.push('/failed')
            }
            return response
        })
    }

}
const service = {
    login:(user) => {
        return api.post('/users/login',{user}).then((res) => {
            // 登录成功
            let result = res.data.logon
            console.log(result)
            
            if (result) {
                // 把token储存在localStorage中
                if(res.headers.token) {
                    localStorage.setItem("token",res.headers.token)
                }
                // console.log(res.headers)
                _vue.$router.push('/')
            } else {
                _vue.$router.push('/failed')
            }
        })
    },
    // 访问后台方法
    home : () => {
        checkLogin() ;
        return api.get('/').then(res => {
            console.log(res)
            return res.data
           
        })
    }
}


export default service