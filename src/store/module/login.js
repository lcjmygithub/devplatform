/*****登陆获取token模块 *****/

import {GET_LOGIN} from '../mutation-types'
import {resLogin} from "../../api/api"

const state={
     loginMsg: null,  //公司信息
     token:''      //token
}
const getters={

}

const mutations = {
    [GET_LOGIN](state,loginMsg){
        console.log('mutations执行了')
        state.loginMsg = loginMsg 
        if(loginMsg==null){
            state.token = '' 
        }else{
            state.token = loginMsg.content
        }
        console.log("mutation")
        console.log(state.token)
        console.log("mutation")
       
    }
}

const actions={
    async  get_token({commit},refs){
        let result = await resLogin(refs)
        console.log(result)
        if(result.code=="10000"){
          let  loginMsg = result
           window.sessionStorage.setItem('token',loginMsg.content)
            commit(GET_LOGIN,loginMsg)
        }
      
    },
  
}


export default {
    state,
    mutations,
    actions,
    getters
  }