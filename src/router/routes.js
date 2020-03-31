/*****************引入组件*****************/
import Home from "../components/Home.vue"
import Space from "../pages/Space.vue"
/*****************快速入门*****************/
import QuickToDoor from "../pages/quickToDoor/QuickToDoor.vue"
import ProcessIntro from "../pages/quickToDoor/ProcessIntro.vue"
/*****************开发引导*****************/
import AuthenticationMethod from "../pages/developmentGuidance/AuthenticationMethod.vue"
import CallbackDesc  from  "../pages/developmentGuidance/CallbackDesc.vue"
import GetToken  from "../pages/developmentGuidance/GetToken.vue"
/*****************API接口*****************/
        /********公司信息API********/
import List_1 from "../pages/API/companyAPI/List_1.vue"
import List_2 from "../pages/API/companyAPI/List_2.vue"
import List_3 from "../pages/API/companyAPI/List_3.vue"
import List_4 from "../pages/API/companyAPI/List_4.vue"
import List_5 from "../pages/API/companyAPI/List_5.vue"
        /********任务API********/
import List_8 from "../pages/API/taskAPI/List_8.vue"
import List_9 from "../pages/API/taskAPI/List_9.vue"
import List_10 from "../pages/API/taskAPI/List_10.vue"
import List_11 from "../pages/API/taskAPI/List_11.vue"
import List_12 from "../pages/API/taskAPI/List_12.vue"
import List_13 from "../pages/API/taskAPI/List_13.vue"
import List_14 from "../pages/API/taskAPI/List_14.vue"
import List_15 from "../pages/API/taskAPI/List_15.vue"
import List_16 from "../pages/API/taskAPI/List_16.vue"
import List_17 from "../pages/API/taskAPI/List_17.vue"
        /********通话API********/
import List_18 from "../pages/API/callAPI/List_18.vue"
/*****************回调模块*****************/
import Call_1 from "../pages/callbackModule/Call_1.vue"
import Call_2 from "../pages/callbackModule/Call_2.vue"
/*****************SDK参考*****************/
import SdkIntro from "../pages/SDKReference/SdkIntro.vue"
/*****************全局错误码*****************/
import GlobalErr from  "../pages/GlobalErr.vue"
/*****************S常见问题*****************/
import NormalProblem from "../pages/NormalProblem.vue"
export default [
        
             {
                path: "/",
                component: Home,
                meta:{
                    title:'快速入门',
                    icon:"el-icon-s-marketing",
                    flag:"",
                },
                // redirect:"/home",
                redirect: '/quick_to_door',
                children:[
                    //快速入门二级菜单
                    { path: "/quick_to_door", component: QuickToDoor,meta:{title:'接入指南'}},
                    { path: "/process_intro", component: ProcessIntro,meta:{title:'流程介绍'}},
                ],
              },
              {
                path: "/home1",
                component: Home,
                meta:{
                    title:'开发引导',
                    icon:"el-icon-location",
                    flag:""
                },
                children:[
                     //开发引导二级菜单
                     { path: "/authentication_method", component: AuthenticationMethod,meta:{title:"请求说明"}},
                     { path: "/callback_desc", component: CallbackDesc,meta:{title:"回调说明"}},
                     { path: "/get_token", component: GetToken,meta:{title:"获取TOKEN"}},
                 ],
              },
              {
                path: "/home2",
                component: Home,
                meta:{
                    title:'API接口',
                    icon:"el-icon-s-platform",
                }, 
                children:[
                   //公司信息API三级菜单
                   { path: "/h", component: Space, meta:{title:'公司信息API',has2thChildren:true,icon:'el-icon-receiving'},
                    children:[
                        { path: "/list_1", component: List_1,meta:{title:"获得公司的外呼线路列表"}},
                        { path: "/list_2", component: List_2,meta:{title:"查询剩余并发"}},
                        { path: "/list_3", component: List_3,meta:{title:"新增黑名单"}},
                        { path: "/list_4", component: List_4,meta:{title:"获得机器人话术列表"}},
                        // { path: "/list_5", component: List_5,meta:{title:"获取公司短信模板"}},

                     ]
                   },
                    //任务API三级菜单
                   { path: "/i", component: Space, meta:{title:'任务API',has2thChildren:true,icon:'el-icon-collection'},
                    children:[
                       { path: "/list_8" , component: List_8,meta:{title:"查询任务中已完成的电话"}},
                       { path: "/list_9" , component: List_9,meta:{title:"查询任务详情"}},
                       { path: "/list_10", component: List_10,meta:{title:"查询任务列表"}},
                       { path: "/list_11", component: List_11,meta:{title:"删除任务"}},
                       { path: "/list_12", component: List_12,meta:{title:"任务开启暂停"}},
                       { path: "/list_13", component: List_13,meta:{title:"任务中导入数据"}},
                       { path: "/list_14", component: List_14,meta:{title:"修改任务"}},
                       { path: "/list_15", component: List_15,meta:{title:"新增任务"}},
                       { path: "/list_16", component: List_16,meta:{title:"导入文件"}},
                       { path: "/list_17", component: List_17,meta:{title:"查询数据批次"}}
                    ]
                  },
                   //通话API三级菜单
                  { path: "/j", component: Space,meta:{title:'通话API',has2thChildren:true,icon:'el-icon-office-building'},
                    children:[
                        { path: "/list_18" , component: List_18,meta:{title:"获取通话记录详情"}},
                    ]
                  },
                
                ]
              },
              {
                path: "/home3",
                component: Home,
                meta:{
                    title:'回调模块',
                    icon:"el-icon-s-flag",
                },
             
                children:[
                    //回调模块二级菜单
                    { path: "/call_1", component: Call_1,meta:{title:"任务完成回调"}},
                    { path: "/call_2", component: Call_2,meta:{title:'意向客户回调'}},
                ]
              },
              // {
              //   path: "/home4",
              //   component: Home,
              //   meta:{
              //       title:'SDK参考',
              //       icon:"el-icon-s-home",
              //   },
              //   children:[
              //       //SDK参考二级菜单
              //     { path: "/sdk_intro", component: SdkIntro,meta:{title:"SDK简介"}},
              //   ]
              // },
              // {
              //   path: "/home5",
              //   component: Home,
              //   meta:{
              //       title:'全局错误码',
              //       icon:"el-icon-s-home",
              //       hasNoChildren: true
              //   },
              
              //   children:[
              //       //全局错误码一级菜单
              //       { path: "/global_err", component: GlobalErr},
              //   ],
              // },
              {
                path: "/home6",
                component: Home,
                meta:{
                    title:'常见问题',
                    icon:"el-icon-s-home",
                    hasNoChildren:true
                },
                children:[
                    //常见问题一级菜单
                    { path: "/normal_problem", component: NormalProblem}
                ],
              },
           
]

