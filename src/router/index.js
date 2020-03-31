/**************引入核心文件****************/
import vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
//注册路由器
vue.use(VueRouter)
const router = new VueRouter({
    routes
})

//前置守卫导航
export default  router