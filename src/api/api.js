//引入核心文件
// import Vue from "vue"
// import http from "./http"
import request from "./axios";
/*****************api接口***************/
//登录接口   //json  "application/json"
// export const resLogin = params => { return http.post(`/open/verfilyLogin`, params,) };
// export const resLogin = params => { return http.post(`/open/verfilyLogin`, params,) };
export const resLogin = data => request (`/open/login`,'get',data)

//新增黑名单
export const saveOrUpdateZtBlackList = data =>request (`/open/saveOrUpdateZtBlackList?token=bfe008d12bd74365a898e68def641626`,'post',data,{"Content-type": "application/json"})