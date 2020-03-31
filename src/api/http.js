/****************引入核心包***********************/
import Axios from "axios"
/****************测试库******************/
// let baseURL = 'http://47.94.89.73:5432'
/****************正式库******************/
// let baseURL = "http://api.yizeai.com/"
let baseURL = "http://zeec.yuexunai.com" 
const http = Axios.create({
    baseURL,
    timeout: 1000*8,
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },
//     header:{'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
//     'Access-Control-Allow-Origin': '*'
// }
})
// 请求拦截器
http.interceptors.request.use((config)=>{
    let token = window.localStorage.getItem("token")
    config.headers.Authorization = `${token ? token : ''}`
    return config
    },
    (error => {
        return error
    })
)

export default http
